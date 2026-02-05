"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { GraduationCap, Heart, Users, Shield, Target, Building, ArrowRight } from "lucide-react"

const founders = [
  {
    name: "Dra. Marta Bauer",
    role: "Sócia Fundadora",
    oab: "OAB/RS 98.XXX",
    image: "/professional-brazilian-woman-lawyer-portrait-elega.jpg",
    specialties: ["Direito de Família", "Sucessões", "Direito Civil"],
    bio: "Marta Bauer iniciou sua trajetória no Direito motivada pela crença de que a advocacia pode transformar vidas. Formada pela Universidade Federal do Rio Grande do Sul em 2008, desde cedo demonstrou interesse pelas relações humanas e suas complexidades jurídicas.",
    journey: [
      { year: "2008", event: "Graduação em Direito pela UFRGS" },
      { year: "2010", event: "Especialização em Direito de Família e Sucessões pela PUC-RS" },
      { year: "2012", event: "Mestrado em Direito Civil pela USP" },
      { year: "2015", event: "Fundação do escritório Bauer & Crespo" },
    ],
    quote: "Cada família tem sua história única. Nosso papel é protegê-la com sensibilidade e técnica jurídica.",
  },
  {
    name: "Dr. Henrique Crespo",
    role: "Sócio Fundador",
    oab: "OAB/RS 97.XXX",
    image: "/professional-brazilian-man-lawyer-portrait-elegant.jpg",
    specialties: ["Direito Administrativo", "Direito Tributário", "Direito Empresarial"],
    bio: "Henrique Crespo construiu sua carreira com foco na resolução de conflitos complexos entre particulares e o poder público. Graduado pela PUC-RS em 2007, desenvolveu expertise em questões que envolvem a administração pública e o planejamento tributário.",
    journey: [
      { year: "2007", event: "Graduação em Direito pela PUC-RS" },
      { year: "2009", event: "Especialização em Direito Público pela FGV" },
      { year: "2013", event: "Mestrado em Direito Tributário pela UFRGS" },
      { year: "2015", event: "Fundação do escritório Bauer & Crespo" },
    ],
    quote:
      "A advocacia exige precisão técnica, mas nunca podemos esquecer que por trás de cada processo há uma pessoa.",
  },
]

const values = [
  {
    icon: Shield,
    title: "Ética Profissional",
    description: "Atuamos rigorosamente dentro dos limites éticos da OAB, com transparência em todas as relações.",
  },
  {
    icon: Users,
    title: "Atendimento Humanizado",
    description: "Cada cliente é único. Dedicamos tempo para entender sua história e suas necessidades específicas.",
  },
  {
    icon: Target,
    title: "Excelência Técnica",
    description: "Investimos constantemente em atualização e pesquisa para oferecer o melhor embasamento jurídico.",
  },
  {
    icon: Heart,
    title: "Compromisso Genuíno",
    description: "Tratamos cada caso como se fosse nosso, com dedicação e acompanhamento próximo.",
  },
]

const milestones = [
  { year: "2015", title: "Fundação", description: "Início das atividades em Porto Alegre" },
  { year: "2017", title: "Expansão", description: "Ampliação da equipe e áreas de atuação" },
  { year: "2020", title: "Digitalização", description: "Implementação de atendimento remoto" },
  { year: "2024", title: "Consolidação", description: "Mais de 500 casos atendidos com sucesso" },
]

