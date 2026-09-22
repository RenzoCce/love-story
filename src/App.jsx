import { couple } from './data/couple'
import Hero from './components/Hero'
import Story from './components/Story'
import Timeline from './components/Timeline'
import Gallery from './components/Gallery'
import Song from './components/Song'
import Keepsakes from './components/Keepsakes'
import Letter from './components/Letter'
import Ending from './components/Ending'

export default function App() {
  return <main id="top"><Hero couple={couple} /><Story story={couple.story} /><Timeline timeline={couple.timeline} /><Gallery gallery={couple.gallery} /><Song song={couple.song} /><Keepsakes keepsakes={couple.keepsakes} startDate={couple.startDate} /><Letter letter={couple.letter} /><Ending couple={couple} /></main>
}
