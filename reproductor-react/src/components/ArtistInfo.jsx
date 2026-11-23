 // Imagen y líneas de texto simuladas.
export default function ArtistInfo({
  image,
  name = 'Alejandro Sanz'
}) {
  return (
    <section className="artist-info" aria-label="Información del artista">
      <img
        className="artist-photo"
        src={image}
        alt={`Retrato de ${name}`}
        onError={(e) => {
          console.error('No se ha podido cargar la imagen:', image);
          e.currentTarget.style.display = 'none';
        }}
      />

      <div className="fake-copy" aria-hidden="true">
        <span className="line line-long" />
        <span className="line line-short" />
        <span className="line line-long" />
        <span className="line line-medium" />
      </div>
    </section>
  );
}
