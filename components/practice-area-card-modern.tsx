interface PracticeAreaCardModernProps {
  index: number
  title: string
  description: string
  examples: string[]
}

export function PracticeAreaCardModern({ index, title, description, examples }: PracticeAreaCardModernProps) {
  return (
    <article className="py-8 border-t border-border">
      <div className="flex gap-6">
        {/* Index */}
        <span className="text-xs text-gold tabular-nums font-semibold w-7 shrink-0 pt-0.5 select-none">
          {String(index).padStart(2, "0")}
        </span>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <h3 className="text-lg font-semibold text-primary mb-3">{title}</h3>
          <p className="text-sm text-muted-foreground leading-relaxed mb-5 text-pretty">{description}</p>

          {/* Examples */}
          <ul className="space-y-2">
            {examples.map((example, i) => (
              <li key={i} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                <span className="text-gold shrink-0 mt-0.5 select-none">—</span>
                <span className="text-pretty">{example}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  )
}
