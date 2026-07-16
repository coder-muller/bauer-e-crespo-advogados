import { WhatsAppIcon } from "@/components/whatsapp-icon"
import { cn } from "@/lib/utils"
import { partners, partnerWhatsappHref, type Partner } from "@/lib/site"

type Tone = "light" | "dark"

/** Botão direto para o WhatsApp de um sócio. */
export function PartnerWhatsAppButton({
  partner,
  tone = "light",
  className,
}: {
  partner: Partner
  tone?: Tone
  className?: string
}) {
  return (
    <a
      href={partnerWhatsappHref(partner)}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "inline-flex items-center gap-2.5 min-h-11 text-sm font-semibold px-5 py-3 rounded-sm",
        "transition-[background-color,color,border-color,transform] duration-200",
        "active:scale-[0.96] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold",
        tone === "light"
          ? "bg-primary text-primary-foreground hover:bg-primary/90"
          : "bg-white text-primary hover:bg-white/90",
        className,
      )}
    >
      <WhatsAppIcon className="w-4 h-4 shrink-0" />
      <span>Falar com {partner.firstName}</span>
    </a>
  )
}

/**
 * Escolha entre os dois sócios — usado no CTA final e no menu.
 * Cada opção mostra nome + área, para a pessoa saber a quem dirigir.
 */
export function PartnerContactPair({
  tone = "dark",
  className,
}: {
  tone?: Tone
  className?: string
}) {
  return (
    <div className={cn("flex flex-col gap-3 w-full max-w-md", className)}>
      <p
        className={cn(
          "text-[11px] uppercase tracking-[0.2em] font-medium",
          tone === "dark" ? "text-white/40" : "text-muted-foreground",
        )}
      >
        Falar com
      </p>
      <ul className="flex flex-col gap-2">
        {partners.map((partner) => (
          <li key={partner.id}>
            <a
              href={partnerWhatsappHref(partner)}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "group flex items-center gap-4 min-h-14 w-full px-4 py-3.5 rounded-sm",
                "transition-[background-color,border-color,transform,color] duration-200",
                "active:scale-[0.96] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold",
                tone === "dark"
                  ? "bg-white/[0.06] border border-white/12 hover:bg-white/[0.11] hover:border-white/25 text-white"
                  : "bg-secondary border border-border hover:bg-background hover:border-primary/25 text-primary",
              )}
            >
              <span
                className={cn(
                  "flex items-center justify-center w-9 h-9 rounded-sm shrink-0",
                  tone === "dark" ? "bg-white/10 text-white" : "bg-primary/8 text-primary",
                )}
              >
                <WhatsAppIcon className="w-4 h-4" />
              </span>
              <span className="flex flex-col items-start gap-0.5 min-w-0 text-left">
                <span className="text-sm font-semibold leading-tight">{partner.name}</span>
                <span
                  className={cn(
                    "text-xs leading-snug text-pretty",
                    tone === "dark" ? "text-white/45" : "text-muted-foreground",
                  )}
                >
                  {partner.specialtiesShort}
                </span>
              </span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
