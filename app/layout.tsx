import type React from "react"
import type { Metadata, Viewport } from "next"
import { Cormorant_Garamond, Instrument_Sans } from "next/font/google"
import { site } from "@/lib/site"
import "./globals.css"

const display = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "600"],
  style: ["normal", "italic"],
  display: "swap",
})

const body = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600"],
  display: "swap",
})

export const metadata: Metadata = {
  title: `${site.name} | Porto Alegre`,
  description:
    "Escritório de advocacia em Porto Alegre com atuação responsável e técnica. Direito Civil, Família e Sucessões, Administrativo, Ambiental, Trabalhista, Tributário e Consumidor.",
  icons: {
    icon: "/icon.png",
    apple: "/apple-icon.png",
  },
}

export const viewport: Viewport = {
  themeColor: "#181610",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className={`${display.variable} ${body.variable}`}>
      <body className="font-sans bg-background text-foreground">
        {children}
      </body>
    </html>
  )
}
