import { type ReactNode } from "react"

interface SectionTitleProps {
  eyebrow: string
  title: ReactNode
  description?: string
  align?: "left" | "center"
  className?: string
}

export function SectionTitle({
  eyebrow,
  title,
  description,
  align = "left",
  className = "",
}: SectionTitleProps) {
  return (
    <div className={`section-title ${align === "center" ? "centered" : ""} ${className}`}>
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  )
}
