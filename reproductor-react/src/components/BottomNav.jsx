// Navegación inferior con tres iconos visibles.

import backwardIcon from '@/assets/backward.png';
import homeIcon from '@/assets/home.png';
import multitaskIcon from '@/assets/multitask.png';

// Navegación inferior con tres iconos visibles.
export default function BottomNav() {
  return (
    <nav className="bottom-nav" aria-label="Navegación principal">

      <span aria-label="Atrás">
        <img className="icon-backward" src={backwardIcon} alt="Atrás" />
      </span>

      <span aria-label="Inicio">
        <img className="icon-home" src={homeIcon} alt="Inicio" />
      </span>

      <span aria-label="Menú">
        <img className="icon-multitask" src={multitaskIcon} alt="Menú" />
      </span>

    </nav>
  );
}
