"use client"

import { useState, useEffect } from "react"
import { Shield } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { supabase } from "@/lib/supabase"

const apiEndpoints = [
  "https://crt.sh/?q={domain}&output=json",
  "https://api.hackertarget.com/hostsearch/?q={domain}",
  "https://jldc.me/anubis/subdomains/{domain}",
  "https://web.archive.org/cdx/search/cdx?url=*.{domain}&output=json",
]

export default function SubdomainScanner() {
  const [domain, setDomain] = useState("")
  const [subdomains, setSubdomains] = useState<string[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [uploadStatus, setUploadStatus] = useState("")
  const [supabaseConnectionStatus, setSupabaseConnectionStatus] = useState("Checking...")

  useEffect(() => {
    checkSupabaseConnection()
  }, [])

  const checkSupabaseConnection = async () => {
    try {
      const { data, error } = await supabase.from("subdomain_scans").select("id").limit(1)
      if (error) throw error
      setSupabaseConnectionStatus("Connected to Supabase")
      console.log("Supabase connection successful")
    } catch (error) {
      setSupabaseConnectionStatus("Failed to connect to Supabase")
      console.error("Supabase connection error:", error)
    }
  }

  const scanSubdomains = async () => {
    setLoading(true)
    setError("")
    setSubdomains([])
    setUploadStatus("")

    try {
      const results = await Promise.all(
        apiEndpoints.map(async (endpoint) => {
          const url = endpoint.replace("{domain}", domain)
          try {
            const response = await fetch("/api/proxy?url=" + encodeURIComponent(url))
            if (!response.ok) {
              console.error(`API error for ${url}: ${response.statusText}`)
              return []
            }
            const text = await response.text()
            let data
            try {
              data = JSON.parse(text)
            } catch {
              data = text
            }
            return extractSubdomains(data, endpoint)
          } catch (err) {
            console.error(`Error fetching from ${url}:`, err)
            return []
          }
        }),
      )

      const allSubdomains = Array.from(new Set(results.flat())).sort()
      setSubdomains(allSubdomains)

      if (allSubdomains.length === 0) {
        setError("No subdomains found. Try a different domain or check your internet connection.")
      } else {
        await uploadToSupabase(domain, allSubdomains)
      }
    } catch (err) {
      setError("An error occurred while scanning subdomains. Please try again.")
      console.error("Subdomain scanning error:", err)
    } finally {
      setLoading(false)
    }
  }

  const cleanSubdomain = (subdomain: string) => subdomain.replace(/^\*\./, "")

  const extractSubdomains = (data: any, endpoint: string): string[] => {
    if (typeof data === "string") {
      return data
        .split("\n")
        .filter((line) => line.includes(domain))
        .map((line) => cleanSubdomain(line.split(",")[0].trim()))
    }

    if (Array.isArray(data)) {
      return data
        .flatMap((item) => {
          if (typeof item === "string") return cleanSubdomain(item)
          if (item.name_value) return cleanSubdomain(item.name_value)
          if (item.url) return cleanSubdomain(item.url.split("/")[2])
          return []
        })
        .filter((subdomain) => subdomain.includes(domain) && subdomain !== domain)
    }

    if (typeof data === "object" && data !== null) {
      if (data.subdomains) return data.subdomains.map(cleanSubdomain)
      if (data.data && Array.isArray(data.data)) {
        return data.data.flatMap((item) => {
          if (item.hostname) return cleanSubdomain(item.hostname)
          if (item.domain) return cleanSubdomain(item.domain)
          return []
        })
      }
    }

    return []
  }

  const copySubdomains = () => {
    const subdomainText = subdomains.join("\n")
    navigator.clipboard.writeText(subdomainText).then(
      () => {
        alert("Subdomains copied to clipboard!")
      },
      (err) => {
        console.error("Could not copy text: ", err)
      },
    )
  }

  const uploadToSupabase = async (domain: string, subdomains: string[]) => {
    try {
      console.log("Uploading to Supabase:", { domain, subdomains })
      const { data, error } = await supabase
        .from("subdomain_scans")
        .insert({ domain, subdomains, scanned_at: new Date().toISOString() })

      if (error) throw error
      setUploadStatus("Scan results uploaded successfully")
      console.log("Data uploaded successfully", data)
    } catch (error) {
      console.error("Error uploading to Supabase:", error)
      setUploadStatus("Failed to upload scan results")
      setError("Failed to upload scan results. Please try again.")
    }
  }

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <div className="fixed inset-0 overflow-hidden">
        <StarryBackground />
      </div>
      <div className="relative z-10">
        <nav className="bg-gray-900/80 backdrop-blur-sm border-b border-gray-800 p-4">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <Link href="/" className="flex items-center space-x-2">
              <Shield className="h-8 w-8 text-yellow-500" />
              <span className="text-xl font-bold text-white">CyberTegh</span>
            </Link>
            <Link href="/tools" className="text-gray-300 hover:text-yellow-400 transition-colors">
              Back to Tools
            </Link>
          </div>
        </nav>

        <main className="max-w-4xl mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold text-center mb-8">Passive Subdomain Scanner</h1>
          <div className="mb-4 text-center">
            <p className={supabaseConnectionStatus.includes("Connected") ? "text-green-500" : "text-red-500"}>
              {supabaseConnectionStatus}
            </p>
          </div>
          <div className="flex space-x-4 mb-8">
            <Input
              type="text"
              placeholder="Enter domain (e.g., example.com)"
              value={domain}
              onChange={(e) => setDomain(e.target.value)}
              className="flex-grow bg-gray-800 text-white border-gray-700"
            />
            <Button onClick={scanSubdomains} disabled={loading} className="bg-yellow-600 hover:bg-yellow-700">
              {loading ? "Scanning..." : "Scan"}
            </Button>
          </div>
          {error && <p className="text-red-500 mb-4">{error}</p>}
          {subdomains.length > 0 && (
            <div className="bg-gray-800 rounded-lg p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-semibold">Discovered Subdomains</h2>
                <Button onClick={copySubdomains} className="bg-yellow-600 hover:bg-yellow-700">
                  Copy All
                </Button>
              </div>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {subdomains.map((subdomain, index) => (
                  <li key={index} className="text-gray-300">
                    {subdomain}
                  </li>
                ))}
              </ul>
            </div>
          )}
          {uploadStatus && (
            <p className={`mt-4 ${uploadStatus.includes("Failed") ? "text-red-500" : "text-green-500"}`}>
              {uploadStatus}
            </p>
          )}
        </main>
      </div>
    </div>
  )
}

function StarryBackground() {
  const [stars, setStars] = useState<{ x: number; y: number; size: number }[]>([])

  useEffect(() => {
    const generateStars = () => {
      const newStars = Array.from({ length: 100 }, () => ({
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 2 + 1,
      }))
      setStars(newStars)
    }

    generateStars()
  }, [])

  return (
    <div className="absolute inset-0">
      {stars.map((star, index) => (
        <motion.div
          key={index}
          className="absolute rounded-full bg-white"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
          }}
          animate={{
            opacity: [0.5, 1, 0.5],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: Math.random() * 3 + 2,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />
      ))}
    </div>
  )
}

