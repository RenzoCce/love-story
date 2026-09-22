import { ArrowDown, Menu } from 'lucide-react'

export default function Hero({ couple }) {
  const goToStory = () => document.querySelector('#story')?.scrollIntoView({ behavior: 'smooth' })
  return (
    <section className="hero" aria-label="Introducción">
      <div className="hero-image-wrap">
        <img className="hero-image" src={couple.hero.image} alt={couple.hero.alt} fetchPriority="high" />
      </div>
      <div className="hero-shade" />
      <nav className="hero-nav" aria-label="Navegación de la página">
        <a className="monogram" href="#top" aria-label={`${couple.person1} y ${couple.person2}, inicio`}>A<span>+</span>S</a>
        <a className="nav-story" href="#story">Nuestra historia</a>
        <button className="menu-button" type="button" onClick={goToStory} aria-label="Comenzar nuestra historia"><Menu size={18} strokeWidth={1.5} /></button>
      </nav>
      <div className="hero-copy">
        <p className="hero-kicker">Una historia de dos</p>
        <h1>{couple.hero.title}</h1>
        <p className="hero-subtitle">{couple.hero.subtitle}</p>
      </div>
      <button className="hero-date" type="button" onClick={goToStory}>
        <span>Desde {new Intl.DateTimeFormat('es-PE', { month: 'long', day: 'numeric', year: 'numeric' }).format(new Date(`${couple.startDate}T12:00:00`))}</span>
        <ArrowDown size={16} aria-hidden="true" />
      </button>
    </section>
  )
}