export default function OEscritorioPage() {
  const [activeFounder, setActiveFounder] = useState<number | null>(null)

  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative h-72 md:h-96 flex items-center">
          <div className="absolute inset-0 z-0">
            <Image
              src="/modern-law-office-interior-with-elegant-furniture-.jpg"
              alt="Interior do escritório"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-r from-primary/95 to-primary/80" />
          </div>
          <div className="relative z-10 container mx-auto px-4 md:px-6">
            <div className="max-w-2xl">
              <p className="text-primary-foreground/80 text-sm uppercase tracking-wider mb-3">Conheça nossa história</p>
              <h1 className="text-3xl md:text-5xl font-semibold text-white mb-4">O Escritório</h1>
              <p className="text-lg text-primary-foreground/90">
                Mais de uma década dedicados à advocacia responsável e ao atendimento humanizado.
              </p>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 text-primary text-sm font-medium">
                  <Building className="w-4 h-4" />
                  Nossa História
                </div>
                <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
                  Uma parceria construída sobre valores sólidos
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    O escritório <strong className="text-foreground">Bauer & Crespo Advogados</strong> nasceu em 2015 da
                    união de dois profissionais com trajetórias complementares e uma visão compartilhada: oferecer
                    advocacia de qualidade com atendimento verdadeiramente humanizado.
                  </p>
                  <p>
                    Marta Bauer e Henrique Crespo se conheceram durante uma especialização e logo perceberam que suas
                    áreas de expertise se complementavam perfeitamente. Enquanto Marta dedicava-se às questões de
                    família e sucessões, Henrique aprofundava-se no direito público e tributário.
                  </p>
                  <p>
                    Hoje, após quase uma década de atuação, o escritório se consolidou como referência em Porto Alegre,
                    mantendo o mesmo compromisso do primeiro dia: tratar cada cliente com a atenção e o respeito que
                    merece.
                  </p>
                </div>
              </div>
              <div className="relative">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-4">
                    <div className="relative h-48 rounded-lg overflow-hidden">
                      <Image
                        src="/professional-lawyers-team-discussing-case-in-meeti.jpg"
                        alt="Equipe em reunião"
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="relative h-32 rounded-lg overflow-hidden">
                      <Image
                        src="/elegant-law-office-reception-area-with-modern-desi.jpg"
                        alt="Recepção"
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  </div>
                  <div className="space-y-4 pt-8">
                    <div className="relative h-32 rounded-lg overflow-hidden">
                      <Image
                        src="/elegant-law-library-with-legal-books-and-natural-l.jpg"
                        alt="Biblioteca"
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="relative h-48 rounded-lg overflow-hidden">
                      <Image
                        src="/law-books-on-shelf-professional-legal-library-dark.jpg"
                        alt="Livros jurídicos"
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  </div>
                </div>
                {/* Stats overlay */}
                <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-8 py-4 rounded-lg shadow-lg">
                  <div className="flex items-center gap-8">
                    <div className="text-center">
                      <p className="text-2xl font-bold">9+</p>
                      <p className="text-xs text-primary-foreground/80">Anos de atuação</p>
                    </div>
                    <div className="w-px h-10 bg-primary-foreground/20" />
                    <div className="text-center">
                      <p className="text-2xl font-bold">500+</p>
                      <p className="text-xs text-primary-foreground/80">Casos atendidos</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-16 bg-secondary/50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-3">Nossa Trajetória</h2>
              <p className="text-muted-foreground">Marcos importantes da nossa história</p>
            </div>
            <div className="flex flex-wrap justify-center gap-4 md:gap-0">
              {milestones.map((milestone, index) => (
                <div key={milestone.year} className="relative group flex-1 min-w-[200px] max-w-[280px]">
                  <div className="bg-background rounded-lg p-6 border border-border hover:border-primary/50 hover:shadow-lg transition-all duration-300 h-full">
                    <div className="text-primary font-bold text-xl mb-2">{milestone.year}</div>
                    <h3 className="font-semibold text-foreground mb-1">{milestone.title}</h3>
                    <p className="text-sm text-muted-foreground">{milestone.description}</p>
                  </div>
                  {index < milestones.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 -right-2 w-4 h-0.5 bg-border" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Founders Section */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 text-primary text-sm font-medium mb-3">
                <Users className="w-4 h-4" />
                Nossos Fundadores
              </div>
              <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-3">
                Conheça quem está por trás do escritório
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Profissionais dedicados que unem experiência técnica e compromisso genuíno com cada cliente.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {founders.map((founder, index) => (
                <div
                  key={founder.name}
                  className="group relative bg-secondary/30 rounded-2xl overflow-hidden border border-border hover:border-primary/30 transition-all duration-500 h-max"
                  onMouseEnter={() => setActiveFounder(index)}
                  onMouseLeave={() => setActiveFounder(null)}
                >
                  <div className="flex flex-col md:flex-row">
                    {/* Image */}
                    <div className="relative w-full md:w-2/5 h-64 md:h-auto md:min-h-[400px] overflow-hidden">
                      <Image
                        src={founder.image || "/placeholder.svg"}
                        alt={founder.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-primary/60 via-transparent to-transparent md:bg-linear-to-r" />

                      {/* Mobile name overlay */}
                      <div className="absolute bottom-4 left-4 md:hidden">
                        <h3 className="text-xl font-semibold text-white">{founder.name}</h3>
                        <p className="text-white/80 text-sm">{founder.role}</p>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 p-6 md:p-8">
                      {/* Desktop name */}
                      <div className="hidden md:block mb-4">
                        <h3 className="text-xl font-semibold text-foreground">{founder.name}</h3>
                        <p className="text-primary text-sm">{founder.role}</p>
                        <p className="text-muted-foreground text-xs mt-1">{founder.oab}</p>
                      </div>

                      {/* Specialties */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {founder.specialties.map((specialty) => (
                          <span key={specialty} className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full">
                            {specialty}
                          </span>
                        ))}
                      </div>

                      {/* Bio */}
                      <p className="text-muted-foreground text-sm leading-relaxed mb-4">{founder.bio}</p>

                      {/* Journey - revealed on hover */}
                      <div
                        className={`mt-6 overflow-hidden transition-all duration-500 ${activeFounder === index ? "max-h-64 opacity-100" : "max-h-0 opacity-0"}`}
                      >
                        <p className="text-xs uppercase tracking-wider text-primary mb-3 flex items-center gap-2">
                          <GraduationCap className="w-4 h-4" />
                          Trajetória Acadêmica
                        </p>
                        <div className="space-y-2">
                          {founder.journey.map((item) => (
                            <div key={item.year} className="flex items-center gap-3 text-sm">
                              <span className="text-primary font-medium w-12">{item.year}</span>
                              <span className="w-1.5 h-1.5 rounded-full bg-primary/50" />
                              <span className="text-muted-foreground">{item.event}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Hover hint */}
                      <p
                        className={`text-xs text-muted-foreground/60 mt-4 transition-opacity duration-300 ${activeFounder === index ? "opacity-0" : "opacity-100"}`}
                      >
                        Passe o mouse para ver a trajetória completa
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 md:py-24 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-semibold mb-3">Nossos Valores</h2>
              <p className="text-primary-foreground/80 max-w-2xl mx-auto">
                Princípios que guiam nossa atuação e definem quem somos como profissionais.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value) => (
                <div
                  key={value.title}
                  className="group bg-primary-foreground/5 backdrop-blur-sm rounded-xl p-6 border border-primary-foreground/10 hover:bg-primary-foreground/10 hover:border-primary-foreground/20 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary-foreground/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <value.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{value.title}</h3>
                  <p className="text-sm text-primary-foreground/70 leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-20 bg-background">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-4">
                Vamos conversar sobre o seu caso?
              </h2>
              <p className="text-muted-foreground mb-8">
                Entre em contato conosco para uma análise inicial da sua situação. Estamos prontos para ouvir você e
                orientá-lo da melhor forma possível.
              </p>
              <Link
                href="/contato"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg font-medium hover:bg-primary/90 transition-colors duration-300 group"
              >
                Fale Conosco
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
