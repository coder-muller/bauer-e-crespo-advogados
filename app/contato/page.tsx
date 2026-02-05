import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { SectionWrapper } from "@/components/section-wrapper"
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
    value: "Rua Exemplo, 123 - Centro\nCidade - Estado, 00000-000",
    href: null,
  },
]

export default function ContatoPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <section className="relative h-64 md:h-80 flex items-center">
          <div className="absolute inset-0 z-0">
            <Image src="/professional-handshake-in-law-office-business-meet.jpg" alt="Atendimento ao cliente" fill className="object-cover" />
            <div className="absolute inset-0 bg-primary/85" />
          </div>
          <div className="relative z-10 container mx-auto px-4 md:px-6">
            <h1 className="text-3xl md:text-4xl font-semibold text-white mb-4">Contato</h1>
            <p className="text-white/90 leading-relaxed max-w-2xl">
              Entre em contato conosco para agendar uma consulta ou esclarecer dúvidas sobre sua demanda jurídica.
            </p>
          </div>
        </section>

        <SectionWrapper>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {contactInfo.map((item, index) => {
                const Icon = item.icon
                const Wrapper = item.href ? "a" : "div"
                const wrapperProps = item.href
                  ? {
                      href: item.href,
                      target: item.href.startsWith("http") ? "_blank" : undefined,
                      rel: item.href.startsWith("http") ? "noopener noreferrer" : undefined,
                    }
                  : {}

                return (
                  <Wrapper
                    key={index}
                    {...wrapperProps}
                    className="group p-6 bg-secondary border border-border rounded-lg hover:border-primary/30 transition-colors duration-300"
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors duration-300">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-sm font-medium text-primary mb-1">{item.label}</h3>
                        <p className="text-muted-foreground text-sm whitespace-pre-line">{item.value}</p>
                      </div>
                    </div>
                  </Wrapper>
                )
              })}
            </div>

            <div className="relative h-64 md:h-80 rounded-lg overflow-hidden mb-12">
              <Image src="/modern-law-firm-building-exterior-professional-arc.jpg" alt="Fachada do escritório" fill className="object-cover" />
            </div>

            <div className="p-8 bg-secondary rounded-lg border border-border">
              <h2 className="text-xl font-semibold text-primary mb-4">Horário de Atendimento</h2>
              <div className="space-y-2 text-muted-foreground text-sm">
                <p>
                  <span className="font-medium text-foreground">Segunda a Sexta:</span> 9h às 18h
                </p>
                <p>
                  <span className="font-medium text-foreground">Sábados:</span> Mediante agendamento
                </p>
              </div>
              <p className="mt-4 text-xs text-muted-foreground">
                * Atendimentos fora do horário comercial podem ser agendados previamente.
              </p>
            </div>
          </div>
        </SectionWrapper>
      </main>
      <Footer />
    </>
  )
}
