export default function SectionHeading({ eyebrow, title, className = '' }) {
  return (
    <header className={`section-heading ${className}`}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2>{title}</h2>
    </header>
  )
}
