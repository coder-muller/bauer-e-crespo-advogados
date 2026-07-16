import type { ReactNode } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Reveal } from "@/components/reveal"
import { PartnerContactPair, PartnerWhatsAppButton } from "@/components/partner-contact"
import { partners, site } from "@/lib/site"

const practiceAreas = [
  {
    numeral: "I",
    title: "Direito Civil",
    description:
      "Contratos, obrigações, responsabilidade civil, posse e propriedade — as relações jurídicas do dia a dia.",
  },
  {
    numeral: "II",
    title: "Direito de Família e Sucessões",
    description:
      "Divórcios, guarda, pensão alimentícia, inventários e planejamento sucessório, com sensibilidade e discrição.",
  },
  {
    numeral: "III",
    title: "Direito Administrativo",
    description:
      "Licitações, contratos administrativos e processos perante órgãos públicos.",
  },
  {
    numeral: "IV",
    title: "Direito Ambiental",
    description:
      "Licenciamento, regularização de atividades e defesa em processos ambientais.",
  },
  {
    numeral: "V",
    title: "Direito do Trabalho",
    description:
      "Questões trabalhistas nas esferas consultiva e contenciosa, para empregados e empresas.",
  },
  {
    numeral: "VI",
    title: "Direito Tributário",
    description:
      "Planejamento tributário, defesa em autos de infração e recuperação de tributos pagos indevidamente.",
  },
  {
    numeral: "VII",
    title: "Direito do Consumidor",
    description:
      "Defesa contra práticas abusivas e vícios de produtos e serviços; compliance consumerista para empresas.",
  },
]

const values = [
  {
    title: "Ética profissional",
    description: "Atuação rigorosamente dentro dos limites éticos da OAB, com transparência em todas as relações.",
  },
  {
    title: "Atendimento humanizado",
    description: "Cada cliente é único. Dedicamos tempo para entender sua história e suas necessidades.",
  },
  {
    title: "Excelência técnica",
    description: "Atualização e pesquisa constantes para oferecer o melhor embasamento jurídico.",
  },
  {
    title: "Compromisso genuíno",
    description: "Tratamos cada caso como se fosse nosso, com dedicação e acompanhamento próximo.",
  },
]

const steps = [
  {
    number: "1",
    title: "Conversa inicial",
    description:
      "Você nos conta sua situação pelo WhatsApp ou pessoalmente. Ouvimos com atenção, sem pressa.",
  },
  {
    number: "2",
    title: "Análise do caso",
    description:
      "Estudamos os documentos e o contexto jurídico, e apresentamos com clareza os caminhos possíveis.",
  },
  {
    number: "3",
    title: "Acompanhamento próximo",
    description:
      "Conduzimos o caso mantendo você informado a cada etapa, em linguagem que você entende.",
  },
]

function Eyebrow({ children, dark = false }: { children: ReactNode; dark?: boolean }) {
  return (
    <p
      className={`text-[11px] uppercase tracking-[0.24em] font-medium mb-6 ${
        dark ? "text-gold" : "text-gold-deep"
      }`}
    >
      {children}
    </p>
  )
}

