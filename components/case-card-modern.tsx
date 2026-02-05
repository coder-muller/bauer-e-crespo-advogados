"use client"

import { useState } from "react"
import { Calendar, MapPin, ArrowUpRight } from "lucide-react"

interface CaseCardModernProps {
  area: string
  description: string
  instance: string
  year: string
  highlight?: string
}

export function CaseCardModern({ area, description, instance, year, highlight }: CaseCardModernProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <article
      className={`group relative bg-background border rounded-xl transition-all duration-500 overflow-hidden ${
        isHovered ? "border-primary shadow-lg shadow-primary/10 scale-[1.02]" : "border-border hover:border-primary/30"
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Top accent bar */}
      <div className={`h-1 bg-primary transition-all duration-500 ${isHovered ? "opacity-100" : "opacity-0"}`} />

      <div className="p-6">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <span
            className={`px-3 py-1.5 text-xs font-medium rounded-full transition-all duration-300 ${
              isHovered ? "bg-primary text-white" : "bg-primary/10 text-primary"
            }`}
          >
            {area}
          </span>
          <ArrowUpRight
            className={`w-5 h-5 text-primary transition-all duration-300 ${
              isHovered ? "opacity-100 translate-x-0 -translate-y-0" : "opacity-0 -translate-x-2 translate-y-2"
            }`}
          />
        </div>

        {/* Description */}
        <p className="text-foreground leading-relaxed mb-4 line-clamp-3 group-hover:line-clamp-none transition-all duration-300">
          {description}
        </p>

        {/* Highlight - appears on hover */}
        {highlight && (
          <div
            className={`overflow-hidden transition-all duration-500 ${
              isHovered ? "max-h-20 opacity-100 mb-4" : "max-h-0 opacity-0"
            }`}
          >
            <div className="bg-secondary/80 rounded-lg p-3">
              <p className="text-xs text-primary font-medium">{highlight}</p>
            </div>
          </div>
        )}

        {/* Footer */}
        <div className="flex items-center gap-4 pt-4 border-t border-border">
          <div className="flex items-center gap-1.5 text-muted-foreground">
            <MapPin className="w-3.5 h-3.5" />
            <span className="text-xs">{instance}</span>
          </div>
          <div className="flex items-center gap-1.5 text-muted-foreground">
            <Calendar className="w-3.5 h-3.5" />
            <span className="text-xs">{year}</span>
          </div>
        </div>
      </div>
    </article>
  )
}
