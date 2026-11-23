import Header from './components/Header';
import ProgressBar from './components/ProgressBar';
import ArtistInfo from './components/ArtistInfo';
import MusicPlayer from './components/MusicPlayer';
import CheckOptions from './components/CheckOptions';
import SearchBar from './components/SearchBar';
import EmojiCarousel from './components/EmojiCarousel';
import BottomNav from './components/BottomNav';
import { artists, CURRENT_ARTIST } from './data/artists';
import './App.css';



// App reúne los componentes. El artista se elige desde un único archivo de datos.
export default function App() {
  const artist = artists[CURRENT_ARTIST] ?? artists.alejandro;

  return (
    <main className="page">
      <div className="phone">
        <div className="status-bar"><span>17:08</span></div>
        <Header name={artist.name} subtitle={artist.subtitle} />
        <ProgressBar />
        <ArtistInfo image={artist.image} name={artist.name} />
        <MusicPlayer />
        <CheckOptions />
        <SearchBar value={artist.name} />
        <EmojiCarousel />
        <BottomNav />
      </div>
    </main>
  );
}
