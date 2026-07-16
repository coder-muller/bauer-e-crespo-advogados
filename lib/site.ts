/**
 * Dados de contato do escritório — preencha os valores reais aqui.
 * Tudo no site (header, CTA, footer) lê deste arquivo.
 */
export const site = {
  name: "Bauer & Crespo Advogados",
  shortName: "Bauer & Crespo",
  city: "São Lourenço do Sul, RS",
  foundedYear: 2015,

  // PREENCHER: número com DDI+DDD, só dígitos. Ex.: "5551999990000"
  whatsappNumber: "5553984759995",
  whatsappMessage:
    "Olá! Visitei o site do escritório Bauer & Crespo e gostaria de falar sobre o meu caso.",

  // PREENCHER: telefone formatado para exibição. Ex.: "(51) 99999-0000"
  phoneDisplay: "(53) 98475-9995",

  email: "contato@bauerecrespo.adv.br",
  instagram: "bauerecrespoadvogados",

  // PREENCHER: endereço completo do escritório
  address: "Endereço a confirmar — São Lourenço do Sul, RS",
} as const

export const whatsappHref = `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(site.whatsappMessage)}`
