"use client"

import { ShinyButton } from "@/components/ui/shiny-button"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"

const FloatingStar = ({ size, top, left, duration }: { size: number; top: number; left: number; duration: number }) => (
  <motion.div
    className="absolute rounded-full bg-white"
    style={{
      width: `${size}px`,
      height: `${size}px`,
      boxShadow: `0 0 ${size * 2}px ${size / 2}px rgba(255, 255, 255, 0.8)`,
    }}
    initial={{ x: left, y: top }}
    animate={{
      y: [top - 10, top + 10, top - 10],
      x: [left - 5, left + 5, left - 5],
    }}
    transition={{
      y: { duration: duration, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
      x: { duration: duration * 1.2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
    }}
  />
)

const MovingStar = ({
  size,
  initialTop,
  initialLeft,
  speed,
}: { size: number; initialTop: number; initialLeft: number; speed: number }) => (
  <motion.div
    className="absolute rounded-full bg-white"
    style={{
      width: `${size}px`,
      height: `${size}px`,
      boxShadow: `0 0 ${size * 2}px ${size / 2}px rgba(255, 255, 255, 0.8)`,
    }}
    initial={{ x: initialLeft, y: initialTop }}
    animate={{
      x: [initialLeft, initialLeft + 100, initialLeft],
      y: [initialTop, initialTop + 50, initialTop],
    }}
    transition={{
      x: { duration: speed, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
      y: { duration: speed * 0.5, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
    }}
  />
)

const BackgroundStar = ({ size, top, left }: { size: number; top: number; left: number }) => (
  <div
    className="absolute rounded-full bg-white"
    style={{
      width: `${size}px`,
      height: `${size}px`,
      top: `${top}%`,
      left: `${left}%`,
      boxShadow: `0 0 ${size * 2}px ${size / 2}px rgba(255, 255, 255, 0.8)`,
      animation: `twinkle ${Math.random() * 5 + 5}s infinite ${Math.random() * 5}s`,
    }}
  />
)

export default function Hero() {
  const [floatingStars, setFloatingStars] = useState<
    { id: number; size: number; top: number; left: number; duration: number }[]
  >([])
  const [movingStars, setMovingStars] = useState<
    { id: number; size: number; top: number; left: number; speed: number }[]
  >([])
  const [backgroundStars, setBackgroundStars] = useState<{ id: number; size: number; top: number; left: number }[]>([])

  useEffect(() => {
    const newFloatingStars = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      size: Math.random() * 3 + 2,
      top: Math.random() * window.innerHeight,
      left: Math.random() * window.innerWidth,
      duration: Math.random() * 3 + 2,
    }))
    setFloatingStars(newFloatingStars)

    const newMovingStars = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      size: Math.random() * 2 + 1,
      top: Math.random() * window.innerHeight,
      left: Math.random() * window.innerWidth,
      speed: Math.random() * 10 + 5,
    }))
    setMovingStars(newMovingStars)

    const newBackgroundStars = Array.from({ length: 100 }, (_, i) => ({
      id: i,
      size: Math.random() * 2 + 1,
      top: Math.random() * 100,
      left: Math.random() * 100,
    }))
    setBackgroundStars(newBackgroundStars)
  }, [])

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#000000]">
      {/* Space background */}
      <div className="absolute inset-0 overflow-hidden">
        {backgroundStars.map((star) => (
          <BackgroundStar key={star.id} size={star.size} top={star.top} left={star.left} />
        ))}
      </div>

      {/* Floating stars */}
      {floatingStars.map((star) => (
        <FloatingStar key={star.id} size={star.size} top={star.top} left={star.left} duration={star.duration} />
      ))}

      {/* Moving stars */}
      {movingStars.map((star) => (
        <MovingStar key={star.id} size={star.size} initialTop={star.top} initialLeft={star.left} speed={star.speed} />
      ))}

      {/* Animated background text */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute inset-0 flex items-center justify-center text-gray-900 text-[20vw] font-bold opacity-5"
          initial={{ y: "100%" }}
          animate={{ y: "0%" }}
          transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse", ease: "linear" }}
        >
          CYBERTEGH
        </motion.div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <span className="inline-block px-4 py-1 rounded-full bg-yellow-500/10 text-yellow-400 text-sm font-medium mb-6 relative overflow-hidden">
            <span className="relative z-10">🚀 Welcome to CyberTegh</span>
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 via-yellow-500/20 to-yellow-400/20 animate-shimmer" />
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl sm:text-6xl font-bold mb-6 text-white relative"
        >
          <span className="relative z-10">
            Master Cybersecurity with{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">
              CyberTegh
            </span>
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"
        >
          Dive into our comprehensive cybersecurity courses and become an expert. Learn from industry professionals and
          stay ahead in the digital security landscape.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <ShinyButton
            onClick={() => {
              const coursesSection = document.getElementById("courses")
              if (coursesSection) {
                coursesSection.scrollIntoView({ behavior: "smooth" })
              }
            }}
            className="bg-yellow-600 hover:bg-yellow-700 text-white"
          >
            Get Started
          </ShinyButton>
        </motion.div>
      </div>
    </div>
  )
}

