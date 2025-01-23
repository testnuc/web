"use client"

import { Book, Users, Award, Shield, Trophy } from "lucide-react"
import { motion } from "framer-motion"

const features = [
  {
    icon: Book,
    title: "Comprehensive Curriculum",
    description: "Our courses cover a wide range of cybersecurity topics, from basics to advanced techniques.",
  },
  {
    icon: Users,
    title: "Expert-Led Live Training",
    description: "Learn from expert instructors through live training and interactive sessions.",
  },
  {
    icon: Award,
    title: "Industry-Recognized Certifications",
    description: "Gain certifications that are valued and recognized in the cybersecurity industry.",
  },
  {
    icon: Shield,
    title: "Ethical Hacking Experience",
    description: "Our team has ethically hacked 400+ companies, providing real-world insights and expertise.",
  },
  {
    icon: Trophy,
    title: "Top-Ranked Hackers",
    description: "Our instructors are ranked among the top hackers on various cybersecurity platforms.",
  },
]

export default function Features() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black" id="tools">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-3 py-1 text-sm font-semibold text-yellow-400 bg-yellow-500/10 rounded-full mb-4">
            Our Tools
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-yellow-400">Why Choose CyberTegh?</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Explore our cutting-edge cybersecurity tools and expertise.</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative p-6 rounded-2xl bg-gradient-to-b from-yellow-500/10 to-transparent"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-yellow-500/5 to-transparent" />
              <div className="relative">
                <feature.icon className="h-12 w-12 text-yellow-500 mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-white">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

