import Link from "next/link"
import Image from "next/image"
import { ArrowRight, ChevronDown } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PracticeAreaCard } from "@/components/practice-area-card"

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

const stats = [
  { value: "9+", label: "Anos de atuação" },
  { value: "500+", label: "Casos atendidos" },
  { value: "7", label: "Áreas de atuação" },
]

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        {/* ── Hero ── */}
        {/*
          Split layout: dark text panel (left 54%) + pristine photo (right 46%).
          h-[88svh] garante que a stats strip vaza ~12% abaixo do fold.
          Header transparente com texto branco já funciona sobre o painel escuro.
        */}
        <section className="relative h-[88svh] min-h-140 lg:grid lg:grid-cols-[54%_46%]">

          {/* ── Painel esquerdo: tipografia sobre escuro puro ── */}
          <div className="bg-primary h-full flex items-center px-8 sm:px-12 lg:px-14 xl:px-20">
            <div className="w-full">

              {/* Label contextual */}
              <p className="text-[9px] uppercase tracking-[0.32em] text-white/28 mb-6 font-medium">
                Porto Alegre&nbsp;&nbsp;·&nbsp;&nbsp;Advocacia&nbsp;&nbsp;·&nbsp;&nbsp;Desde 2015
              </p>

              {/* Linha ouro — assinatura BC */}
              <div className="w-8 h-px bg-gold/50 mb-7" />

              {/* Headline */}
              <h1 className="text-4xl lg:text-[2.75rem] font-bold text-white leading-[1.08] mb-6 text-balance">
                Atuação jurídica<br />
                responsável e técnica.
              </h1>

              {/* Descrição */}
              <p className="text-sm text-white/42 mb-10 leading-relaxed text-pretty max-w-xs">
                Assessoria com análise criteriosa de cada caso, buscando soluções
                adequadas através de acompanhamento técnico e ético.
              </p>

              {/* CTAs */}
              <div className="flex items-center gap-6 flex-wrap">
                <Link
                  href="/contato"
                  className="inline-flex items-center gap-2 text-sm font-semibold bg-white text-primary px-5 py-2.5 hover:bg-white/90 active:bg-white/80 transition-colors duration-150 group rounded-sm"
                >
                  Entre em contato
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-150" />
                </Link>
                <Link
                  href="/areas-de-atuacao"
                  className="text-sm text-white/35 hover:text-white/70 transition-colors duration-200"
                >
                  Nossas áreas
                </Link>
              </div>

            </div>
          </div>

          {/* ── Painel direito: foto sem overlay ── */}
          <div className="hidden lg:block relative overflow-hidden">
            <Image
              src="https://59bl0nz7dg.ufs.sh/f/58fbkIWjFNDHXMJlrk4HGUI6cS7sVPTngwi0pMBoRzNxuWyE"
              alt="Pessoa escrevendo em mesa de escritório"
              fill
              className="object-cover object-center"
              priority
            />
          </div>

          {/* Scroll affordance */}
          <div className="absolute bottom-7 left-8 sm:left-12 lg:left-14 xl:left-20 z-10">
            <ChevronDown className="w-4 h-4 text-white/22 animate-bounce" />
          </div>

        </section>

        {/* ── Stats strip ── */}
        <section className="border-b border-border">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-3 divide-x divide-border">
              {stats.map((stat) => (
                <div key={stat.label} className="flex flex-col items-center py-7 gap-1">
                  <span className="text-2xl md:text-3xl font-bold text-primary tabular-nums">{stat.value}</span>
                  <span className="text-xs text-muted-foreground text-center">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Sobre o escritório ── */}
        <section className="py-20 md:py-28">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              {/* Text */}
              <div>
                <p className="text-xs text-gold uppercase tracking-[0.16em] font-semibold mb-5">
                  Bauer &amp; Crespo
                </p>
                <h2 className="text-3xl md:text-4xl font-bold text-primary leading-[1.15] mb-6 text-balance">
                  Uma parceria construída sobre valores sólidos
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed text-sm md:text-base">
                  <p>
                    Fundado em 2015, o escritório nasceu da união de dois profissionais com trajetórias
                    complementares e uma visão compartilhada: oferecer advocacia de qualidade com atendimento
                    verdadeiramente humanizado.
                  </p>
                  <p>
                    Nossa metodologia prioriza o entendimento completo da situação do cliente, a pesquisa jurídica
                    aprofundada e a comunicação clara sobre as possibilidades de cada caso.
                  </p>
                </div>
                <div className="mt-8">
                  <Link
                    href="/o-escritorio"
                    className="inline-flex items-center gap-2 text-sm font-medium text-primary border-b border-primary/30 pb-0.5 hover:border-primary transition-colors duration-200 group"
                  >
                    Conheça o escritório
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-150" />
                  </Link>
                </div>
              </div>

              {/* Image */}
              <div className="relative h-72 lg:h-105 overflow-hidden rounded">
                <Image
                  src="https://59bl0nz7dg.ufs.sh/f/58fbkIWjFNDHiEryEOBDg9vazAuw3h8kj42q5J1YKscyXeiL"
                  alt="Sala de reuniões do escritório"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ── Áreas de atuação (preview) ── */}
        <section className="py-20 md:py-28 bg-secondary">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex items-end justify-between mb-2">
              <div>
                <p className="text-xs text-gold uppercase tracking-[0.16em] font-semibold mb-4">
                  Especialidades
                </p>
                <h2 className="text-3xl md:text-4xl font-bold text-primary leading-[1.15] text-balance">
                  Áreas de Atuação
                </h2>
              </div>
              <Link
                href="/areas-de-atuacao"
                className="hidden md:inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors duration-150 group shrink-0 mb-1"
              >
                Ver todas as áreas
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-150" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2">
              {practiceAreas.map((area, i) => (
                <PracticeAreaCard
                  key={area.title}
                  index={i + 1}
                  title={area.title}
                  description={area.description}
                  href="/areas-de-atuacao"
                />
              ))}
            </div>

            <div className="mt-6 md:hidden">
              <Link
                href="/areas-de-atuacao"
                className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors duration-150 group"
              >
                Ver todas as áreas
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-150" />
              </Link>
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="bg-primary py-20 md:py-28">
          <div className="max-w-6xl mx-auto px-6">
            <div className="max-w-xl">
              <div className="w-8 h-px bg-gold mb-7" />
              <h2 className="text-3xl md:text-4xl font-bold text-white leading-[1.15] mb-5 text-balance">
                Estamos prontos para analisar o seu caso
              </h2>
              <p className="text-white/65 leading-relaxed mb-8 text-pretty">
                Entre em contato para uma análise inicial da sua situação jurídica. Cada caso é único e merece
                atenção individualizada.
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
