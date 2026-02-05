import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { SectionWrapper } from "@/components/section-wrapper"
import { PracticeAreaCardModern } from "@/components/practice-area-card-modern"

const practiceAreas = [
  {
    title: "Direito Civil",
    icon: "scale",
    image: "/elegant-law-office-with-legal-documents-warm-light.jpg",
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
    icon: "users",
    image: "/family-law-office-warm-professional-environment.jpg",
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
    icon: "building",
    image: "/government-building-administrative-law-professiona.jpg",
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
    icon: "leaf",
    image: "/environmental-law-nature-and-justice-balance.jpg",
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
    icon: "briefcase",
    image: "/professional-office-workplace-employment-law.jpg",
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
    icon: "calculator",
    image: "/tax-law-financial-documents-calculator-professiona.jpg",
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
    icon: "shopping",
    image: "/consumer-protection-shopping-rights-professional.jpg",
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
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative h-72 md:h-96 flex items-center">
          <div className="absolute inset-0 z-0">
            <Image
              src="/law-books-on-shelf-professional-legal-library-dark.jpg"
              alt="Biblioteca jurídica"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-primary/85" />
          </div>
          <div className="relative z-10 container mx-auto px-4 md:px-6">
            <span className="inline-block px-4 py-1.5 text-xs font-medium bg-white/20 text-white rounded-full mb-4 backdrop-blur-sm">
              Nossas Especialidades
            </span>
            <h1 className="text-3xl md:text-5xl font-semibold text-white mb-4 text-balance">Áreas de Atuação</h1>
            <p className="text-white/90 leading-relaxed max-w-2xl text-lg">
              Oferecemos assessoria jurídica especializada em diversas áreas do Direito. Passe o mouse sobre cada área
              para conhecer mais detalhes.
            </p>
          </div>
        </section>

        {/* Practice Areas Grid */}
        <SectionWrapper className="py-16 md:py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {practiceAreas.map((area, index) => (
              <PracticeAreaCardModern key={index} {...area} />
            ))}
          </div>
        </SectionWrapper>

        {/* CTA Section */}
        <section className="bg-secondary py-16">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="text-2xl md:text-3xl font-semibold text-primary mb-4">Não encontrou sua situação?</h2>
            <p className="text-muted-foreground max-w-xl mx-auto mb-8">
              Entre em contato conosco para uma análise preliminar do seu caso. Cada situação é única e merece atenção
              individualizada.
            </p>
            <a
              href="/contato"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
            >
              Fale Conosco
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
