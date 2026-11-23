// Campo de búsqueda visual con el nombre del artista como valor inicial.
export default function SearchBar({ value = 'Alejandro Sanz' }) {
  return (
    <label className="search-bar">
      <span aria-hidden="true">⌕</span>
      <input type="text" defaultValue={value} aria-label="Buscar artista" />
    </label>
  );
}
