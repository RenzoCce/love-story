// This is the only file you normally need to edit for a new couple.
// Put replacement photos in public/images and music in public/music.
export const couple = {
  person1: 'Alex',
  person2: 'Sofia',
  startDate: '2022-02-14',
  hero: {
    title: 'Alex & Sofia',
    subtitle: 'Algunas historias se escriben. La nuestra se vivió.',
    image: '/images/hero-photo.png',
    alt: 'Alex y Sofia juntos al atardecer',
  },
  story: {
    eyebrow: 'Un poco de historia',
    title: 'Todo empezó con una conversación que ninguno quería terminar.',
    text: 'No hubo un gran plan, solo una mesa para dos y la extraña certeza de que algo había cambiado en silencio. Lo mejor es que sigue cambiando: en lugares, canciones, martes cualquiera y una vida que se siente más como hogar con cada año.',
    signature: 'Siempre nosotros.',
  },
  timeline: [
    { date: '14 FEB 2022', title: 'El día que nos conocimos', description: 'Un café que se convirtió en cena y un primer hola que todavía se siente como el comienzo de todo.', location: 'Miraflores, Lima', image: '/images/moment-01.svg', alt: 'Una mesa para dos en un café iluminado por el sol', layout: 'wide' },
    { date: '28 MAY 2022', title: 'Nuestro primer viaje', description: 'Nos perdimos un poco, encontramos el mar y aprendimos que las mejores rutas rara vez son las que planeamos.', location: 'Paracas, Perú', image: '/images/moment-02.svg', alt: 'Dos personas caminando junto al mar', layout: 'split' },
    { date: '18 NOV 2022', title: 'Nuestro primer concierto', description: 'Un par de tapones compartidos. De pronto, cada canción tenía un recuerdo nuestro.', location: 'Barranco, Lima', image: '/images/moment-03.svg', alt: 'Luces cálidas en un concierto en vivo', layout: 'portrait' },
    { date: '14 FEB 2023', title: 'Un año juntos', description: 'Un año de bromas internas, caminatas largas y de elegirnos en todas las formas pequeñas.', location: 'Nuestra pequeña mesa', image: '/images/moment-04.svg', alt: 'Una carta escrita a mano junto a flores', layout: 'wide reverse' },
    { date: '09 AGO 2023', title: 'Nuestro verano favorito', description: 'Sal en el cabello, arena en el auto y ningún otro lugar donde estar.', location: 'Punta Hermosa', image: '/images/moment-05.svg', alt: 'Una costa dorada en verano', layout: 'split reverse' },
    { date: '31 DIC 2024', title: 'Otro año, juntos', description: 'Los fuegos artificiales fueron preciosos. Sostener tu mano a medianoche fue lo que quise guardar.', location: 'Lima, Perú', image: '/images/moment-06.svg', alt: 'Luces de la ciudad por la noche', layout: 'portrait reverse' },
  ],
  gallery: [
    { image: '/images/gallery-01.svg', alt: 'Un picnic con flores silvestres', caption: 'Domingos lentos' },
    { image: '/images/gallery-02.svg', alt: 'Una ventana en una tarde cálida', caption: 'Una luz que amamos' },
    { image: '/images/gallery-03.svg', alt: 'Una cámara antigua sobre una mesa', caption: 'Prueba de días comunes' },
    { image: '/images/gallery-photo.png', alt: 'Alex y Sofia caminando por la costa al atardecer', caption: 'Sin un destino en particular' },
    { image: '/images/gallery-05.svg', alt: 'Cartas atadas con una cinta', caption: 'Cosas que guardamos' },
    { image: '/images/gallery-06.svg', alt: 'Dos bebidas en un bar', caption: 'Por nosotros' },
  ],
  song: {
    title: 'Bloom',
    artist: 'The Paper Kites',
    file: '/music/our-song.mp3',
    duration: '03:30',
  },
  keepsakes: [
    { label: 'Primer viaje', value: 'Lima, 2022' },
    { label: 'Lugar favorito', value: 'Barranco de noche' },
    { label: 'Nuestra canción', value: 'Bloom' },
  ],
  letter: {
    date: 'Para Sofia, en un día cualquiera',
    opening: 'Mi amor,',
    body: 'Espero que nunca dejemos de notar las cosas pequeñas: la forma en que me buscas en una habitación llena, el café que preparas justo como me gusta, el silencio que queda después de reírnos demasiado. No necesito una vida perfecta. Solo una en la que pueda seguir volviendo a ti.',
    closing: 'Con todo mi amor,\nAlex',
  },
  ending: {
    image: '/images/hero-photo.png',
    alt: 'Alex y Sofia mirando hacia el mar',
    line: 'Y esto recién comienza.',
    years: '2022 — Para siempre',
  },
}
