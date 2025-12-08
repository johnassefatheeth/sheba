"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "Team", href: "#team" },
  { name: "Contact", href: "#contact" },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? "bg-[#0C0C0C]/90 backdrop-blur-md border-b border-[#D4AF37]/20" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            {/* <div className="w-10 h-10 rounded-lg   flex items-center justify-center"> */}
              <img className="w-16" src="/sheba-logo22.png" alt="sheba logo" />
            {/* </div> */}
            <span className="text-white font-semibold text-xl tracking-tight group-hover:text-[#D4AF37] transition-colors">
              Sheba Labs
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[#AFAFAF] hover:text-[#D4AF37] transition-colors text-sm font-medium tracking-wide"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              className="px-5 py-2.5 bg-linear-to-r from-[#D4AF37] to-[#E7B95C] text-[#0C0C0C] font-semibold text-sm rounded-lg hover:shadow-lg hover:shadow-[#D4AF37]/25 transition-all"
            >
              Start a Project
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-[#D4AF37]/20 pt-4">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-[#AFAFAF] hover:text-[#D4AF37] transition-colors text-base font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contact"
                className="px-5 py-3 bg-linear-to-r from-[#D4AF37] to-[#E7B95C] text-[#0C0C0C] font-semibold text-base rounded-lg text-center mt-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Start a Project
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
