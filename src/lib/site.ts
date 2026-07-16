/**
 * Dados do escritório — tudo no site (header, CTA, footer, sócios) lê daqui.
 */
export const site = {
  name: "Bauer & Crespo Advogados",
  shortName: "Bauer & Crespo",
  city: "São Lourenço do Sul, RS",
  foundedYear: 2015,

  email: "contato@bauerecrespo.adv.br",
  instagram: "bauerecrespoadvogados",

  address: "Rua Álvares Cabral, nº 226 — São Lourenço do Sul, RS",
} as const

export type Partner = {
  id: "marta" | "henrique"
  firstName: string
  name: string
  role: string
  oab: string
  specialties: string
  specialtiesShort: string
  education: readonly string[]
  /** DDI+DDD, só dígitos. Ex.: "5551999990000" */
  whatsapp: string
  phoneDisplay: string
}

/**
 * WhatsApp de cada sócio.
 * PREENCHER: confirme o número da Marta e preencha o do Henrique.
 */
export const partners: readonly Partner[] = [
  {
    id: "marta",
    firstName: "Marta",
    name: "Marta Bauer",
    role: "Sócia fundadora",
    oab: "OAB/RS 63.087",
    specialties: "Família · Sucessões · Civil",
    specialtiesShort: "Família, Sucessões e Civil",
    education: [
      "Graduação em Direito — UFRGS",
      "Especialização em Direito de Família e Sucessões — PUC-RS",
      "Mestrado em Direito Civil — USP",
    ],
    whatsapp: "5553984759995",
    phoneDisplay: "(53) 98475-9995",
  },
  {
    id: "henrique",
    firstName: "Henrique",
    name: "Henrique Crespo",
    role: "Sócio fundador",
    oab: "OAB/RS 39.421",
    specialties: "Administrativo · Tributário · Empresarial",
    specialtiesShort: "Administrativo, Tributário e Empresarial",
    education: [
      "Graduação em Direito — PUC-RS",
      "Especialização em Direito Público — FGV",
      "Mestrado em Direito Tributário — UFRGS",
    ],
    whatsapp: "5553984167400",
    phoneDisplay: "(53) 98416-7400",
  },
] as const

const defaultMessage = (firstName: string) =>
  `Olá, ${firstName}! Visitei o site do escritório Bauer & Crespo e gostaria de falar sobre o meu caso.`

export function partnerWhatsappHref(partner: Partner, message?: string) {
  const text = message ?? defaultMessage(partner.firstName)
  return `https://wa.me/${partner.whatsapp}?text=${encodeURIComponent(text)}`
}
