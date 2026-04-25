import type React from "react"
import { cn } from "@/lib/utils"

interface SectionWrapperProps {
  children: React.ReactNode
  className?: string
  id?: string
}

export function SectionWrapper({ children, className, id }: SectionWrapperProps) {
  return (
    <section id={id} className={cn("py-20 md:py-28", className)}>
      <div className="max-w-6xl mx-auto px-6">{children}</div>
    </section>
  )
}
