import Link from "next/link"
import { ArrowRight } from "lucide-react"

interface PracticeAreaCardProps {
  title: string
  description: string
  href?: string
}

export function PracticeAreaCard({ title, description, href }: PracticeAreaCardProps) {
  const Wrapper = href ? Link : "div"
  const wrapperProps = href ? { href } : {}

  return (
    <Wrapper
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      {...(wrapperProps as any)}
      className="group block p-6 bg-background border border-border rounded-lg hover:border-primary/30 hover:shadow-sm transition-all duration-300"
    >
      <h3 className="text-lg font-semibold text-primary mb-3">{title}</h3>
      <p className="text-sm text-muted-foreground leading-relaxed mb-4">{description}</p>
      {href && (
        <span className="inline-flex items-center gap-1 text-sm text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Saiba mais
          <ArrowRight className="w-4 h-4" />
        </span>
      )}
    </Wrapper>
  )
}
