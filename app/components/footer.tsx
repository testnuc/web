import { Shield } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center space-x-2">
              <Shield className="h-8 w-8 text-yellow-500" />
              <span className="text-xl font-bold text-white">CyberTegh</span>
            </Link>
            <p className="mt-4 text-sm text-gray-400">
              Empowering the next generation of cybersecurity professionals with cutting-edge training and hands-on
              experience.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-300 mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#contact" className="text-sm text-gray-400 hover:text-yellow-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-300 mb-4">Legal</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#privacy" className="text-sm text-gray-400 hover:text-yellow-400 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#terms" className="text-sm text-gray-400 hover:text-yellow-400 transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="#cookies" className="text-sm text-gray-400 hover:text-yellow-400 transition-colors">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800">
          <p className="text-center text-sm text-gray-400">
            © {new Date().getFullYear()} CyberTegh. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

