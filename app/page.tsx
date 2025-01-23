import Hero from "./components/hero"
import Features from "./components/features"
import Navigation from "./components/navigation"
import Courses from "./components/courses"
import Testimonials from "./components/testimonials"
import Stats from "./components/stats"
import CTA from "./components/cta"
import Footer from "./components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      <Hero />
      <Stats />
      <Features />
      <Courses />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  )
}

