import SectionHeading from './SectionHeading'
import { useReveal } from '../hooks/useReveal'

export default function Story({ story }) {
  const [ref, shown] = useReveal()
  return (
    <section id="story" className="story section-shell" ref={ref}>
      <div className={`reveal ${shown ? 'is-visible' : ''}`}>
        <SectionHeading eyebrow={story.eyebrow} title={story.title} />
        <div className="story-copy">
          <p>{story.text}</p>
          <p className="handwriting">{story.signature}</p>
        </div>
      </div>
    </section>
  )
}
