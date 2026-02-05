interface CaseCardProps {
  area: string
  description: string
  instance: string
  year: string
}

export function CaseCard({ area, description, instance, year }: CaseCardProps) {
  return (
    <article className="p-6 bg-background border border-border rounded-lg hover:border-primary/30 transition-colors duration-300">
      <div className="flex items-center gap-3 mb-4">
        <span className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full">{area}</span>
        <span className="text-xs text-muted-foreground">{year}</span>
      </div>
      <p className="text-sm text-foreground leading-relaxed mb-3">{description}</p>
      <p className="text-xs text-muted-foreground">{instance}</p>
    </article>
  )
}
