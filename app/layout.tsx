import type { Metadata } from "next"
import { Amiri, Geist_Mono, IBM_Plex_Sans_Arabic, Roboto, Cormorant_Garamond } from "next/font/google"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils"

const fontHeading = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-heading",
})

const fontArHeading = Amiri({
  subsets: ["arabic"],
  weight: ["400", "700"],
  variable: "--font-ar-heading",
})

const fontArSans = IBM_Plex_Sans_Arabic({
  subsets: ["arabic"],
  weight: ["400", "500"],
  variable: "--font-ar-sans",
})

const roboto = Roboto({ subsets: ["latin"], variable: "--font-sans" })

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const metadata: Metadata = {
  title: "Arraya Ballroom Kuwait - Weddings, Conferences & Events",
  description:
    "A 1,482 m² ballroom in Kuwait City's Sharq district, divisible into six salons for weddings, conferences, graduations and galas of up to 2,000 guests.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn("antialiased", fontMono.variable, "font-sans", roboto.variable, fontHeading.variable, fontArHeading.variable, fontArSans.variable)}
    >
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
