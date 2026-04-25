import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter =Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Bauer & Crespo Advogados | Assessoria Jurídica",
  description:
    "Escritório de advocacia com atuação responsável e técnica em diversas áreas do Direito. Direito Civil, Família, Administrativo, Ambiental, Trabalhista, Tributário e Consumidor.",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export const viewport: Viewport = {
  themeColor: "#18160e",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={`font-sans antialiased bg-background text-foreground`}>
        {children}
      </body>
    </html>
  )
}
