"use client"

const testimonials = [
  {
    quote:
      "Sheba Labs transformed our vision into a powerful platform. Their attention to detail and technical expertise exceeded our expectations.",
    author: "Bekele Meseret",
    role: "CEO, FinServe Ethiopia",
  },
  {
    quote:
      "Working with Sheba was seamless. They understood our needs and delivered a product that truly serves our users.",
    author: "Tigist Alemayehu",
    role: "Founder, HealthConnect",
  },
  {
    quote:
      "The team's professionalism and innovative approach made all the difference. Highly recommended for any tech project.",
    author: "Yohannes Kebede",
    role: "CTO, LogiFlow",
  },
]

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-24 md:py-32 px-6 relative bg-[#111111]">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="animate-section text-center mb-16">
          <span className="text-[#D4AF37] text-sm font-semibold tracking-widest uppercase mb-4 block">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">What Clients Say</h2>
          <div className="gold-line w-24 h-0.5 bg-linear-to-r from-[#D4AF37] to-[#E7B95C] mx-auto origin-left" />
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.author}
              className="animate-section relative p-8 bg-[#0C0C0C] rounded-2xl border border-[#D4AF37]/10 hover:border-[#D4AF37]/30 transition-all"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Gold sidebar */}
              <div className="absolute left-0 top-8 bottom-8 w-1 bg-linear-to-b from-[#D4AF37] to-[#E7B95C] rounded-full" />

              {/* Quote */}
              <p className="text-[#AFAFAF] leading-relaxed mb-6 pl-4 italic">"{testimonial.quote}"</p>

              {/* Author */}
              <div className="pl-4">
                <p className="text-white font-semibold">{testimonial.author}</p>
                <p className="text-[#D4AF37] text-sm">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
