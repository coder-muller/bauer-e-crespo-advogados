import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const founders = [
  {
    name: "Dra. Marta Bauer",
    role: "Sócia Fundadora",
    oab: "OAB/RS 98.XXX",
    image: "https://59bl0nz7dg.ufs.sh/f/58fbkIWjFNDHhJfuaM6a08KTLo7gvl2VYwJsOynbU4upPMxX",
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
    image: "https://59bl0nz7dg.ufs.sh/f/58fbkIWjFNDHuBWF1dr2Njc4aK6kCMZ0VJv3rOTwUDA5isqn",
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
    index: "01",
    title: "Ética Profissional",
    description: "Atuamos rigorosamente dentro dos limites éticos da OAB, com transparência em todas as relações.",
  },
  {
    index: "02",
    title: "Atendimento Humanizado",
    description: "Cada cliente é único. Dedicamos tempo para entender sua história e suas necessidades específicas.",
  },
  {
    index: "03",
    title: "Excelência Técnica",
    description: "Investimos constantemente em atualização e pesquisa para oferecer o melhor embasamento jurídico.",
  },
  {
    index: "04",
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

const stats = [
  { value: "9+", label: "Anos de atuação" },
  { value: "500+", label: "Casos atendidos" },
  { value: "2", label: "Sócios fundadores" },
]

export default function OEscritorioPage() {
  return (
    <>
      <Header />
      <main>
        {/* ── Page header (typographic) ── */}
        <section className="pt-32 md:pt-40 pb-14 md:pb-20 bg-secondary">
          <div className="max-w-6xl mx-auto px-6">
            <div className="w-8 h-px bg-gold mb-7" />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary leading-[1.08] mb-5 text-balance max-w-xl">
              O Escritório
            </h1>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-xl text-pretty">
              Mais de uma década dedicados à advocacia responsável e ao atendimento humanizado em Porto Alegre.
            </p>
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

        {/* ── História ── */}
        <section className="py-20 md:py-28">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
              {/* Text */}
              <div>
                <p className="text-xs text-gold uppercase tracking-[0.16em] font-semibold mb-5">Nossa História</p>
                <h2 className="text-3xl md:text-4xl font-bold text-primary leading-[1.15] mb-6 text-balance">
                  Uma parceria construída sobre valores sólidos
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed text-sm md:text-base">
                  <p>
                    O escritório <strong className="text-foreground font-semibold">Bauer &amp; Crespo Advogados</strong>{" "}
                    nasceu em 2015 da união de dois profissionais com trajetórias complementares e uma visão
                    compartilhada: oferecer advocacia de qualidade com atendimento verdadeiramente humanizado.
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

              {/* Image */}
              <div className="relative h-80 lg:h-110 overflow-hidden rounded">
                <Image
                  src="https://59bl0nz7dg.ufs.sh/f/58fbkIWjFNDHOGjye9HuLI1BqrwnHDA4m5jU09g2lVRyTCvP"
                  alt="Equipe em reunião"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ── Trajetória ── */}
        <section className="py-20 md:py-28 bg-secondary">
          <div className="max-w-6xl mx-auto px-6">
            <div className="max-w-xl">
              <p className="text-xs text-gold uppercase tracking-[0.16em] font-semibold mb-5">Trajetória</p>
              <h2 className="text-3xl md:text-4xl font-bold text-primary leading-[1.15] mb-12 text-balance">
                Marcos da nossa história
              </h2>
            </div>

            <div className="space-y-0">
              {milestones.map((milestone) => (
                <div key={milestone.year} className="flex gap-8 py-7 border-t border-border last:border-b">
                  <span className="text-2xl font-bold text-gold tabular-nums w-16 shrink-0 leading-none pt-0.5">
                    {milestone.year}
                  </span>
                  <div>
                    <h3 className="font-semibold text-primary mb-1">{milestone.title}</h3>
                    <p className="text-sm text-muted-foreground">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Fundadores ── */}
        <section className="py-20 md:py-28">
          <div className="max-w-6xl mx-auto px-6">
            <div className="max-w-xl mb-14">
              <p className="text-xs text-gold uppercase tracking-[0.16em] font-semibold mb-5">Fundadores</p>
              <h2 className="text-3xl md:text-4xl font-bold text-primary leading-[1.15] text-balance">
                Quem está por trás do escritório
              </h2>
            </div>

            <div className="space-y-16 md:space-y-20">
              {founders.map((founder) => (
                <article key={founder.name} className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-12">
                  {/* Photo */}
                  <div className="md:col-span-2 relative h-72 md:h-115 overflow-hidden rounded">
                    <Image
                      src={founder.image}
                      alt={founder.name}
                      fill
                      className="object-cover object-top"
                    />
                  </div>

                  {/* Content */}
                  <div className="md:col-span-3 flex flex-col justify-center">
                    {/* Name & role */}
                    <div className="mb-5">
                      <h3 className="text-2xl font-bold text-primary">{founder.name}</h3>
                      <p className="text-sm text-muted-foreground mt-1">{founder.role} · {founder.oab}</p>
                    </div>

                    {/* Specialties */}
                    <div className="flex flex-wrap gap-x-4 gap-y-1 mb-5">
                      {founder.specialties.map((s) => (
                        <span key={s} className="text-xs text-muted-foreground">
                          {s}
                        </span>
                      ))}
                    </div>

                    {/* Gold rule */}
                    <div className="w-8 h-px bg-gold mb-5" />

                    {/* Bio */}
                    <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-6 text-pretty">
                      {founder.bio}
                    </p>

                    {/* Quote */}
                    <blockquote className="border-l-2 border-gold pl-4 mb-6">
                      <p className="text-sm italic text-foreground/80 leading-relaxed text-pretty">
                        &ldquo;{founder.quote}&rdquo;
                      </p>
                    </blockquote>

                    {/* Academic journey */}
                    <div>
                      <p className="text-xs uppercase tracking-[0.14em] text-muted-foreground font-medium mb-3">
                        Formação
                      </p>
                      <div className="space-y-2">
                        {founder.journey.map((item) => (
                          <div key={item.year} className="flex items-start gap-4 text-sm">
                            <span className="text-gold tabular-nums font-semibold w-10 shrink-0">{item.year}</span>
                            <span className="text-muted-foreground text-pretty">{item.event}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ── Valores ── */}
        <section className="py-20 md:py-28 bg-secondary">
          <div className="max-w-6xl mx-auto px-6">
            <div className="max-w-xl mb-4">
              <p className="text-xs text-gold uppercase tracking-[0.16em] font-semibold mb-5">Princípios</p>
              <h2 className="text-3xl md:text-4xl font-bold text-primary leading-[1.15] mb-3 text-balance">
                Nossos Valores
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2">
              {values.map((value) => (
                <div key={value.title} className="flex gap-5 items-start py-7 border-t border-border">
                  <span className="text-xs text-gold tabular-nums font-semibold w-7 shrink-0 pt-0.5 select-none">
                    {value.index}
                  </span>
                  <div>
                    <h3 className="font-semibold text-primary mb-2">{value.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed text-pretty">{value.description}</p>
                  </div>
                </div>
              ))}
              <div className="border-t border-border md:col-span-2" />
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="bg-primary py-20 md:py-28">
          <div className="max-w-6xl mx-auto px-6">
            <div className="max-w-xl">
              <div className="w-8 h-px bg-gold mb-7" />
              <h2 className="text-3xl font-bold text-white leading-[1.15] mb-5 text-balance">
                Vamos conversar sobre o seu caso?
              </h2>
              <p className="text-white/65 leading-relaxed mb-8 text-pretty">
                Entre em contato para uma análise inicial. Estamos prontos para ouvir você e orientá-lo da melhor
                forma.
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
