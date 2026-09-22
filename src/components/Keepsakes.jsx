import { useMemo } from 'react'
import { useReveal } from '../hooks/useReveal'

function daysTogether(startDate) {
  const start = new Date(`${startDate}T12:00:00`)
  const today = new Date()
  return Math.max(0, Math.floor((today - start) / 86400000))
}

export default function Keepsakes({ keepsakes, startDate }) {
  const days = useMemo(() => daysTogether(startDate), [startDate])
  const [ref, shown] = useReveal()
  return (
    <section className="keepsakes section-shell" ref={ref}>
      <div className={`keepsakes-wrap reveal ${shown ? 'is-visible' : ''}`}>
        <p className="eyebrow">Algunas cosas para recordar</p>
        <div className="keepsake-list">
          {keepsakes.map((memory) => <div className="keepsake" key={memory.label}><span>{memory.label}</span><p>{memory.value}</p></div>)}
          <div className="keepsake days"><span>Días juntos</span><p>{days.toLocaleString('es-PE')} <em>y sumando</em></p></div>
        </div>
      </div>
    </section>
  )
}
