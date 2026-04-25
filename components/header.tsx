"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

const navItems = [
  { href: "/", label: "Home" },
  { href: "/areas-de-atuacao", label: "Áreas de Atuação" },
  { href: "/o-escritorio", label: "O Escritório" },
  { href: "/contato", label: "Contato" },
]

export function Header() {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false) // eslint-disable-line react-hooks/set-state-in-effect
  }, [pathname])

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-40 bg-background/96 backdrop-blur-sm border-b border-border/50">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 shrink-0">
            <Image
              src="https://59bl0nz7dg.ufs.sh/f/58fbkIWjFNDHflg1MlAu5D9bqoE4hzBjyT8X63ZdlfHCkLgm"
              alt="Bauer & Crespo Advogados"
              width={34}
              height={34}
              className="object-contain"
              priority
            />
            <div className="flex flex-col leading-none">
              <span
                className="text-sm font-semibold tracking-tight text-primary"
              >
                Bauer &amp; Crespo
              </span>
              <span
                className="text-[9px] tracking-[0.18em] uppercase text-muted-foreground"
              >
                Advogados
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-7">
            {navItems.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "text-sm transition-colors duration-200 relative py-1",
                    isActive
                      ? "text-primary font-medium"
                      : "text-muted-foreground hover:text-primary",
                    isActive &&
                      "after:absolute after:bottom-0 after:left-0 after:right-0 after:h-px after:bg-gold",
                  )}
                >
                  {item.label}
                </Link>
              )
            })}
          </nav>

          {/* Mobile trigger */}
          <button
            className="md:hidden p-2 -mr-2 text-primary transition-colors duration-200"
            onClick={() => setMobileOpen(true)}
            aria-label="Abrir menu de navegação"
          >
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </header>

      {/* Mobile full-screen overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 bg-primary flex flex-col">
          <div className="flex items-center justify-between px-6 h-16 shrink-0">
            <Link href="/" className="flex items-center gap-3" onClick={() => setMobileOpen(false)}>
              <Image
                src="https://59bl0nz7dg.ufs.sh/f/58fbkIWjFNDHflg1MlAu5D9bqoE4hzBjyT8X63ZdlfHCkLgm"
                alt="Bauer & Crespo Advogados"
                width={34}
                height={34}
                className="object-contain"
              />
              <div className="flex flex-col leading-none">
                <span className="text-sm font-semibold tracking-tight text-white">Bauer &amp; Crespo</span>
                <span className="text-[9px] tracking-[0.18em] uppercase text-white/50">Advogados</span>
              </div>
            </Link>
            <button
              onClick={() => setMobileOpen(false)}
              className="p-2 -mr-2 text-white/60 hover:text-white transition-colors"
              aria-label="Fechar menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Gold rule */}
          <div className="h-px bg-gold/30 mx-6" />

          <nav className="flex flex-col px-6 pt-8 gap-1 flex-1">
            {navItems.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className={cn(
                    "text-3xl font-semibold py-4 border-b border-white/10 transition-colors duration-150",
                    isActive ? "text-gold" : "text-white/80 hover:text-white",
                  )}
                >
                  {item.label}
                </Link>
              )
            })}
          </nav>

          <div className="px-6 py-8">
            <p className="text-xs text-white/30 tracking-wide">© {new Date().getFullYear()} Bauer &amp; Crespo Advogados</p>
          </div>
        </div>
      )}
    </>
  )
}
