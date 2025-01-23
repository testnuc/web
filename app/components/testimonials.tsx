"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"

const testimonials = [
  {
    quote:
      "CyberTegh's advanced penetration testing course completely transformed my career. The hands-on labs and expert instruction were invaluable.",
    author: "Security Engineer at Fortune 500",
    rating: 5,
  },
  {
    quote:
      "The incident response training provided practical scenarios that prepared me for real-world challenges. Highly recommended!",
    author: "Cybersecurity Analyst",
    rating: 5,
  },
  {
    quote:
      "Outstanding curriculum and excellent support. The live training sessions were particularly helpful in understanding complex concepts.",
    author: "IT Security Manager",
    rating: 5,
  },
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const next = () => {
    setCurrentIndex((current) => (current + 1) % testimonials.length)
  }

  const previous = () => {
    setCurrentIndex((current) => (current - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black" id="testimonials">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-3 py-1 text-sm font-semibold text-yellow-400 bg-yellow-500/10 rounded-full mb-4">
            Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white">What Our Students Say</h2>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.5 }}
            className="text-center px-8 py-12"
          >
            <Quote className="h-12 w-12 text-yellow-500 mx-auto mb-8" />
            <blockquote className="text-2xl font-medium mb-8 text-white">
              "{testimonials[currentIndex].quote}"
            </blockquote>
            <div className="text-yellow-400 font-medium mb-4">{testimonials[currentIndex].author}</div>
            <div className="flex justify-center gap-1">
              {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                <svg key={i} className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
          </motion.div>

          <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 flex justify-between">
            <Button
              variant="ghost"
              size="icon"
              onClick={previous}
              className="text-yellow-400 hover:text-yellow-300 hover:bg-yellow-500/10"
            >
              <ChevronLeft className="h-8 w-8" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={next}
              className="text-yellow-400 hover:text-yellow-300 hover:bg-yellow-500/10"
            >
              <ChevronRight className="h-8 w-8" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

