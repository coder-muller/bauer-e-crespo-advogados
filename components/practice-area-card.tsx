import Link from "next/link"
import { ArrowRight } from "lucide-react"

interface PracticeAreaCardProps {
  index: number
  title: string
  description: string
  href?: string
}

export function PracticeAreaCard({ index, title, description, href }: PracticeAreaCardProps) {
  const content = (
    <div className="group flex gap-5 items-start py-6 border-t border-border">
      <span className="text-xs text-gold tabular-nums font-semibold w-7 shrink-0 pt-0.5 select-none">
        {String(index).padStart(2, "0")}
      </span>
      <div className="flex-1 min-w-0">
        <h3 className="text-base font-semibold text-primary mb-1.5 group-hover:text-primary/80 transition-colors duration-150">
          {title}
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed text-pretty">{description}</p>
      </div>
      {href && (
        <ArrowRight className="w-4 h-4 text-border group-hover:text-primary group-hover:translate-x-0.5 transition-all duration-150 mt-0.5 shrink-0" />
      )}
    </div>
  )

  if (href) {
    return (
      <Link href={href} className="block">
        {content}
      </Link>
    )
  }

  return content
}
