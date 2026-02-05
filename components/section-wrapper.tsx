import type React from "react"
import { cn } from "@/lib/utils"

interface SectionWrapperProps {
  children: React.ReactNode
  className?: string
  id?: string
  background?: "white" | "gray"
}

export function SectionWrapper({ children, className, id, background = "white" }: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={cn("py-16 md:py-24", background === "gray" ? "bg-secondary" : "bg-background", className)}
    >
      <div className="max-w-6xl mx-auto px-6">{children}</div>
    </section>
  )
}
