
import stopIcon from '@/assets/stop.png';
import volumeIcon from '@/assets/volume.png';
import fullscreenIcon from '@/assets/fullscreen.png';
import rewindIcon from '@/assets/rewind.png';
import playIcon from '@/assets/play.png';
import fastForwardIcon from '@/assets/fast_forward.png';

// Controles visuales del reproductor. Son decorativos.
export default function MusicPlayer() {
  return (
    <section className="player" aria-label="Controles del reproductor">

      <div className="player-main">

        <button className="square-control" aria-label="Pausar">
          <img src={stopIcon} alt="Pausar" />
        </button>

        {/* Barra de reproducción */}
        <div className="track">
          <span className="track-fill" />
          <span className="track-circle" />
        </div>

        <button className="square-control volume" aria-label="Volumen">
          <img src={volumeIcon} alt="Volumen" />
        </button>

        <button className="square-control fullscreen" aria-label="Pantalla completa">
          <img src={fullscreenIcon} alt="Pantalla completa" />
        </button>

      </div>

      <div className="player-secondary">

        {/* Barra de volumen */}
        <div className="volume-slider">
          <span className="volume-fill" />
          <span className="volume-circle" />
        </div>

        <button aria-label="Anterior">
          <img src={rewindIcon} alt="Anterior" />
        </button>

        <button className="play-button" aria-label="Reproducir">
          <img src={playIcon} alt="Reproducir" />
        </button>

        <button aria-label="Siguiente">
          <img src={fastForwardIcon} alt="Siguiente" />
        </button>

        <span className="speaker">
          <img src={volumeIcon} alt="Volumen" />
        </span>

      </div>

    </section>
  );
}
