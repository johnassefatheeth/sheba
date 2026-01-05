"use client"

import type React from "react"

import { useState } from "react"
import { Mail, Phone, MapPin, Send } from "lucide-react"

export default function ContactSection() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("submitting")

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "9868d2cd-1835-4de2-9075-5e4d9dfa7644",
          ...formData,
        }),
      })

      const result = await response.json()
      if (result.success) {
        setStatus("success")
        setFormData({ name: "", email: "", company: "", message: "" })
        setTimeout(() => setStatus("idle"), 5000)
      } else {
        setStatus("error")
      }
    } catch (error) {
      console.error("Submission error:", error)
      setStatus("error")
    }
  }

  return (
    <section id="contact" className="py-24 md:py-32 px-6 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="animate-section text-center mb-16">
          <span className="text-[#D4AF37] text-sm font-semibold tracking-widest uppercase mb-4 block">
            Get in Touch
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">Start Your Project</h2>
          <div className="gold-line w-24 h-0.5 bg-gradient-to-r from-[#D4AF37] to-[#E7B95C] mx-auto origin-left" />
        </div>

        <div className="animate-section grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-[#AFAFAF] mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 bg-[#111111] border border-[#D4AF37]/20 rounded-lg text-white placeholder-[#AFAFAF]/50 focus:outline-none focus:border-[#D4AF37] transition-colors"
                placeholder="Your name"
                disabled={status === "submitting"}
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-[#AFAFAF] mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 bg-[#111111] border border-[#D4AF37]/20 rounded-lg text-white placeholder-[#AFAFAF]/50 focus:outline-none focus:border-[#D4AF37] transition-colors"
                placeholder="your@email.com"
                disabled={status === "submitting"}
              />
            </div>

            <div>
              <label htmlFor="company" className="block text-sm font-medium text-[#AFAFAF] mb-2">
                Company <span className="text-[#AFAFAF]/50">(optional)</span>
              </label>
              <input
                type="text"
                id="company"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                className="w-full px-4 py-3 bg-[#111111] border border-[#D4AF37]/20 rounded-lg text-white placeholder-[#AFAFAF]/50 focus:outline-none focus:border-[#D4AF37] transition-colors"
                placeholder="Your company"
                disabled={status === "submitting"}
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-[#AFAFAF] mb-2">
                Message
              </label>
              <textarea
                id="message"
                required
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 bg-[#111111] border border-[#D4AF37]/20 rounded-lg text-white placeholder-[#AFAFAF]/50 focus:outline-none focus:border-[#D4AF37] transition-colors resize-none"
                placeholder="Tell us about your project..."
                disabled={status === "submitting"}
              />
            </div>

            <button
              type="submit"
              disabled={status === "submitting"}
              className={`group w-full px-8 py-4 bg-gradient-to-r from-[#D4AF37] to-[#E7B95C] text-[#0C0C0C] font-semibold rounded-lg transition-all flex items-center justify-center gap-2 ${status === "submitting" ? "opacity-70 cursor-not-allowed" : "hover:shadow-xl hover:shadow-[#D4AF37]/30"
                }`}
            >
              {status === "submitting" ? "Sending..." : "Send Message"}
              <Send className={`w-5 h-5 ${status !== "submitting" ? "group-hover:translate-x-1" : ""} transition-transform`} />
            </button>

            {status === "success" && (
              <p className="text-green-500 text-center font-medium animate-in fade-in slide-in-from-top-2">
                Success! Your message has been sent.
              </p>
            )}
            {status === "error" && (
              <p className="text-red-500 text-center font-medium animate-in fade-in slide-in-from-top-2">
                Something went wrong. Please try again.
              </p>
            )}
          </form>


          {/* Contact Info */}
          <div className="lg:pl-12">
            <div className="mb-10">
              <h3 className="text-2xl font-semibold text-white mb-4">Let's Build Together</h3>
              <p className="text-[#AFAFAF] leading-relaxed">
                Have a project in mind? We'd love to hear about it. Reach out and let's discuss how we can bring your
                vision to life.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#D4AF37]/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-[#D4AF37]" />
                </div>
                <div>
                  <p className="text-[#AFAFAF] text-sm mb-1">Email</p>
                  <a href="mailto:contact@sheba-labs.com" className="text-white hover:text-[#D4AF37] transition-colors">
                    contact@sheba-labs.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#D4AF37]/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-[#D4AF37]" />
                </div>
                <div>
                  <p className="text-[#AFAFAF] text-sm mb-1">Phone</p>
                  <a href="tel:+251971916461" className="text-white hover:text-[#D4AF37] transition-colors">
                    +251 911 234 567
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#D4AF37]/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-[#D4AF37]" />
                </div>
                <div>
                  <p className="text-[#AFAFAF] text-sm mb-1">Location</p>
                  <p className="text-white">Addis Ababa, Ethiopia</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
