"use client"

import type React from "react"

import { useState } from "react"
import { Scale, Users, Building2, Leaf, Briefcase, Calculator, ShoppingBag, ChevronRight } from "lucide-react"

interface PracticeAreaCardModernProps {
  title: string
  description: string
  examples: string[]
  icon: string
  image: string
}

const iconMap: Record<string, React.ElementType> = {
  scale: Scale,
  users: Users,
  building: Building2,
  leaf: Leaf,
  briefcase: Briefcase,
  calculator: Calculator,
  shopping: ShoppingBag,
}

export function PracticeAreaCardModern({ title, description, examples, icon, image }: PracticeAreaCardModernProps) {
  const [isHovered, setIsHovered] = useState(false)
  const Icon = iconMap[icon] || Scale

  return (
    <article
      className="group relative h-[420px] rounded-xl overflow-hidden cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-110"
        style={{ backgroundImage: `url(${image})` }}
      />

      {/* Overlay - gets darker on hover */}
      <div
        className={`absolute inset-0 transition-all duration-500 ${
          isHovered ? "bg-primary/95" : "bg-linear-to-t from-primary/90 via-primary/50 to-transparent"
        }`}
      />

      {/* Content */}
      <div className="relative h-full flex flex-col justify-end p-6 text-white">
        {/* Icon and Title - always visible */}
        <div className={`transition-all duration-500 ${isHovered ? "mb-4" : "mb-0"}`}>
          <div
            className={`inline-flex items-center justify-center w-12 h-12 rounded-lg bg-white/20 backdrop-blur-sm mb-4 transition-all duration-500 ${
              isHovered ? "scale-90 opacity-80" : "scale-100"
            }`}
          >
            <Icon className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
        </div>

        {/* Description - appears on hover */}
        <div
          className={`transition-all duration-500 overflow-hidden ${
            isHovered ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <p className="text-white/90 text-sm leading-relaxed mb-4">{description}</p>

          {/* Examples */}
          <div className="border-t border-white/20 pt-4">
            <p className="text-xs text-white/70 uppercase tracking-wider mb-2">Você pode precisar desta área se:</p>
            <ul className="space-y-1.5">
              {examples.map((example, idx) => (
                <li key={idx} className="flex items-start gap-2 text-sm text-white/85">
                  <ChevronRight className="w-4 h-4 mt-0.5 shrink-0 text-white/60" />
                  <span>{example}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* CTA hint - visible when not hovered */}
        <div
          className={`flex items-center gap-2 text-sm text-white/70 transition-all duration-300 ${
            isHovered ? "opacity-0 translate-y-2" : "opacity-100 translate-y-0"
          }`}
        >
          <span>Passe o mouse para saber mais</span>
        </div>
      </div>
    </article>
  )
}
