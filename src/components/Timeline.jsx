import { MapPin } from 'lucide-react'
import SectionHeading from './SectionHeading'
import { useReveal } from '../hooks/useReveal'

function TimelineItem({ moment, index }) {
  const [ref, shown] = useReveal()
  return (
    <article ref={ref} className={`timeline-item ${moment.layout} reveal ${shown ? 'is-visible' : ''}`}>
      <div className="moment-label"><span>{String(index + 1).padStart(2, '0')}</span><i /></div>
      <figure className="moment-image-wrap">
        <img src={moment.image} alt={moment.alt} loading="lazy" />
      </figure>
      <div className="moment-copy">
        <p className="moment-date">{moment.date}</p>
        <h3>{moment.title}</h3>
        <p>{moment.description}</p>
        {moment.location && <p className="moment-location"><MapPin size={14} strokeWidth={1.5} /> {moment.location}</p>}
      </div>
    </article>
  )
}

export default function Timeline({ timeline }) {
  return (
    <section className="timeline section-shell" id="timeline">
      <SectionHeading eyebrow="Capítulo a capítulo" title="Los momentos que nos hicieron." />
      <div className="timeline-list">
        {timeline.map((moment, index) => <TimelineItem key={`${moment.date}-${moment.title}`} moment={moment} index={index} />)}
      </div>
    </section>
  )
}
