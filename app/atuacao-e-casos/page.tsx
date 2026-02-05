import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { SectionWrapper } from "@/components/section-wrapper"
import { CaseCardModern } from "@/components/case-card-modern"

const cases = [
  // 2025
  {
    area: "Direito do Consumidor",
    description:
      "Representação de consumidor em ação contra concessionária de energia por cobrança indevida e suspensão indevida do serviço.",
    instance: "2º Juizado Especial Cível",
    year: "2025",
    highlight: "Reestabelecimento do serviço e condenação em danos morais",
  },
  {
    area: "Direito Trabalhista",
    description:
      "Defesa de empresa em ação civil pública movida pelo Ministério Público do Trabalho sobre condições de segurança do trabalho.",
    instance: "Vara do Trabalho - 2ª Instância",
    year: "2025",
    highlight: "Acordo celebrado e ajustes implantados no ambiente laboral",
  },
  {
    area: "Direito Tributário",
    description:
      "Planejamento tributário para reestruturação societária de grupo empresarial, visando otimização fiscal.",
    instance: "Planejamento Interno",
    year: "2025",
    highlight: "Redução expressiva de carga tributária no exercício seguinte",
  },
  {
    area: "Direito Civil",
    description:
      "Atuação em ação de indenização decorrente de acidente de trânsito com múltiplos envolvidos.",
    instance: "Vara Cível - 2ª Instância",
    year: "2025",
    highlight: "Indenização justa concedida ao cliente após perícia técnica",
  },
  {
    area: "Direito Administrativo",
    description:
      "Elaboração de defesa em processo disciplinar envolvendo servidor público municipal acusado injustamente.",
    instance: "Comissão Interna de Sindicância",
    year: "2025",
    highlight: "Arquivamento do processo e manutenção do cargo ao servidor",
  },
  // 2024
  {
    area: "Direito de Família",
    description:
      "Atuação em processo de divórcio com partilha complexa de bens, incluindo participação societária em empresa familiar e imóveis em diferentes estados.",
    instance: "Vara de Família - 1ª Instância",
    year: "2024",
    highlight: "Acordo alcançado preservando os interesses de ambas as partes",
  },
  {
    area: "Direito Civil",
    description:
      "Assessoria em revisão contratual de financiamento imobiliário com readequação das cláusulas abusivas e recálculo do saldo devedor.",
    instance: "Tribunal de Justiça - 2ª Instância",
    year: "2024",
    highlight: "Redução significativa do saldo devedor após revisão",
  },
  {
    area: "Direito do Consumidor",
    description:
      "Representação em ação de indenização por falha na prestação de serviço bancário, com cobrança de valores em duplicidade.",
    instance: "Juizado Especial Cível",
    year: "2024",
    highlight: "Restituição integral dos valores cobrados indevidamente",
  },
  {
    area: "Direito do Trabalho",
    description:
      "Acompanhamento de reclamação trabalhista envolvendo discussão sobre vínculo empregatício e verbas rescisórias não pagas.",
    instance: "Vara do Trabalho - 1ª Instância",
    year: "2024",
    highlight: "Reconhecimento do vínculo e pagamento das verbas devidas",
  },
  {
    area: "Direito Ambiental",
    description:
      "Atuação em processo judicial para defesa de pequena empresa autuada por desmatamento irregular.",
    instance: "Vara Federal Ambiental",
    year: "2024",
    highlight: "Redução da multa e aprovação de plano de recuperação",
  },
  // 2023
  {
    area: "Direito Administrativo",
    description:
      "Consultoria em processo licitatório para contratação de serviços pela administração pública municipal, com análise de edital e elaboração de proposta.",
    instance: "Processo Administrativo",
    year: "2023",
    highlight: "Cliente habilitado e classificado no certame",
  },
  {
    area: "Direito Tributário",
    description:
      "Defesa em auto de infração lavrado pela Receita Federal, questionando a metodologia de cálculo utilizada na autuação.",
    instance: "CARF - Conselho Administrativo",
    year: "2023",
    highlight: "Cancelamento parcial do auto de infração",
  },
  {
    area: "Direito Civil",
    description:
      "Atuação em ação de usucapião extraordinária de imóvel urbano, com levantamento documental e prova testemunhal.",
    instance: "Vara Cível - 1ª Instância",
    year: "2023",
    highlight: "Sentença favorável com registro da propriedade",
  },
  {
    area: "Direito Ambiental",
    description:
      "Assessoria em processo de licenciamento ambiental para empreendimento comercial, com elaboração de estudos de impacto.",
    instance: "IBAMA - Processo Administrativo",
    year: "2023",
    highlight: "Licença ambiental obtida dentro do prazo",
  },
  {
    area: "Direito Previdenciário",
    description:
      "Representação de segurada em revisão de aposentadoria por tempo de contribuição, visando inclusão de períodos especiais.",
    instance: "INSS e Justiça Federal",
    year: "2023",
    highlight: "Aposentadoria revista com aumento no benefício",
  },
  {
    area: "Direito Administrativo",
    description:
      "Elaboração de parecer jurídico sobre inexigibilidade de licitação para contratação de fornecedor exclusivo.",
    instance: "Consultoria Administrativa",
    year: "2023",
    highlight: "Procedimento validado e contratação efetivada",
  },
  // 2022
  {
    area: "Direito de Família",
    description: "Acompanhamento de inventário extrajudicial com múltiplos herdeiros e bens em diferentes localidades.",
    instance: "Cartório de Notas",
    year: "2022",
    highlight: "Conclusão em tempo recorde com acordo entre herdeiros",
  },
  {
    area: "Direito Civil",
    description: "Assessoria em ação de cobrança envolvendo empresa de médio porte por inadimplência contratual de fornecimento.",
    instance: "Vara Cível",
    year: "2022",
    highlight: "Recuperação de crédito extrajudicial e negociação exitosa",
  },
  {
    area: "Direito do Consumidor",
    description:
      "Defesa de empresa do ramo alimentício em ação coletiva sobre publicidade enganosa em campanha promocional.",
    instance: "Vara Cível - Ação Coletiva",
    year: "2022",
    highlight: "Composição extrajudicial e adequações em campanhas futuras",
  },
  {
    area: "Direito Trabalhista",
    description:
      "Acompanhamento de processo de equiparação salarial com perícia técnica para comprovação de funções idênticas.",
    instance: "Vara do Trabalho",
    year: "2022",
    highlight: "Reconhecimento de equiparação e pagamento das diferenças",
  },
  // 2021
  {
    area: "Direito Tributário",
    description:
      "Ajuizamento de mandado de segurança para restituição de tributo cobrado indevidamente pelo Fisco estadual.",
    instance: "Vara da Fazenda Pública",
    year: "2021",
    highlight: "Sentença favorável e restituição obtida ao cliente",
  },
  {
    area: "Direito Civil",
    description:
      "Defesa de cliente em ação de rescisão contratual de compra e venda de imóvel por vícios ocultos.",
    instance: "Vara Cível",
    year: "2021",
    highlight: "Sentença de rescisão contratual e ressarcimento integral",
  },
  {
    area: "Direito Previdenciário",
    description:
      "Obtenção de auxílio-doença para trabalhador afastado após acidente, com atuação em deferimento do benefício pelo INSS.",
    instance: "INSS",
    year: "2021",
    highlight: "Benefício concedido retroativamente",
  }
]

