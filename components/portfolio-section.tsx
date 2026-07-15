"use client"

import { ArrowUpRight, ExternalLink } from "lucide-react"

const featuredProject = {
  title: "Sheba Jobs",
  category: "Flagship Product",
  tagline: "Ethiopia's job aggregator",
  description:
    "Thousands of openings aggregated daily from Ethiojobs, HaHu Jobs, Afriwork, EffoySira, and Telegram — searchable in one place. Free to browse, updated continuously, and built for the Ethiopian job market.",
  image: "/sheba-jobs-logo.png",
  href: "https://jobs.sheba-labs.com/",
  stats: [
    { label: "Active jobs", value: "2,000+" },
    { label: "Companies hiring", value: "1,000+" },
    { label: "Job categories", value: "50+" },
  ],
}

const projects = [
  {
    title: "FinTech Platform",
    category: "Web Application",
    description: "A comprehensive financial management system for Ethiopian businesses.",
    image: "/img/fintech.png",
  },
  {
    title: "Healthcare App",
    category: "Mobile Application",
    description: "Telemedicine solution connecting patients with healthcare providers.",
    image: "/img/mobile.png",
  },
  {
    title: "E-Commerce Suite",
    category: "Full Stack",
    description: "Scalable marketplace platform with integrated payment systems.",
    image: "/img/full stack.png",
  },
  {
    title: "Logistics Tracker",
    category: "Enterprise System",
    description: "Real-time fleet management and delivery optimization system.",
    image: "/img/enterprize.png",
  },
  {
    title: "EdTech Platform",
    category: "Web Application",
    description: "Online learning platform with live classes and progress tracking.",
    image: "/img/web-app.png",
  },
  {
    title: "AI Analytics",
    category: "Data Solution",
    description: "Predictive analytics dashboard for business intelligence.",
    image: "/img/AI.png",
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
            Products and systems we&apos;ve built — robust, scalable, and crafted with care.
          </p>
          <div className="gold-line w-24 h-0.5 bg-gradient-to-r from-[#D4AF37] to-[#E7B95C] mx-auto origin-left" />
        </div>

        {/* Flagship project — Sheba Jobs */}
        <a
          href={featuredProject.href}
          target="_blank"
          rel="noopener noreferrer"
          className="animate-section group relative mb-10 block overflow-hidden rounded-2xl border border-[#D4AF37]/25 bg-[#111111] transition-all duration-500 hover:border-[#D4AF37]/60 hover:shadow-[0_0_40px_-12px_rgba(212,175,55,0.35)]"
        >
          <div className="grid md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
            <div className="relative flex min-h-[280px] items-center justify-center bg-[#0a0a0a] p-8 md:min-h-[340px]">
              <div
                className="absolute inset-0 opacity-30"
                style={{
                  backgroundImage:
                    "radial-gradient(circle at center, rgba(212,175,55,0.18) 0%, transparent 65%)",
                }}
              />
              <img
                src={featuredProject.image}
                alt={`${featuredProject.title} logo`}
                className="relative z-10 h-44 w-44 rounded-full object-cover shadow-[0_0_48px_-8px_rgba(212,175,55,0.45)] transition-transform duration-500 group-hover:scale-105 md:h-52 md:w-52"
              />
            </div>

            <div className="flex flex-col justify-center border-t border-[#D4AF37]/15 p-8 md:border-t-0 md:border-l md:p-10">
              <div className="mb-4 flex flex-wrap items-center gap-3">
                <span className="text-[#D4AF37] text-xs font-semibold tracking-wider uppercase">
                  {featuredProject.category}
                </span>
                <span className="rounded-full border border-[#D4AF37]/30 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-[#E7B95C]">
                  Live
                </span>
              </div>

              <h3 className="text-2xl font-bold text-white transition-colors group-hover:text-[#D4AF37] md:text-3xl">
                {featuredProject.title}
              </h3>
              <p className="mt-2 text-sm font-medium text-[#E7B95C]">{featuredProject.tagline}</p>
              <p className="mt-4 max-w-xl text-sm leading-relaxed text-[#AFAFAF] md:text-base">
                {featuredProject.description}
              </p>

              <div className="mt-8 grid grid-cols-3 gap-4 border-y border-[#D4AF37]/15 py-5">
                {featuredProject.stats.map((stat) => (
                  <div key={stat.label}>
                    <p className="text-lg font-semibold text-[#D4AF37] md:text-xl">{stat.value}</p>
                    <p className="mt-1 text-[11px] uppercase tracking-wide text-[#AFAFAF] md:text-xs">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#D4AF37]">
                Visit jobs.sheba-labs.com
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </div>
          </div>
        </a>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="animate-section group relative overflow-hidden rounded-2xl bg-[#111111] border border-[#D4AF37]/10 hover:border-[#D4AF37]/40 transition-all duration-500"
              style={{ animationDelay: `${(index + 1) * 100}ms` }}
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
