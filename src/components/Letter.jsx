import { useState } from 'react'
import { MailOpen } from 'lucide-react'

export default function Letter({ letter }) {
  const [opened, setOpened] = useState(false)
  return (
    <section className="letter-section" id="letter">
      <div className="letter-backdrop" />
      <div className="letter-wrap section-shell">
        <button type="button" className={`letter ${opened ? 'is-open' : ''}`} onClick={() => setOpened(true)} aria-expanded={opened}>
          <span className="letter-flap" aria-hidden="true" />
          <span className="letter-seal" aria-hidden="true">A + S</span>
          {!opened && <span className="letter-prompt"><MailOpen size={17} /> Abre cuando necesites recordarlo</span>}
          <span className="letter-paper">
            <span className="letter-date">{letter.date}</span>
            <span className="letter-opening">{letter.opening}</span>
            <span className="letter-body">{letter.body}</span>
            <span className="letter-closing">{letter.closing}</span>
          </span>
        </button>
      </div>
    </section>
  )
}
