import { useReveal } from '../hooks/useReveal'

export default function Ending({ couple }) {
  const [ref, shown] = useReveal()
  return (
    <footer className="ending" ref={ref}>
      <img src={couple.ending.image} alt={couple.ending.alt} loading="lazy" />
      <div className="ending-overlay" />
      <div className={`ending-copy ending-reveal ${shown ? 'is-visible' : ''}`}>
        <p className="eyebrow">Continuará</p>
        <h2>{couple.ending.line}</h2>
        <p className="ending-names">{couple.person1} <span>♥</span> {couple.person2}</p>
        <p className="ending-years">{couple.ending.years}</p>
      </div>
    </footer>
  )
}
