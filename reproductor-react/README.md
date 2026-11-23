# Reproductor musical en React

Práctica de recreación de un mockup de reproductor musical mediante React, Vite y CSS.

## Requisitos
- Node.js y npm instalados.

## Instalación y ejecución
```bash
npm install
npm run dev
```
Abre en el navegador la dirección local que muestra Vite (normalmente http://localhost:5173).

Para comprobar la versión de producción:
```bash
npm run build
npm run preview
```

## Componentes
- `Header`: nombre y subtítulo del artista mediante props.
- `ProgressBar`: barra decorativa superior.
- `ArtistInfo`: imagen y texto descriptivo del artista mediante props.
- `MusicPlayer`: controles visuales de reproducción.
- `CheckOptions`: casillas desmarcada, marcada e indeterminada.
- `SearchBar`: campo de búsqueda.
- `EmojiCarousel`: selector visual con emoji central destacado.
- `BottomNav`: navegación inferior de tres iconos.
- `RA0Button`: botón solicitado en el enunciado; al pulsarlo muestra la penalización de cinco puntos.

## Cómo cambiar de cantante
Abre `src/data/artists.js` y cambia:
```js
export const CURRENT_ARTIST = 'alejandro';
```
por:
```js
export const CURRENT_ARTIST = 'bisbal';
```
Los componentes reciben los datos mediante props, por lo que no es necesario modificarlos.

## Cómo sustituir las imágenes
Copia las imágenes del cantante en `public/images` y actualiza la propiedad `image` del artista correspondiente en `src/data/artists.js`. Las imágenes SVG incluidas son ilustraciones provisionales para que el proyecto funcione desde el primer momento; puedes sustituirlas por fotografías propias o con licencia adecuada.

## Estructura
```text
src/
  components/
  data/artists.js
  App.jsx
  App.css
  index.css
  main.jsx
public/
  images/
```

## Nota
Los controles del reproductor y la barra superior son visuales, ya que el enunciado no exige implementar reproducción musical real.
