"use client"

import { useEffect, useRef } from "react"
import dynamic from "next/dynamic"
import Navbar from "@/components/navbar"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import ServicesSection from "@/components/services-section"
import PortfolioSection from "@/components/portfolio-section"
import TeamSection from "@/components/team-section"
import TestimonialsSection from "@/components/testimonials-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"

const ThreeScene = dynamic(() => import("@/components/scene"), {
  ssr: false,
  loading: () => <div className="fixed inset-0 bg-[#0C0C0C]" />,
})

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Dynamically import GSAP and ScrollTrigger
    const initGSAP = async () => {
      const gsap = (await import("gsap")).default
      const ScrollTrigger = (await import("gsap/ScrollTrigger")).default

      gsap.registerPlugin(ScrollTrigger)

      // Animate sections on scroll
      const sections = document.querySelectorAll(".animate-section")
      sections.forEach((section) => {
        gsap.fromTo(
          section,
          { opacity: 0, y: 60 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: section,
              start: "top 80%",
              end: "top 20%",
              toggleActions: "play none none reverse",
            },
          },
        )
      })

      // Animate gold lines
      const goldLines = document.querySelectorAll(".gold-line")
      goldLines.forEach((line) => {
        gsap.fromTo(
          line,
          { scaleX: 0 },
          {
            scaleX: 1,
            duration: 1.5,
            ease: "power2.out",
            scrollTrigger: {
              trigger: line,
              start: "top 90%",
              toggleActions: "play none none reverse",
            },
          },
        )
      })
    }

    initGSAP()
  }, [])

  return (
    <main ref={containerRef} className="relative min-h-screen bg-[#0C0C0C] overflow-x-hidden">
      <ThreeScene />
      <div className="relative z-10">
        <Navbar />
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <PortfolioSection />
        <TeamSection />
        <TestimonialsSection />
        <ContactSection />
        <Footer />
      </div>
    </main>
  )
}
