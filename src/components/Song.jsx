import { Pause, Play, Volume2 } from 'lucide-react'
import { useRef, useState } from 'react'

export default function Song({ song }) {
  const audioRef = useRef(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [progress, setProgress] = useState(0)
  const [isAvailable, setIsAvailable] = useState(true)
  const toggle = async () => {
    const audio = audioRef.current
    if (!audio) return
    try {
      if (audio.paused) await audio.play()
      else audio.pause()
    } catch { setIsAvailable(false) }
  }
  const updateProgress = () => {
    const { currentTime, duration } = audioRef.current
    setProgress(Number.isFinite(duration) ? (currentTime / duration) * 100 : 0)
  }
  return (
    <section className="song-section" id="song">
      <div className="song-ambient" aria-hidden="true" />
      <div className="song-inner section-shell">
        <p className="eyebrow">Una canción que hicimos nuestra</p>
        <div className="song-layout">
          <div><h2>Nuestra canción</h2><p className="song-intro">Toda historia merece una canción que puedas escuchar años después y que aún te lleve de vuelta.</p></div>
          <div className={`player ${isPlaying ? 'is-playing' : ''}`}>
            <div className="record" aria-hidden="true"><span /></div>
            <div className="track-info"><p>{song.title}</p><span>{song.artist}</span></div>
            <button className="play-button" type="button" onClick={toggle} aria-label={isPlaying ? 'Pausar canción' : 'Reproducir canción'} disabled={!isAvailable}>
              <span className="play-icon play-icon-play" aria-hidden="true"><Play size={19} fill="currentColor" /></span>
              <span className="play-icon play-icon-pause" aria-hidden="true"><Pause size={19} fill="currentColor" /></span>
            </button>
            <div className="player-bottom"><div className="track-line" aria-hidden="true"><span style={{ transform: `scaleX(${progress / 100})` }} /></div><span className="duration">{song.duration}</span><Volume2 size={15} strokeWidth={1.5} /></div>
            {!isAvailable && <p className="audio-help">Añade tu MP3 a <code>public/music</code> para reproducir este recuerdo.</p>}
          </div>
        </div>
      </div>
      <audio ref={audioRef} src={song.file} preload="metadata" onPlay={() => setIsPlaying(true)} onPause={() => setIsPlaying(false)} onEnded={() => setIsPlaying(false)} onTimeUpdate={updateProgress} onError={() => setIsAvailable(false)} />
    </section>
  )
}
