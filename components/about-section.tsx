"use client"

import { Target, Lightbulb, Shield } from "lucide-react"

const values = [
  {
    icon: Target,
    title: "Precision",
    description: "Every line of code is crafted with intent and purpose.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "We embrace modern technologies to solve complex problems.",
  },
  {
    icon: Shield,
    title: "Reliability",
    description: "Building systems that stand the test of time and scale.",
  },
]

export default function AboutSection() {
  return (
    <section id="about" className="py-24 md:py-32 px-6 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="animate-section text-center mb-16">
          <span className="text-[#D4AF37] text-sm font-semibold tracking-widest uppercase mb-4 block">About Us</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">Technology with Purpose</h2>
          <div className="gold-line w-24 h-0.5 bg-gradient-to-r from-[#D4AF37] to-[#E7B95C] mx-auto origin-left" />
        </div>

        {/* Main Content */}
        <div className="animate-section grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <p className="text-lg text-[#AFAFAF] leading-relaxed mb-6">
              Sheba Labs is a technology company based in Ethiopia, inspired by the legacy of Queen Sheba — a leader who traveled in search of wisdom from King Solomon. Her curiosity, courage, and pursuit of understanding guide our own commitment to building meaningful, intelligent technology.             </p>
            <p className="text-lg text-[#AFAFAF] leading-relaxed">
              We combine modern engineering with thoughtful design to create solutions that solve real problems with clarity and purpose. With expertise in software engineering, cloud architecture, and user experience, our team helps turn ideas into impactful digital products shaped by wisdom, innovation, and Ethiopian heritage.            </p>
            {/* <p className="text-lg text-[#AFAFAF] leading-relaxed">
              Our team brings together deep expertise in software engineering, cloud architecture, and user experience to craft digital solutions that leave a lasting impact. Guided by Ethiopia’s heritage of curiosity and innovation, we strive to help our clients turn bold ideas into reality — with the same spirit of exploration and excellence that defined the Queen of Sheba’s journey.
            </p> */}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-6">
            {[
              { value: "50+", label: "Projects Delivered" },
              { value: "5+", label: "Years Experience" },
              { value: "25+", label: "Team Members" },
              { value: "98%", label: "Client Satisfaction" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="p-6 bg-[#111111] rounded-xl border border-[#D4AF37]/10 hover:border-[#D4AF37]/30 transition-colors"
              >
                <div className="text-3xl md:text-4xl font-bold text-[#D4AF37] mb-2">{stat.value}</div>
                <div className="text-[#AFAFAF] text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Values */}
        <div className="animate-section grid md:grid-cols-3 gap-8">
          {values.map((value) => (
            <div
              key={value.title}
              className="group p-8 bg-[#111111] rounded-2xl border border-[#D4AF37]/10 hover:border-[#D4AF37]/40 transition-all hover:shadow-lg hover:shadow-[#D4AF37]/5"
            >
              <div className="w-14 h-14 rounded-xl bg-[#D4AF37]/10 flex items-center justify-center mb-6 group-hover:bg-[#D4AF37]/20 transition-colors">
                <value.icon className="w-7 h-7 text-[#D4AF37]" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{value.title}</h3>
              <p className="text-[#AFAFAF] leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
