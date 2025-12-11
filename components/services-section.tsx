"use client"

import { Brain, Cloud, Code2, Palette, PenTool, Smartphone } from "lucide-react"

const services = [
  {
    icon: Code2,
    title: "Custom Software Development",
    description: "Web apps, enterprise systems, and tailored solutions built for your unique needs.",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description: "iOS, Android, and cross-platform applications with seamless user experiences.",
  },
  {
    icon: Cloud,
    title: "IT & Cloud Consultation",
    description: "Architecture reviews, CI/CD blueprints, scaling strategies, and automation roadmaps tuned to your stack.",
  },
  {
    icon: Brain,
    title: "AI & Data Solutions",
    description: "Machine learning pipelines, analytics, and predictive models that drive decisions.",
  },
  {
    icon: PenTool,
    title: "Logo & Branding",
    description: "Identity systems, logos, and brand kits that keep you memorable and consistent.",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Product design tailored for African users with global standards of excellence.",
  },
]

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 md:py-32 px-6 relative bg-[#111111]">
      {/* Subtle pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle, #D4AF37 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="animate-section text-center mb-16">
          <span className="text-[#D4AF37] text-sm font-semibold tracking-widest uppercase mb-4 block">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">What We Build</h2>
          <div className="gold-line w-24 h-0.5 bg-gradient-to-r from-[#D4AF37] to-[#E7B95C] mx-auto origin-left" />
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="animate-section group p-8 bg-[#0C0C0C] rounded-2xl border border-[#D4AF37]/10 hover:border-[#D4AF37]/50 transition-all duration-300 hover:shadow-xl hover:shadow-[#D4AF37]/10"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#D4AF37]/20 to-[#E7B95C]/10 flex items-center justify-center mb-6 group-hover:from-[#D4AF37]/30 group-hover:to-[#E7B95C]/20 transition-all">
                <service.icon className="w-7 h-7 text-[#D4AF37]" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-[#D4AF37] transition-colors">
                {service.title}
              </h3>
              <p className="text-[#AFAFAF] leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
