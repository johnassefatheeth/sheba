"use client"

import { useEffect, useRef } from "react"
import { ArrowRight, ChevronDown } from "lucide-react"

export default function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const initAnimation = async () => {
      const gsap = (await import("gsap")).default

      const tl = gsap.timeline({ delay: 0.5 })

      tl.fromTo(".hero-title", { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1, ease: "power3.out" })
        .fromTo(
          ".hero-subtitle",
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
          "-=0.5",
        )
        .fromTo(
          ".hero-description",
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
          "-=0.4",
        )
        .fromTo(
          ".hero-buttons",
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" },
          "-=0.3",
        )
        .fromTo(".hero-scroll", { opacity: 0 }, { opacity: 1, duration: 0.6 }, "-=0.2")
    }

    initAnimation()
  }, [])

  return (
    <section ref={heroRef} id="hero" className="relative min-h-screen flex items-center justify-center px-6 pt-20">
      {/* Subtle geometric pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(45deg, #D4AF37 1px, transparent 1px), linear-gradient(-45deg, #D4AF37 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="max-w-5xl mx-auto text-center relative z-10">
        {/* Main Title */}
        <h1 className="hero-title text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 tracking-tight">
          <span className="bg-gradient-to-r from-[#D4AF37] via-[#F4D97D] to-[#E7B95C] bg-clip-text text-transparent">
            Sheba Labs
          </span>
        </h1>

        {/* Subtitle */}
        <p className="hero-subtitle text-xl md:text-2xl lg:text-3xl text-[#AFAFAF] mb-6 font-light">
          Building your dream with wisdom.
        </p>

        {/* Description */}
        <p className="hero-description text-base md:text-lg text-[#AFAFAF]/80 max-w-2xl mx-auto mb-10 leading-relaxed">
          We craft powerful digital solutions backed by innovation, clarity, and deep technical expertise.
        </p>

        {/* CTA Buttons */}
        <div className="hero-buttons flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#contact"
            className="group px-8 py-4 bg-gradient-to-r from-[#D4AF37] to-[#E7B95C] text-[#0C0C0C] font-semibold rounded-lg hover:shadow-xl hover:shadow-[#D4AF37]/30 transition-all flex items-center gap-2"
          >
            Start a Project
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#portfolio"
            className="px-8 py-4 border border-[#D4AF37]/50 text-[#D4AF37] font-semibold rounded-lg hover:bg-[#D4AF37]/10 transition-all"
          >
            Explore Our Work
          </a>
        </div>

        {/* Scroll Indicator */}
        <div className="hero-scroll absolute bottom-10 left-1/2 -translate-x-1/2">
          <a
            href="#about"
            className="flex flex-col items-center gap-2 text-[#AFAFAF] hover:text-[#D4AF37] transition-colors"
          >
            <span className="text-xs tracking-widest uppercase">Scroll</span>
            <ChevronDown className="w-5 h-5 animate-bounce" />
          </a>
        </div>
      </div>

      {/* Gold accent lines */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/50 to-transparent" />
    </section>
  )
}
