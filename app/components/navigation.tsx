"use client"

import { Shield } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { ShinyButton } from "@/components/ui/shiny-button"

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
      setIsMenuOpen(false)
    }
  }

  return (
    <nav className="fixed w-full z-50 bg-gray-900/80 backdrop-blur-sm border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <Shield className="h-8 w-8 text-yellow-500" />
              <span className="text-xl font-bold text-white">CyberTegh</span>
            </Link>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <Link href="/tools" className="text-gray-300 hover:text-yellow-400 transition-colors">
                Tools
              </Link>
              <button
                onClick={() => scrollToSection("courses")}
                className="text-gray-300 hover:text-yellow-400 transition-colors"
              >
                Courses
              </button>
              <button
                onClick={() => scrollToSection("testimonials")}
                className="text-gray-300 hover:text-yellow-400 transition-colors"
              >
                Reviews
              </button>
              <ShinyButton
                onClick={() => (window.location.href = "/contact")}
                className="bg-yellow-600 hover:bg-yellow-700 text-white"
              >
                Contact
              </ShinyButton>
            </div>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-400 hover:text-white">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-900/95 backdrop-blur-sm">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/tools" className="block px-3 py-2 text-gray-300 hover:text-yellow-400 w-full text-left">
              Tools
            </Link>
            <button
              onClick={() => scrollToSection("courses")}
              className="block px-3 py-2 text-gray-300 hover:text-yellow-400 w-full text-left"
            >
              Courses
            </button>
            <button
              onClick={() => scrollToSection("testimonials")}
              className="block px-3 py-2 text-gray-300 hover:text-yellow-400 w-full text-left"
            >
              Reviews
            </button>
            <ShinyButton
              variant="secondary"
              className="w-full bg-yellow-600 hover:bg-yellow-700 text-white mt-4"
              onClick={() => (window.location.href = "/contact")}
            >
              Contact
            </ShinyButton>
          </div>
        </div>
      )}
    </nav>
  )
}

