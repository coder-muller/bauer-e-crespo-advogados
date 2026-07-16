"use client"

import Image from "next/image"
import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { WhatsAppIcon } from "@/components/whatsapp-icon"
import { PartnerContactPair } from "@/components/partner-contact"

const navItems = [
  { href: "#escritorio", label: "O escritório" },
  { href: "#areas", label: "Áreas de atuação" },
  { href: "#socios", label: "Sócios" },
  { href: "#contato", label: "Contato" },
]

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const overDark = !scrolled

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-40 transition-[background-color,border-color,backdrop-filter] duration-300",
          overDark
            ? "bg-transparent border-b border-transparent"
            : "bg-background/85 backdrop-blur-md border-b border-border/70",
        )}
      >
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#topo" className="flex items-center gap-3 shrink-0" aria-label="Voltar ao topo">
            <Image
              src={overDark ? "/logo-mark-light.png" : "/logo-mark.png"}
              alt=""
              width={36}
              height={26}
              className="object-contain w-9 h-auto"
              priority
            />
            <div className="flex flex-col leading-none">
              <span
                className={cn(
                  "font-serif text-[17px] font-semibold tracking-tight transition-colors duration-300",
                  overDark ? "text-white" : "text-primary",
                )}
              >
                Bauer &amp; Crespo
              </span>
              <span
                className={cn(
                  "text-[9px] tracking-[0.22em] uppercase transition-colors duration-300",
                  overDark ? "text-white/50" : "text-muted-foreground",
                )}
              >
                Advogados
              </span>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-7">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={cn(
                  "text-sm py-1 transition-colors duration-200",
                  overDark
                    ? "text-white/60 hover:text-white"
                    : "text-muted-foreground hover:text-primary",
                )}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#atendimento"
              className={cn(
                "inline-flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-sm min-h-10",
                "transition-[background-color,color,transform] duration-200 active:scale-[0.96]",
                overDark
                  ? "bg-white/10 text-white hover:bg-white/16 border border-white/20"
                  : "bg-primary text-primary-foreground hover:bg-primary/90",
              )}
            >
              <WhatsAppIcon className="w-4 h-4" />
              WhatsApp
            </a>
          </nav>

          <button
            className={cn(
              "md:hidden p-3 -mr-3 transition-colors duration-300",
              overDark ? "text-white" : "text-primary",
            )}
            onClick={() => setMobileOpen(true)}
            aria-label="Abrir menu de navegação"
          >
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </header>

      {mobileOpen && (
        <div className="fixed inset-0 z-50 bg-primary flex flex-col">
          <div className="flex items-center justify-between px-6 h-16 shrink-0">
            <div className="flex items-center gap-3">
              <Image src="/logo-mark-light.png" alt="" width={36} height={26} className="object-contain w-9 h-auto" />
              <div className="flex flex-col leading-none">
                <span className="font-serif text-[17px] font-semibold tracking-tight text-white">
                  Bauer &amp; Crespo
                </span>
                <span className="text-[9px] tracking-[0.22em] uppercase text-white/50">Advogados</span>
              </div>
            </div>
            <button
              onClick={() => setMobileOpen(false)}
              className="p-3 -mr-3 text-white/60 hover:text-white transition-colors duration-150"
              aria-label="Fechar menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="h-px bg-gold/30 mx-6" />

          <nav className="flex flex-col px-6 pt-8 gap-1 flex-1">
            {navItems.map((item, i) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="hero-rise font-serif text-3xl font-medium py-4 border-b border-white/10 text-white/85 hover:text-white transition-colors duration-150"
                style={{ "--rise-delay": `${i * 60}ms` } as React.CSSProperties}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="px-6 py-8" onClick={() => setMobileOpen(false)}>
            <PartnerContactPair tone="dark" />
          </div>
        </div>
      )}
    </>
  )
}