export default function App() {
  return (
    <>
      <Header />
      <main id="topo">
        <section className="relative min-h-svh flex flex-col justify-center overflow-hidden bg-[oklch(0.18_0.01_85)] text-[oklch(0.98_0.01_90)] pt-20">
          <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
            <h1 className="font-serif leading-[0.85] tracking-[-0.04em] uppercase flex flex-col">
              <span
                className="text-[clamp(4.5rem,15vw,13rem)] font-medium animate-clip-up opacity-0"
                style={{ animationFillMode: "forwards", animationDelay: "100ms" }}
              >
                BAUER
              </span>
              <span
                className="text-[clamp(4.5rem,15vw,13rem)] font-medium flex items-center gap-2 sm:gap-6 animate-clip-up opacity-0"
                style={{ animationFillMode: "forwards", animationDelay: "250ms" }}
              >
                <em className="text-[oklch(0.75_0.12_80)] italic lowercase text-[clamp(5.5rem,18vw,15rem)] font-light -mt-4 sm:-mt-12">
                  &amp;
                </em>{" "}
                CRESPO
              </span>
            </h1>
            <div
              className="mt-12 sm:mt-16 flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-10 animate-fade-in opacity-0"
              style={{ animationFillMode: "forwards", animationDelay: "500ms" }}
            >
              <a
                href="#atendimento"
                className="inline-flex items-center gap-2.5 text-sm font-semibold bg-white text-black px-8 py-4 rounded-sm hover:bg-white/90 active:scale-[0.96] transition-[transform,background-color] duration-200"
              >
                Entre em contato
              </a>
              <p className="text-xs sm:text-sm uppercase tracking-[0.2em] opacity-60 max-w-xs leading-relaxed">
                Técnica jurídica e presença em {site.city}
              </p>
            </div>
          </div>
        </section>

        <section id="escritorio" className="py-24 md:py-32 scroll-mt-16">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-[5fr_7fr] gap-12 lg:gap-24">
              <Reveal>
                <Eyebrow>O escritório</Eyebrow>
                <h2 className="font-serif text-4xl md:text-5xl font-medium text-primary leading-[1.08] tracking-[-0.01em] text-balance">
                  Uma parceria construída sobre valores sólidos
                </h2>
              </Reveal>

              <Reveal delay={120}>
                <div className="space-y-5 text-muted-foreground leading-relaxed text-base max-w-xl">
                  <p>
                    O Bauer &amp; Crespo nasceu em {site.foundedYear} da união de dois
                    profissionais com trajetórias complementares e uma visão compartilhada:
                    oferecer advocacia de qualidade com atendimento verdadeiramente
                    humanizado.
                  </p>
                  <p>
                    Nossa metodologia prioriza o entendimento completo da situação de cada
                    cliente, a pesquisa jurídica aprofundada e a comunicação clara sobre as
                    possibilidades de cada caso — sem promessas vazias, com trabalho sério.
                  </p>
                </div>
              </Reveal>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-12 mt-20 md:mt-28">
              {values.map((value, i) => (
                <Reveal key={value.title} delay={i * 70}>
                  <div className="w-6 h-px bg-gold mb-5" />
                  <h3 className="font-medium text-primary mb-2.5">{value.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed text-pretty">
                    {value.description}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="areas" className="py-24 md:py-32 bg-secondary scroll-mt-16">
          <div className="max-w-6xl mx-auto px-6">
            <Reveal className="mb-14 md:mb-20">
              <Eyebrow>Áreas de atuação</Eyebrow>
              <h2 className="font-serif text-4xl md:text-5xl font-medium text-primary leading-[1.08] tracking-[-0.01em] text-balance max-w-lg">
                Sete áreas do Direito, um mesmo cuidado
              </h2>
            </Reveal>

            <ul>
              {practiceAreas.map((area, i) => (
                <Reveal key={area.title} as="li" delay={Math.min(i * 50, 200)}>
                  <div className="group grid grid-cols-[3rem_1fr] md:grid-cols-[4.5rem_5fr_6fr] gap-x-4 md:gap-x-8 items-baseline py-6 md:py-7 border-t border-border last:border-b hover:bg-background/60 transition-colors duration-200 -mx-4 px-4 rounded-sm">
                    <span className="font-serif text-lg text-gold-deep/70 group-hover:text-gold-deep transition-colors duration-200 select-none">
                      {area.numeral}
                    </span>
                    <h3 className="font-serif text-2xl md:text-[1.7rem] font-medium text-primary leading-snug">
                      {area.title}
                    </h3>
                    <p className="col-start-2 md:col-start-3 text-sm text-muted-foreground leading-relaxed text-pretty mt-1.5 md:mt-0">
                      {area.description}
                    </p>
                  </div>
                </Reveal>
              ))}
            </ul>
          </div>
        </section>

        <section id="socios" className="py-24 md:py-32 scroll-mt-16">
          <div className="max-w-6xl mx-auto px-6">
            <Reveal className="mb-14 md:mb-20">
              <h2 className="text-[11px] uppercase tracking-[0.24em] font-medium text-gold-deep">
                Sócios fundadores
              </h2>
            </Reveal>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-14 md:gap-20">
              {partners.map((partner, i) => (
                <Reveal key={partner.id} as="article" delay={i * 120}>
                  <h3 className="font-serif text-4xl md:text-5xl font-medium text-primary leading-[1.08] tracking-[-0.01em] text-balance mb-4">
                    {partner.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    {partner.role} · {partner.oab}
                  </p>
                  <p className="text-sm text-gold-deep mb-8">{partner.specialties}</p>

                  <ul className="space-y-1.5 mb-8">
                    {partner.education.map((item) => (
                      <li key={item} className="text-sm text-muted-foreground leading-relaxed">
                        {item}
                      </li>
                    ))}
                  </ul>

                  <PartnerWhatsAppButton partner={partner} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="atendimento" className="bg-primary py-24 md:py-32 scroll-mt-16">
          <div className="max-w-6xl mx-auto px-6">
            <Reveal className="mb-14 md:mb-20">
              <Eyebrow dark>Como funciona</Eyebrow>
              <h2 className="font-serif text-4xl md:text-5xl font-medium text-white leading-[1.08] tracking-[-0.01em] text-balance max-w-lg">
                Do primeiro contato ao acompanhamento
              </h2>
            </Reveal>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 mb-24 md:mb-32">
              {steps.map((step, i) => (
                <Reveal key={step.title} delay={i * 100}>
                  <span className="font-serif text-4xl text-gold/80 select-none">{step.number}</span>
                  <h3 className="font-medium text-white mt-4 mb-2.5">{step.title}</h3>
                  <p className="text-sm text-white/55 leading-relaxed text-pretty max-w-xs">
                    {step.description}
                  </p>
                </Reveal>
              ))}
            </div>

            <Reveal>
              <div className="border-t border-white/10 pt-16 md:pt-20 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10">
                <div className="max-w-xl">
                  <h2 className="font-serif text-4xl md:text-5xl font-medium text-white leading-[1.08] tracking-[-0.01em] text-balance mb-5">
                    Vamos conversar sobre o seu caso?
                  </h2>
                  <p className="text-white/55 leading-relaxed text-pretty">
                    Escolha o sócio mais alinhado à sua demanda. A primeira conversa
                    serve para entendermos a sua situação e orientarmos os próximos passos.
                  </p>
                </div>
                <PartnerContactPair tone="dark" className="shrink-0" />
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
