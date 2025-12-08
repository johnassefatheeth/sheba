"use client"

import { ExternalLink } from "lucide-react"

const projects = [
  {
    title: "FinTech Platform",
    category: "Web Application",
    description: "A comprehensive financial management system for Ethiopian businesses.",
    image: "/fintech-dashboard-dark-gold-theme.jpg",
  },
  {
    title: "Healthcare App",
    category: "Mobile Application",
    description: "Telemedicine solution connecting patients with healthcare providers.",
    image: "/healthcare-mobile-app-dark-gold-theme.jpg",
  },
  {
    title: "E-Commerce Suite",
    category: "Full Stack",
    description: "Scalable marketplace platform with integrated payment systems.",
    image: "/ecommerce-platform-dark-gold-theme.jpg",
  },
  {
    title: "Logistics Tracker",
    category: "Enterprise System",
    description: "Real-time fleet management and delivery optimization system.",
    image: "/logistics-tracking-dashboard-dark-gold-theme.jpg",
  },
  {
    title: "EdTech Platform",
    category: "Web Application",
    description: "Online learning platform with live classes and progress tracking.",
    image: "/education-platform-dark-gold-theme.jpg",
  },
  {
    title: "AI Analytics",
    category: "Data Solution",
    description: "Predictive analytics dashboard for business intelligence.",
    image: "/ai-analytics-dashboard-dark-gold-theme.jpg",
  },
]

export default function PortfolioSection() {
  return (
    <section id="portfolio" className="py-24 md:py-32 px-6 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="animate-section text-center mb-16">
          <span className="text-[#D4AF37] text-sm font-semibold tracking-widest uppercase mb-4 block">Our Work</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">Featured Projects</h2>
          <p className="text-[#AFAFAF] max-w-2xl mx-auto mb-6">
            Products and systems we've built — robust, scalable, and crafted with care.
          </p>
          <div className="gold-line w-24 h-0.5 bg-gradient-to-r from-[#D4AF37] to-[#E7B95C] mx-auto origin-left" />
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="animate-section group relative overflow-hidden rounded-2xl bg-[#111111] border border-[#D4AF37]/10 hover:border-[#D4AF37]/40 transition-all duration-500"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0C0C0C] to-transparent opacity-60" />

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-[#D4AF37]/0 group-hover:bg-[#D4AF37]/10 transition-colors duration-300 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-[#D4AF37] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 scale-50 group-hover:scale-100">
                    <ExternalLink className="w-5 h-5 text-[#0C0C0C]" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <span className="text-[#D4AF37] text-xs font-semibold tracking-wider uppercase">
                  {project.category}
                </span>
                <h3 className="text-xl font-semibold text-white mt-2 mb-3 group-hover:text-[#D4AF37] transition-colors">
                  {project.title}
                </h3>
                <p className="text-[#AFAFAF] text-sm leading-relaxed">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
