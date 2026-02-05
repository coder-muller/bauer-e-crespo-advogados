import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { SectionWrapper } from "@/components/section-wrapper"
import { PracticeAreaCard } from "@/components/practice-area-card"
import { CaseCard } from "@/components/case-card"
import { Button } from "@/components/ui/button"

const practiceAreas = [
  {
    title: "Direito Civil",
    description:
      "Assessoria em questões contratuais, obrigações, responsabilidade civil e demais relações jurídicas privadas.",
  },
  {
    title: "Direito de Família e Sucessões",
    description:
      "Atuação em divórcios, guarda, pensão alimentícia, inventários, testamentos e planejamento sucessório.",
  },
  {
    title: "Direito Administrativo",
    description: "Consultoria em licitações, contratos administrativos e relações com a administração pública.",
  },
  {
    title: "Direito do Trabalho",
    description: "Acompanhamento de questões trabalhistas tanto na esfera consultiva quanto contenciosa.",
  },
]

const recentCases = [
  {
    area: "Direito de Família",
    description:
      "Atuação em processo de divórcio com partilha complexa de bens, incluindo participação societária em empresa familiar.",
    instance: "Vara de Família",
    year: "2024",
  },
  {
    area: "Direito Civil",
    description:
      "Assessoria em revisão contratual de financiamento imobiliário com readequação das cláusulas abusivas.",
    instance: "Tribunal de Justiça",
    year: "2024",
  },
  {
    area: "Direito do Consumidor",
    description: "Representação em ação de indenização por falha na prestação de serviço bancário.",
    instance: "Juizado Especial Cível",
    year: "2023",
  },
]

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <section className="relative min-h-[70vh] flex items-center">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/hero-scale.jpg"
              alt="Balança da justiça em escritório de advocacia"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-linear-to-r from-primary/95 via-primary/80 to-primary/40" />
          </div>
          <div className="relative z-10 container mx-auto px-4 md:px-6 py-24 md:py-32">
            <div className="max-w-2xl">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white leading-tight mb-6 text-balance">
                Atuação jurídica responsável e técnica em diversas áreas do Direito
              </h1>
              <p className="text-lg text-white/90 leading-relaxed mb-8 max-w-xl">
                Oferecemos assessoria jurídica com análise criteriosa de cada caso, buscando soluções adequadas através
                de acompanhamento técnico e ético.
              </p>
              <Button asChild size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
                <Link href="/contato">
                  Entrar em contato
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Practice Areas Section */}
        <SectionWrapper background="gray">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold text-primary mb-2">Áreas de Atuação</h2>
              <p className="text-muted-foreground">Conheça nossas principais áreas de atuação jurídica.</p>
            </div>
            <Link
              href="/areas-de-atuacao"
              className="inline-flex items-center gap-1 text-sm text-primary hover:underline underline-offset-4"
            >
              Ver todas as áreas
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {practiceAreas.map((area) => (
              <PracticeAreaCard key={area.title} {...area} />
            ))}
          </div>
        </SectionWrapper>

        <SectionWrapper>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold text-primary mb-6">Atuação Profissional</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                O escritório Bauer & Crespo Advogados atua com foco técnico, realizando análise criteriosa de casos
                concretos e oferecendo acompanhamento jurídico responsável em todas as etapas do processo.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Nossa metodologia de trabalho prioriza o entendimento completo da situação do cliente, a pesquisa
                jurídica aprofundada e a comunicação clara sobre as possibilidades e limites de cada caso.
              </p>
            </div>
            <div className="relative h-80 lg:h-96 rounded-lg overflow-hidden">
              <Image
                src="/professional-lawyer-office-meeting-room-with-books.jpg"
                alt="Sala de reuniões do escritório"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </SectionWrapper>

        {/* Recent Cases Section */}
        <SectionWrapper background="gray">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold text-primary mb-2">Atuação Recente</h2>
              <p className="text-muted-foreground">Exemplos de casos e decisões acompanhadas pelo escritório.</p>
            </div>
            <Link
              href="/atuacao-e-casos"
              className="inline-flex items-center gap-1 text-sm text-primary hover:underline underline-offset-4"
            >
              Ver todos os casos
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {recentCases.map((caseItem, index) => (
              <CaseCard key={index} {...caseItem} />
            ))}
          </div>
        </SectionWrapper>

        <section className="relative py-20">
          <div className="absolute inset-0 z-0">
            <Image src="/elegant-law-library-with-legal-books-and-natural-l.jpg" alt="Biblioteca jurídica" fill className="object-cover" />
            <div className="absolute inset-0 bg-primary/90" />
          </div>
          <div className="relative z-10 container mx-auto px-4 md:px-6 text-center">
            <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">Entre em Contato</h2>
            <p className="text-white/90 mb-8 max-w-xl mx-auto">
              Estamos disponíveis para analisar sua demanda jurídica e esclarecer suas dúvidas.
            </p>
            <Button asChild size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
              <Link href="/contato">
                Fale Conosco
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
