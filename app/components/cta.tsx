"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function CTA() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-black">
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 via-transparent to-transparent" />

      <div className="max-w-7xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-yellow-400">Ready to Start Your Journey?</h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-8">
            Join thousands of students who have already taken the first step towards a career in cybersecurity.
          </p>

          <form className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
            <Input
              type="email"
              placeholder="Enter your email"
              className="bg-gray-900/50 border-yellow-500/20 focus:border-yellow-500 text-white placeholder-gray-400"
            />
            <Button className="bg-yellow-600 hover:bg-yellow-700 text-white">Get Started</Button>
          </form>

          <p className="text-sm text-gray-400 mt-4">Start your free trial. No credit card required.</p>
        </motion.div>
      </div>
    </section>
  )
}