// Group cases by year
const casesByYear = cases.reduce(
  (acc, caseItem) => {
    if (!acc[caseItem.year]) {
      acc[caseItem.year] = []
    }
    acc[caseItem.year].push(caseItem)
    return acc
  },
  {} as Record<string, typeof cases>,
)

const years = Object.keys(casesByYear).sort((a, b) => Number(b) - Number(a))

export default function AtuacaoECasosPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative h-72 md:h-96 flex items-center">
          <div className="absolute inset-0 z-0">
            <Image
              src="/lawyer-signing-legal-documents-at-wooden-desk-prof.jpg"
              alt="Documentos jurídicos"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-primary/85" />
          </div>
          <div className="relative z-10 container mx-auto px-4 md:px-6">
            <span className="inline-block px-4 py-1.5 text-xs font-medium bg-white/20 text-white rounded-full mb-4 backdrop-blur-sm">
              Nossa Experiência
            </span>
            <h1 className="text-3xl md:text-5xl font-semibold text-white mb-4 text-balance">
              Atuação e Casos Recentes
            </h1>
            <p className="text-white/90 leading-relaxed max-w-2xl text-lg">
              Exemplos de casos acompanhados pelo escritório. Os dados são genéricos para preservar o sigilo
              profissional das partes envolvidas.
            </p>
          </div>
        </section>

        {/* Cases by Year - Timeline Style */}
        <SectionWrapper className="py-16 md:py-24">
          <div className="space-y-16">
            {years.map((year) => (
              <div key={year}>
                {/* Year Header */}
                <div className="flex items-center gap-4 mb-8">
                  <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary text-white font-semibold text-lg">
                    {year}
                  </div>
                  <div className="h-px flex-1 bg-border" />
                </div>

                {/* Cases Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {casesByYear[year].map((caseItem, index) => (
                    <CaseCardModern key={index} {...caseItem} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </SectionWrapper>

        {/* Disclaimer */}
        <section className="bg-secondary py-12">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-sm text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Nota:</strong> Os casos apresentados são exemplos genéricos da
                atuação do escritório. As informações foram simplificadas e não identificam as partes envolvidas, em
                observância ao sigilo profissional previsto no Código de Ética e Disciplina da OAB.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
