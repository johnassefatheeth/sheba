import type React from "react"
import type { Metadata } from "next"
import { Inter, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono" })

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://shebalabs.com"
const metadataBase = (() => {
  try {
    return new URL(siteUrl)
  } catch {
    return undefined
  }
})()

const title = "Sheba Labs | Building Your Dream With Wisdom"
const description =
  "Sheba Labs is a modern Ethiopian tech company crafting powerful digital solutions backed by innovation, clarity, and deep technical expertise."

export const metadata: Metadata = {
  metadataBase,
  applicationName: "Sheba Labs",
  title: {
    default: title,
    template: "%s | Sheba Labs",
  },
  description,
  keywords: ["software development", "tech company", "Ethiopia", "web development", "mobile apps", "AI solutions", "cloud", "digital transformation", "startup"],
  openGraph: {
    title,
    description,
    url: siteUrl,
    siteName: "Sheba Labs",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/sheba-logo22.png",
        width: 1200,
        height: 630,
        alt: "Sheba Labs logo on dark background",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/sheba-logo22.png"],
  },
  alternates: {
    canonical: siteUrl,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  category: "technology",
  creator: "Sheba Labs",
  publisher: "Sheba Labs",
  icons: {
    icon: "/sheba-logo22.png",
    shortcut: "/sheba-logo22.png",
  },
}

export const viewport = {
  themeColor: "#0C0C0C",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Sheba Labs",
    url: siteUrl,
    logo: `${metadataBase?.toString() || siteUrl}/sheba-logo22.png`,
    description,
    sameAs: ["https://www.linkedin.com"],
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "contact",
        email: "contact@sheba-labs.com",
        telephone: "+251971816461",
        areaServed: "ET",
        availableLanguage: ["en"],
      },
    ],
  }

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Sheba Labs",
    url: siteUrl,
  }

  return (
    <html lang="en" className="dark">
      <head>
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: JSON.stringify([organizationJsonLd, websiteJsonLd]) }}
        />
        <meta name="apple-mobile-web-app-title" content="Sheba Labs" />
      </head>
      <body className={`${inter.variable} ${geistMono.variable} font-sans antialiased bg-[#0C0C0C]`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
