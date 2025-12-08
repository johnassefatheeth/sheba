"use client"

const team = [
  {
    name: "Amanuel Tekle",
    role: "Founder & CEO",
    specialty: "Product Strategy",
    image: "/professional-ethiopian-man-portrait.jpg",
  },
  {
    name: "Sara Hailu",
    role: "CTO",
    specialty: "Cloud Architecture",
    image: "/professional-ethiopian-woman-portrait.jpg",
  },
  {
    name: "Daniel Assefa",
    role: "Lead Engineer",
    specialty: "Full-Stack Development",
    image: "/professional-african-developer-portrait.jpg",
  },
  {
    name: "Meron Tadesse",
    role: "Design Director",
    specialty: "UI/UX Design",
    image: "/professional-african-woman-designer-portrait.jpg",
  },
]

export default function TeamSection() {
  return (
    <section id="team" className="py-24 md:py-32 px-6 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="animate-section text-center mb-16">
          <span className="text-[#D4AF37] text-sm font-semibold tracking-widest uppercase mb-4 block">Our Team</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">The Minds Behind Sheba</h2>
          <div className="gold-line w-24 h-0.5 bg-gradient-to-r from-[#D4AF37] to-[#E7B95C] mx-auto origin-left" />
        </div>

        {/* Team Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, index) => (
            <div key={member.name} className="animate-section group" style={{ animationDelay: `${index * 100}ms` }}>
              {/* Image Container with Gold Frame */}
              <div className="relative mb-6 overflow-hidden rounded-2xl">
                <div className="absolute inset-0 border-2 border-[#D4AF37]/30 rounded-2xl z-10 group-hover:border-[#D4AF37] transition-colors duration-300" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0C0C0C] via-transparent to-transparent z-10" />
                <img
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  className="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Info */}
              <div className="text-center">
                <h3 className="text-lg font-semibold text-white mb-1 group-hover:text-[#D4AF37] transition-colors">
                  {member.name}
                </h3>
                <p className="text-[#D4AF37] text-sm font-medium mb-1">{member.role}</p>
                <p className="text-[#AFAFAF] text-sm">{member.specialty}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
