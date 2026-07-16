import { useEffect, useRef, useState, type CSSProperties, type ReactNode, type Ref } from "react"

/**
 * Revela o conteúdo com fade + rise quando entra no viewport.
 * A transição em si vive no CSS (.reveal em index.css) e
 * respeita prefers-reduced-motion.
 *
 * Usa IntersectionObserver com fallback por scroll/resize, para
 * nunca deixar conteúdo invisível caso o observer não dispare.
 */
export function Reveal({
  children,
  delay = 0,
  className,
  as: Tag = "div",
}: {
  children: ReactNode
  delay?: number
  className?: string
  as?: "div" | "section" | "li" | "article"
}) {
  const ref = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const inView = () => el.getBoundingClientRect().top < window.innerHeight * 0.92

    if (inView()) {
      setVisible(true)
      return
    }

    let observer: IntersectionObserver | null = null
    const show = () => {
      setVisible(true)
      observer?.disconnect()
      window.removeEventListener("scroll", onScroll)
      window.removeEventListener("resize", onScroll)
    }
    const onScroll = () => {
      if (inView()) show()
    }

    observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) show()
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.05 },
    )
    observer.observe(el)
    window.addEventListener("scroll", onScroll, { passive: true })
    window.addEventListener("resize", onScroll, { passive: true })

    return () => {
      observer?.disconnect()
      window.removeEventListener("scroll", onScroll)
      window.removeEventListener("resize", onScroll)
    }
  }, [])

  return (
    <Tag
      ref={ref as Ref<HTMLDivElement> & Ref<HTMLLIElement>}
      data-visible={visible}
      className={`reveal ${className ?? ""}`}
      style={{ "--reveal-delay": `${delay}ms` } as CSSProperties}
    >
      {children}
    </Tag>
  )
}
