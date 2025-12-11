"use client"

const footerLinks = {
  company: [
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Team", href: "#team" },
  ],
  resources: [
    { name: "Blog", href: "#" },
    { name: "Careers", href: "#" },
    { name: "Contact", href: "#contact" },
  ],
}

export default function Footer() {
  return (
    <footer className="py-16 px-6 bg-[#0C0C0C]/80 backdrop-blur-sm border-t border-[#D4AF37]/20">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#D4AF37] to-[#E7B95C] flex items-center justify-center">
                <span className="text-[#0C0C0C] font-bold text-lg">S</span>
              </div>
              <span className="text-white font-semibold text-xl">Sheba Labs</span>
            </div>
            <p className="text-[#AFAFAF] leading-relaxed max-w-sm">
              Building powerful digital solutions with innovation, clarity, and deep technical expertise.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-[#AFAFAF] hover:text-[#D4AF37] transition-colors text-sm">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-[#AFAFAF] hover:text-[#D4AF37] transition-colors text-sm">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Gold separator */}
        <div className="h-px bg-gradient-to-r from-transparent via-[#D4AF37]/50 to-transparent mb-8" />

        {/* Copyright */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[#AFAFAF] text-sm">© {new Date().getFullYear()} Sheba Labs — All Rights Reserved</p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-[#AFAFAF] hover:text-[#D4AF37] transition-colors text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-[#AFAFAF] hover:text-[#D4AF37] transition-colors text-sm">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
