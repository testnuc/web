"use client"

import { motion } from "framer-motion"
import { Shield, Server, Code, Lock, Database, Wifi } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"

const courses = [
  {
    icon: Shield,
    title: "Network Security Fundamentals",
    description: "Learn the basics of network security and protection against cyber threats.",
    duration: "8 weeks",
    level: "Beginner",
    price: "$299",
  },
  {
    icon: Server,
    title: "Advanced Penetration Testing",
    description: "Master the art of ethical hacking and penetration testing.",
    duration: "12 weeks",
    level: "Advanced",
    price: "$499",
  },
  {
    icon: Code,
    title: "Cybersecurity Basics",
    description: "Learn the fundamentals of cybersecurity and build a strong foundation.",
    duration: "10 weeks",
    level: "Beginner",
    price: "$399",
  },
  {
    icon: Lock,
    title: "Incident Response",
    description: "Develop skills to respond to and manage security incidents.",
    duration: "6 weeks",
    level: "Intermediate",
    price: "$299",
  },
  {
    icon: Database,
    title: "Bug Bounty",
    description: "Master the art of finding and reporting security vulnerabilities.",
    duration: "8 weeks",
    level: "Intermediate",
    price: "$349",
  },
  {
    icon: Wifi,
    title: "Wireless Security",
    description: "Secure wireless networks and prevent unauthorized access.",
    duration: "6 weeks",
    level: "Beginner",
    price: "$249",
  },
]

export default function Courses() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black" id="courses">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-3 py-1 text-sm font-semibold text-yellow-400 bg-yellow-500/10 rounded-full mb-4">
            Our Courses
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white">Expert-Led Cybersecurity Training</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Choose from our range of comprehensive courses designed to take you from beginner to expert.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gray-900 border-yellow-500/20 hover:border-yellow-500/40 transition-colors">
                <CardHeader>
                  <course.icon className="h-12 w-12 text-yellow-500 mb-4" />
                  <CardTitle className="text-white">{course.title}</CardTitle>
                  <CardDescription className="text-gray-300">{course.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between text-sm text-gray-300">
                    <div>Duration: {course.duration}</div>
                    <div>Level: {course.level}</div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between items-center">
                  <div className="text-2xl font-bold text-yellow-400">{course.price}</div>
                  <Button
                    variant="secondary"
                    className="bg-yellow-500/10 hover:bg-yellow-500/20 text-yellow-400"
                    onClick={() =>
                      window.open(
                        "https://wa.me/917400220023?text=I%20want%20to%20get%20Started%20in%20Cybersecurity",
                        "_blank",
                      )
                    }
                  >
                    Learn More
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

