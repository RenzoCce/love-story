import { X } from 'lucide-react'
import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import SectionHeading from './SectionHeading'

export default function Gallery({ gallery }) {
  const [selected, setSelected] = useState(null)
  const [origin, setOrigin] = useState(null)
  const [isLightboxOpen, setIsLightboxOpen] = useState(false)
  const [originTransform, setOriginTransform] = useState('translate3d(0, 0, 0) scale(.97)')
  const figureRef = useRef(null)
  const closeButtonRef = useRef(null)
  const closingTimer = useRef(null)

  const prefersReducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches

  const closePhoto = () => {
    if (!selected) return
    if (prefersReducedMotion()) {
      setSelected(null)
      return
    }
    setIsLightboxOpen(false)
    window.clearTimeout(closingTimer.current)
    closingTimer.current = window.setTimeout(() => {
      setSelected(null)
      setOrigin(null)
    }, 220)
  }

  const openPhoto = (photo, event) => {
    window.clearTimeout(closingTimer.current)
    const rect = event.currentTarget.getBoundingClientRect()
    setOrigin({ left: rect.left, top: rect.top, width: rect.width, height: rect.height })
    setSelected(photo)
    setIsLightboxOpen(false)
  }

  useEffect(() => {
    const close = (event) => event.key === 'Escape' && closePhoto()
    window.addEventListener('keydown', close)
    return () => window.removeEventListener('keydown', close)
  }, [selected])

  useEffect(() => () => window.clearTimeout(closingTimer.current), [])

  useLayoutEffect(() => {
    if (!selected || !figureRef.current) return undefined
    if (prefersReducedMotion() || !origin) {
      setIsLightboxOpen(true)
      return undefined
    }
    const target = figureRef.current.getBoundingClientRect()
    const scale = Math.max(.12, Math.min(origin.width / target.width, origin.height / target.height))
    const translateX = origin.left + origin.width / 2 - (target.left + target.width / 2)
    const translateY = origin.top + origin.height / 2 - (target.top + target.height / 2)
    setOriginTransform(`translate3d(${translateX}px, ${translateY}px, 0) scale(${scale})`)
    const frame = window.requestAnimationFrame(() => setIsLightboxOpen(true))
    return () => window.cancelAnimationFrame(frame)
  }, [selected, origin])

  useEffect(() => {
    if (selected && isLightboxOpen) closeButtonRef.current?.focus()
  }, [selected, isLightboxOpen])

  return (
    <section className="gallery section-shell" id="gallery">
      <SectionHeading eyebrow="Coleccionados en el camino" title="Los momentos entre momentos." />
      <div className="gallery-composition">
        {gallery.map((photo, index) => (
          <button className={`gallery-photo photo-${index + 1}`} type="button" key={photo.image} onClick={(event) => openPhoto(photo, event)} aria-label={`Abrir fotografía: ${photo.caption}`}>
            <img src={photo.image} alt={photo.alt} loading="lazy" />
            <span>{photo.caption}</span>
          </button>
        ))}
        <p className="gallery-note">Entre los grandes\nmomentos,\nencontramos una vida.</p>
      </div>
      {selected && (
        <div className={`lightbox ${isLightboxOpen ? 'is-open' : ''}`} role="dialog" aria-modal="true" aria-label={selected.caption} onMouseDown={closePhoto}>
          <button ref={closeButtonRef} className="lightbox-close" type="button" onMouseDown={(event) => event.stopPropagation()} onClick={closePhoto} aria-label="Cerrar fotografía"><X size={21} /></button>
          <figure ref={figureRef} className="lightbox-figure" style={{ '--lightbox-origin': originTransform }} onMouseDown={(event) => event.stopPropagation()}>
            <img src={selected.image} alt={selected.alt} />
            <figcaption>{selected.caption}</figcaption>
          </figure>
        </div>
      )}
    </section>
  )
}
