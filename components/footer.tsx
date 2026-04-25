import Link from "next/link"
import Image from "next/image"
import { Mail, Phone } from "lucide-react"

const navItems = [
  { href: "/", label: "Home" },
  { href: "/areas-de-atuacao", label: "Áreas de Atuação" },
  { href: "/o-escritorio", label: "O Escritório" },
  { href: "/contato", label: "Contato" },
]

export function Footer() {
  return (
    <footer className="bg-secondary border-t border-border">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/logo.png"
                alt="Bauer & Crespo Advogados"
                width={36}
                height={36}
                className="object-contain"
              />
              <div className="flex flex-col">
                <span className="text-base font-semibold tracking-tight text-primary leading-tight">Bauer & Crespo</span>
                <span className="text-[10px] tracking-[0.22em] text-muted-foreground uppercase leading-tight">Advogados</span>
              </div>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Assessoria jurídica responsável e técnica em diversas áreas do Direito.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sm font-semibold text-primary mb-4">Navegação</h4>
            <nav className="flex flex-col gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-primary mb-4">Contato</h4>
            <div className="flex flex-col gap-3">
              <a
                href="tel:+5500000000000"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                <Phone className="w-4 h-4" />
                <span>(00) 00000-0000</span>
              </a>
              <a
                href="mailto:contato@bauerecrespo.adv.br"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                <Mail className="w-4 h-4" />
                <span>contato@bauerecrespo.adv.br</span>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-border">
          <p className="text-xs text-muted-foreground text-center">
            © {new Date().getFullYear()} Bauer & Crespo Advogados. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
