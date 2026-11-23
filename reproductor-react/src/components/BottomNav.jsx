// Navegación inferior con tres iconos visibles.
export default function BottomNav() {
  return (
    <nav className="bottom-nav" aria-label="Navegación principal">
      
      <span aria-label="Atrás">
        <img className="icon-backward" src="/images/backward.png" alt="Atrás" />
      </span>

      <span aria-label="Inicio">
        <img className="icon-home" src="/images/home.png" alt="Inicio" />
      </span>

      <span aria-label="Menú">
        <img className="icon-multitask" src="/images/multitask.png" alt="Menú" />
      </span>
    </nav>
  );
}