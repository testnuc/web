"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { useState, useEffect } from "react"

const stats = [
  { id: 1, value: 1000, label: "Students Trained", suffix: "+" },
  { id: 2, value: 5, label: "Expert Instructors", suffix: "+" },
  { id: 3, value: 100, label: "Course Modules", suffix: "+" },
  { id: 4, value: 95, label: "Success Rate", suffix: "%" },
]

export default function Stats() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <StatCard key={stat.id} {...stat} />
          ))}
        </div>
      </div>
    </section>
  )
}

function StatCard({ value, label, suffix }: { value: number; label: string; suffix: string }) {
  const [count, setCount] = useState(0)
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  })

  useEffect(() => {
    if (inView) {
      const duration = 2000
      const steps = 60
      const stepValue = value / steps
      let current = 0

      const timer = setInterval(() => {
        current += stepValue
        if (current >= value) {
          setCount(value)
          clearInterval(timer)
        } else {
          setCount(Math.floor(current))
        }
      }, duration / steps)

      return () => clearInterval(timer)
    }
  }, [inView, value])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="text-center p-6 rounded-2xl bg-yellow-500/5 hover:bg-yellow-500/10 transition-colors"
    >
      <div className="text-3xl md:text-4xl font-bold text-yellow-400">
        {count}
        {suffix}
      </div>
      <div className="text-gray-300 mt-2">{label}</div>
    </motion.div>
  )
}

