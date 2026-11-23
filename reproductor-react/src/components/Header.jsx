// Muestra el nombre del artista y el subtítulo. Ambos llegan mediante props.
export default function Header({ name = 'Alejandro Sanz', subtitle = '- Más -' }) { //Funcion por defecto.
  return (
    <header className="artist-header">
      <h1>{name}</h1>
      <p>{subtitle}</p>
    </header>
  );
}
