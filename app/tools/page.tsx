import { Shield } from "lucide-react"
import Link from "next/link"
import { ShinyButton } from "@/components/ui/shiny-button"

const tools = [
  {
    name: "Passive Subdomain Scanner",
    description: "Discover and enumerate subdomains of a target domain",
    icon: "🔍",
    link: "/tools/subdomain-scanner",
  },
  {
    name: "AI Guesser",
    description: "AI tool for finding APIs and learning how to exploit them",
    icon: "🤖",
    link: "https://singhapi.vercel.app/",
  },
  {
    name: "Password Cracker",
    description: "Test password strength and security",
    icon: "🔐",
    link: "#",
  },
  {
    name: "Encryption Tool",
    description: "Secure your data with advanced encryption",
    icon: "🔒",
    link: "#",
  },
  {
    name: "Malware Analyzer",
    description: "Detect and analyze malicious software",
    icon: "🦠",
    link: "#",
  },
  {
    name: "Firewall Tester",
    description: "Evaluate your firewall's effectiveness",
    icon: "🛡️",
    link: "#",
  },
]

export default function ToolsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      <nav className="bg-gray-900/80 backdrop-blur-sm border-b border-gray-800 p-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2">
            <Shield className="h-8 w-8 text-blue-500" />
            <span className="text-xl font-bold text-white">CyberTegh</span>
          </Link>
          <Link href="/" className="text-gray-300 hover:text-blue-400 transition-colors">
            Back to Home
          </Link>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-center mb-12 text-blue-400">CyberTegh Tools</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tools.map((tool, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-700"
            >
              <div className="text-4xl mb-4">{tool.icon}</div>
              <h2 className="text-xl font-semibold mb-2 text-blue-400">{tool.name}</h2>
              <p className="text-gray-400 mb-4">{tool.description}</p>
              <Link href={tool.link} target={tool.name === "AI Guesser" ? "_blank" : "_self"}>
                <ShinyButton className="w-full bg-blue-600 hover:bg-blue-700">Learn More</ShinyButton>
              </Link>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}

