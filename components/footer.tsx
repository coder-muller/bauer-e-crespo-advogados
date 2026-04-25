import Link from "next/link"
import Image from "next/image"

const navItems = [
  { href: "/", label: "Home" },
  { href: "/areas-de-atuacao", label: "Áreas de Atuação" },
  { href: "/o-escritorio", label: "O Escritório" },
  { href: "/contato", label: "Contato" },
]

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Gold accent rule at top */}
      <div className="h-px bg-gold/50" />

      <div className="max-w-6xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
          {/* Brand */}
          <div className="space-y-4 md:col-span-1">
            <Link href="/" className="flex items-center gap-3 w-fit">
              <Image
                src="https://59bl0nz7dg.ufs.sh/f/58fbkIWjFNDHflg1MlAu5D9bqoE4hzBjyT8X63ZdlfHCkLgm"
                alt="Bauer & Crespo Advogados"
                width={32}
                height={32}
                className="object-contain brightness-0 invert opacity-90"
              />
              <div className="flex flex-col leading-none">
                <span className="text-sm font-semibold tracking-tight text-white">Bauer &amp; Crespo</span>
                <span className="text-[9px] tracking-[0.18em] uppercase text-white/45">Advogados</span>
              </div>
            </Link>
            <p className="text-sm text-white/50 leading-relaxed max-w-xs">
              Assessoria jurídica responsável e técnica. Porto Alegre, RS.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-[10px] uppercase tracking-[0.15em] text-white/35 mb-4 font-medium">Navegação</p>
            <nav className="flex flex-col gap-2.5">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm text-white/60 hover:text-white transition-colors duration-150"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <p className="text-[10px] uppercase tracking-[0.15em] text-white/35 mb-4 font-medium">Contato</p>
            <div className="flex flex-col gap-2.5">
              <a
                href="tel:+5500000000000"
                className="text-sm text-white/60 hover:text-white transition-colors duration-150"
              >
                (00) 00000-0000
              </a>
              <a
                href="mailto:contato@bauerecrespo.adv.br"
                className="text-sm text-white/60 hover:text-white transition-colors duration-150"
              >
                contato@bauerecrespo.adv.br
              </a>
              <a
                href="https://instagram.com/bauerecrespoadvogados"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-white/60 hover:text-white transition-colors duration-150"
              >
                @bauerecrespoadvogados
              </a>
            </div>
          </div>
        </div>

        {/* Bottom rule + copyright */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row md:items-center md:justify-between gap-2">
          <p className="text-xs text-white/30">
            © {new Date().getFullYear()} Bauer &amp; Crespo Advogados. Todos os direitos reservados.
          </p>
          <p className="text-xs text-white/20">OAB/RS</p>
        </div>
      </div>
    </footer>
  )
}
