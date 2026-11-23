
// Controles visuales del reproductor. Son decorativos.
export default function MusicPlayer() {
  return (
    <section className="player" aria-label="Controles del reproductor">

      <div className="player-main">

        <button className="square-control" aria-label="Pausar">
          <img src="/images/stop.png" alt="Pausar" />
        </button>

        {/* Barra de reproducción */}
        <div className="track">
          <span className="track-fill" />
          <span className="track-circle" />
        </div>

        <button className="square-control volume" aria-label="Volumen">
          <img src="/images/volume.png" alt="Volumen" />
        </button>

        <button className="square-control fullscreen" aria-label="Pantalla completa">
          <img src="/images/fullscreen.png" alt="Pantalla completa" />
        </button>

      </div>

      <div className="player-secondary">

        <div className="track">
          <span className="track-fill" />
          <span className="track-circle" />
        </div>

        <button aria-label="Anterior">
          <img src="/images/rewind.png" alt="Anterior" />
        </button>

        <button className="play-button" aria-label="Reproducir">
          <img src="/images/play.png" alt="Reproducir" />
        </button>

        <button aria-label="Siguiente">
          <img src="/images/fast_forward.png" alt="Siguiente" />
        </button>

        <span className="speaker">
          <img src="/images/volume.png" alt="Volumen" />
        </span>

        {/* Barra de volumen */}
        <div className="volume-slider">
          <span className="volume-fill" />
          <span className="volume-circle" />
        </div>

      </div>

    </section>
  );
}
