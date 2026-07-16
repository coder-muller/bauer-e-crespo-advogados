import Image from "next/image"
import { site, partners, partnerWhatsappHref } from "@/lib/site"

export function Footer() {
  return (
    <footer id="contato" className="bg-primary text-primary-foreground">
      <div className="h-px bg-gold/40" />

      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 items-start">
          <div>
            <Image
              src="/logo-full-light.png"
              alt="Bauer & Crespo Advogados"
              width={366}
              height={181}
              className="w-44 h-auto -ml-1"
            />
            <p className="text-sm text-white/50 leading-relaxed max-w-xs mt-5 text-pretty">
              Advocacia responsável e técnica em {site.city}, desde {site.foundedYear}.
            </p>
          </div>

          <div>
            <p className="text-[10px] uppercase tracking-[0.18em] text-gold/80 mb-5 font-medium">
              Contato
            </p>
            <div className="flex flex-col gap-3">
              {partners.map((partner) => (
                <a
                  key={partner.id}
                  href={partnerWhatsappHref(partner)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white/65 hover:text-white transition-colors duration-150 w-fit"
                >
                  <span className="text-white/40">{partner.firstName}</span>
                  {" · "}
                  {partner.phoneDisplay}
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="text-[10px] uppercase tracking-[0.18em] text-gold/80 mb-5 font-medium">
              Endereço
            </p>
            <p className="text-sm text-white/65 leading-relaxed max-w-xs text-pretty">
              {site.address}
            </p>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-white/10 flex flex-col md:flex-row md:items-center md:justify-between gap-2">
          <p className="text-xs text-white/35">
            © {new Date().getFullYear()} {site.name}. Todos os direitos reservados.
          </p>
          <p className="text-xs text-white/25">OAB/RS</p>
        </div>
      </div>
    </footer>
  )
}
