import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PracticeAreaCardModern } from "@/components/practice-area-card-modern"

const practiceAreas = [
  {
    title: "Direito Civil",
    description:
      "Assessoria em questões contratuais, obrigações, responsabilidade civil, posse e propriedade, além de demais relações jurídicas privadas.",
    examples: [
      "Precisa revisar ou elaborar um contrato",
      "Sofreu danos por ato de terceiro",
      "Tem disputas sobre propriedade ou posse de bens",
    ],
  },
  {
    title: "Direito de Família e Sucessões",
    description:
      "Atuação em divórcios, guarda de filhos, pensão alimentícia, inventários e planejamento sucessório com sensibilidade e discrição.",
    examples: [
      "Está passando por processo de separação ou divórcio",
      "Precisa regularizar guarda ou pensão alimentícia",
      "Necessita realizar inventário ou planejar sucessão",
    ],
  },
  {
    title: "Direito Administrativo",
    description:
      "Consultoria em licitações e contratos administrativos, processos perante órgãos públicos e relações com a administração pública.",
    examples: [
      "Sua empresa participa de licitações públicas",
      "Precisa recorrer de decisão administrativa",
      "Tem contratos com a administração pública",
    ],
  },
  {
    title: "Direito Ambiental",
    description:
      "Assessoria em licenciamento ambiental, regularização de atividades e defesa em processos relacionados a questões ambientais.",
    examples: [
      "Precisa de licenciamento para seu empreendimento",
      "Recebeu auto de infração ambiental",
      "Quer adequar sua atividade às normas ambientais",
    ],
  },
  {
    title: "Direito do Trabalho",
    description:
      "Acompanhamento de questões trabalhistas, reclamações, negociações coletivas e consultoria preventiva em relações de trabalho.",
    examples: [
      "Teve seus direitos trabalhistas violados",
      "Precisa de consultoria para sua empresa",
      "Está envolvido em negociação coletiva",
    ],
  },
  {
    title: "Direito Tributário",
    description:
      "Planejamento tributário, defesa em autos de infração, execuções fiscais e revisão de tributos pagos indevidamente.",
    examples: [
      "Quer otimizar a carga tributária da sua empresa",
      "Recebeu cobrança ou auto de infração fiscal",
      "Busca recuperar tributos pagos a maior",
    ],
  },
  {
    title: "Direito do Consumidor",
    description:
      "Representação em casos de práticas abusivas, vícios de produtos e serviços, e assessoria empresarial em compliance consumerista.",
    examples: [
      "Foi vítima de prática abusiva ou propaganda enganosa",
      "Adquiriu produto ou serviço com defeito",
      "Sua empresa quer prevenir litígios consumeristas",
    ],
  },
]

export default function AreasDeAtuacaoPage() {
  return (
    <>
      <Header />
      <main>
        {/* ── Page header (typographic) ── */}
        <section className="pt-32 md:pt-40 pb-14 md:pb-20 bg-secondary">
          <div className="max-w-6xl mx-auto px-6">
            <div className="w-8 h-px bg-gold mb-7" />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary leading-[1.08] mb-5 text-balance max-w-xl">
              Áreas de Atuação
            </h1>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-xl text-pretty">
              Oferecemos assessoria jurídica especializada em sete áreas do Direito, com análise criteriosa e
              acompanhamento técnico responsável.
            </p>
          </div>
        </section>

        {/* ── Areas full list ── */}
        <section className="py-10 md:py-16">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2">
              {practiceAreas.map((area, i) => (
                <PracticeAreaCardModern
                  key={area.title}
                  index={i + 1}
                  title={area.title}
                  description={area.description}
                  examples={area.examples}
                />
              ))}
            </div>
            {/* Close the last border */}
            <div className="border-t border-border" />
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="bg-primary py-20 md:py-28">
          <div className="max-w-6xl mx-auto px-6">
            <div className="max-w-xl">
              <div className="w-8 h-px bg-gold mb-7" />
              <h2 className="text-3xl font-bold text-white leading-[1.15] mb-5 text-balance">
                Não encontrou sua situação?
              </h2>
              <p className="text-white/65 leading-relaxed mb-8 text-pretty">
                Entre em contato para uma análise preliminar. Cada situação é única e merece atenção
                individualizada.
              </p>
              <Link
                href="/contato"
                className="inline-flex items-center gap-2 text-sm font-medium text-white border border-white/30 px-6 py-3 hover:bg-white/8 hover:border-white/50 transition-colors duration-200 group rounded-sm"
              >
                Fale Conosco
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-150" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
