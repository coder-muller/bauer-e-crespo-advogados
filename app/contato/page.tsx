import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Mail, Phone, Instagram, MapPin } from "lucide-react"

const contactInfo = [
  {
    icon: Phone,
    label: "Telefone",
    value: "(00) 00000-0000",
    href: "tel:+5500000000000",
  },
  {
    icon: Mail,
    label: "E-mail",
    value: "contato@bauerecrespo.adv.br",
    href: "mailto:contato@bauerecrespo.adv.br",
  },
  {
    icon: Instagram,
    label: "Instagram",
    value: "@bauerecrespoadvogados",
    href: "https://instagram.com/bauerecrespoadvogados",
  },
  {
    icon: MapPin,
    label: "Endereço",
    value: "Rua Exemplo, 123 — Centro\nCidade — Estado, 00000-000",
    href: null,
  },
]

const hours = [
  { days: "Segunda a Sexta", time: "9h às 18h" },
  { days: "Sábados", time: "Mediante agendamento" },
]

export default function ContatoPage() {
  return (
    <>
      <Header />
      <main>
        {/* ── Page header (typographic) ── */}
        <section className="pt-32 md:pt-40 pb-14 md:pb-20 bg-secondary">
          <div className="max-w-6xl mx-auto px-6">
            <div className="w-8 h-px bg-gold mb-7" />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary leading-[1.08] mb-5 text-balance max-w-xl">
              Contato
            </h1>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-xl text-pretty">
              Entre em contato para agendar uma consulta ou esclarecer dúvidas sobre sua demanda jurídica.
            </p>
          </div>
        </section>

        {/* ── Contact directory ── */}
        <section className="py-20 md:py-28">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
              {contactInfo.map((item, i) => {
                const Icon = item.icon
                const isLink = !!item.href

                const inner = (
                  <div className="flex gap-5 items-start py-7 border-t border-border group">
                    <div className="w-9 h-9 border border-border flex items-center justify-center shrink-0 rounded-sm group-hover:border-gold/50 transition-colors duration-150">
                      <Icon className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors duration-150" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground uppercase tracking-[0.12em] font-medium mb-1">
                        {item.label}
                      </p>
                      <p className="text-base font-semibold text-primary whitespace-pre-line leading-relaxed">
                        {item.value}
                      </p>
                    </div>
                  </div>
                )

                return isLink ? (
                  <a
                    key={item.label}
                    href={item.href!}
                    target={item.href!.startsWith("http") ? "_blank" : undefined}
                    rel={item.href!.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="block"
                  >
                    {inner}
                  </a>
                ) : (
                  <div key={item.label}>{inner}</div>
                )
              })}
              <div className="border-t border-border md:col-span-2" />
            </div>
          </div>
        </section>

        {/* ── Office photo ── */}
        <section className="pb-20 md:pb-28">
          <div className="max-w-6xl mx-auto px-6">
            <div className="relative h-64 md:h-96 overflow-hidden rounded">
              <Image
                src="/modern-law-firm-building-exterior-professional-arc.jpg"
                alt="Fachada do escritório"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* ── Hours ── */}
        <section className="py-20 md:py-28 bg-secondary">
          <div className="max-w-6xl mx-auto px-6">
            <div className="max-w-lg">
              <p className="text-xs text-gold uppercase tracking-[0.16em] font-semibold mb-5">Horários</p>
              <h2 className="text-3xl font-bold text-primary leading-[1.15] mb-10 text-balance">
                Horário de Atendimento
              </h2>

              <div className="space-y-0">
                {hours.map((row) => (
                  <div key={row.days} className="flex items-baseline justify-between py-4 border-t border-border">
                    <span className="text-sm font-medium text-primary">{row.days}</span>
                    <span className="text-sm text-muted-foreground">{row.time}</span>
                  </div>
                ))}
                <div className="border-t border-border" />
              </div>

              <p className="mt-5 text-xs text-muted-foreground">
                Atendimentos fora do horário comercial podem ser agendados previamente.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
