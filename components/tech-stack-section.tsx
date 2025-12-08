"use client"

const technologies = [
  { name: "React", icon: "⚛️" },
  { name: "Three.js", icon: "🎮" },
  { name: "GSAP", icon: "🎬" },
  { name: "Node.js", icon: "🟢" },
  { name: "Python", icon: "🐍" },
  { name: "Hasura", icon: "⚡" },
  { name: "PostgreSQL", icon: "🐘" },
  { name: "Cloudflare", icon: "☁️" },
  { name: "Docker", icon: "🐳" },
  { name: "Kubernetes", icon: "☸️" },
]

export default function TechStackSection() {
  return (
    <section id="tech" className="py-24 md:py-32 px-6 relative bg-[#111111]">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="animate-section text-center mb-16">
          <span className="text-[#D4AF37] text-sm font-semibold tracking-widest uppercase mb-4 block">Technology</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">Our Tech Stack</h2>
          <div className="gold-line w-24 h-0.5 bg-linear-to-r from-[#D4AF37] to-[#E7B95C] mx-auto origin-left" />
        </div>

        {/* Tech Grid */}
        <div className="animate-section grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {technologies.map((tech, index) => (
            <div
              key={tech.name}
              className="group flex flex-col items-center justify-center p-6 bg-[#0C0C0C] rounded-xl border border-[#D4AF37]/10 hover:border-[#D4AF37]/50 transition-all duration-300 hover:shadow-lg hover:shadow-[#D4AF37]/10"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <span className="text-3xl mb-3 grayscale group-hover:grayscale-0 transition-all duration-300">
                {tech.icon}
              </span>
              <span className="text-[#AFAFAF] text-sm font-medium group-hover:text-[#D4AF37] transition-colors">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
