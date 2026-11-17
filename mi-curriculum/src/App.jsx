import './App.css';

// Datos de las habilidades que queremos mostrar.
const habilidades = [
  'Java',
  'JavaScript',
  'SQL',
  'HTML',
  'CSS'
];

// Datos de los proyectos académicos.
const experiencias = [
  {
    puesto: 'Desarrollar un juego en Java',
    empresa: 'Proyecto académico - DAM',
    periodo: 'Proyecto de clase',
    descripcion:
      'Desarrollo de un juego de aventuras en Java ejecutado desde la consola de Eclipse. Incluye puzzles, exploración y mecánicas RPG. Siendo mi mayor orgullo.'
  },
  {
    puesto: 'Desarrollo de aplicaciones y ejercicios',
    empresa: 'Formación académica - DAM',
    periodo: 'Durante el ciclo formativo',
    descripcion:
      'Realización de prácticas de programación y pequeños proyectos de clase, trabajando la lógica, la organización del código y la resolución de problemas.'
  }
];

// Datos de los estudios.
const estudios = [
  {
    titulo: 'Técnico Superior en Desarrollo de Aplicaciones Multiplataforma (DAM)',
    centro: 'CPIFP Los Enlaces',
    descripcion: 'Estudios de Formación Profesional de Grado Superior.'
  },
  {
    titulo: 'Certificado en los Fundamentos de Java',
    centro: 'CPIFP Los Enlaces',
    descripcion: 'Adquisición de conocimientos teóricos y prácticos en la programación orientada a objetos con Java.'
  },
  {
    titulo: 'Certificado en la Programación de Bases de Datos mediante SQL',
    centro: 'CPIFP Los Enlaces',
    descripcion: 'Diseño, gestión y consultas de bases de datos relacionales.'
  },
  {
    titulo: 'Certificado de nivel básico de Prevención de Riesgos Laborales',
    centro: 'CPIFP Los Enlaces',
    descripcion: 'Formación básica orientada a la seguridad y salud en el entorno laboral.'
  },
  {
    titulo: 'Bachillerato',
    centro: 'IES Tiempos Modernos',
    descripcion: 'Estudios de Bachillerato.'
  },
  {
    titulo: 'Educación Secundaria Obligatoria (ESO)',
    centro: 'IES Tiempos Modernos',
    descripcion: 'Graduado en Educación Secundaria Obligatoria.' 
  }
];

// Datos de idiomas.
const idiomas = [
  { idioma: 'Español', nivel: 'Nativo' },
  { idioma: 'Inglés', nivel: 'Medio' }
];

function App() {
  return (
    <main className="contenedor-principal">

      {/* CABECERA: fotografía, nombre, título y contacto */}
      <header className="header">
        <img
          src="/foto-perfil.jpg"
          alt="Fotografía de perfil"
          className="foto-perfil"
        />

        <p className="etiqueta-header">
          ESTUDIANTE DE DAM
        </p>

        <h1>Jorge Ucendo Thomas</h1>

        <h2>Desarrollador de aplicaciones en formación</h2>

        <div className="datos-contacto">
          <span>✉️ jorgeucetho@gmail.com</span>
          <span>📞 +34 686 07 75 90</span>
          <span>📍 Zaragoza</span>
          <span>💻 GitHub: Sionk-C128</span>
        </div>
      </header>

      {/* CONTENIDO PRINCIPAL EN DOS COLUMNAS */}
      <div className="contenido">

        {/* COLUMNA IZQUIERDA (1/4): Sobre mí, Idiomas y Habilidades */}
        <div className="columna-izquierda">

          <section className="seccion">
            <h2 className="titulo-seccion">Sobre mí</h2>

            <p className="texto-sobre-mi">
              Estudiante en Desarrollo de Aplicaciones Multiplataforma
              con interés en la programación y el desarrollo de videojuegos.
              Me interesa cómo se hacen los videojuegos y el código en su interior,
              fascinado por cómo funcionan sus mecánicas y sistemas lógicos desde los 15 años.
              Mi formación en el ámbito informático me ha brindado una sólida base en el diseño y programación.
              Aspiro a poder desarrollar mis propios proyectos
              o formar parte de grandes referentes de la industria como Nintendo o Steam.
            </p>
          </section>

          <section className="seccion">
            <h2 className="titulo-seccion">Idiomas</h2>

            <div className="lista-idiomas">
              {idiomas.map((item) => (
                <div className="tarjeta-idioma" key={item.idioma}>
                  <span className="nombre-idioma">{item.idioma}</span>
                  <span className="nivel-idioma">{item.nivel}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="seccion">
            <h2 className="titulo-seccion">Habilidades</h2>

            <div className="lista-habilidades">
              {habilidades.map((habilidad) => (
                <div className="habilidad" key={habilidad}>
                  <span className="punto-habilidad"></span>
                  {habilidad}
                </div>
              ))}
            </div>
          </section>

        </div>

        {/* COLUMNA DERECHA (3/4): Experiencia/Proyectos y Educación */}
        <div className="columna-derecha">

          <section className="seccion">
            <h2 className="titulo-seccion">Experiencia y proyectos</h2>

            {experiencias.map((experiencia) => (
              <article
                className="item-experiencia"
                key={experiencia.puesto}
              >
                <h3>{experiencia.puesto}</h3>

                <p className="empresa">
                  {experiencia.empresa}
                </p>

                <p className="periodo">
                  {experiencia.periodo}
                </p>

                <p className="descripcion-item">
                  {experiencia.descripcion}
                </p>
              </article>
            ))}
          </section>

          <section className="seccion">
            <h2 className="titulo-seccion">Educación</h2>

            {estudios.map((estudio) => (
              <article className="item-experiencia" key={estudio.titulo}>
                <h3>{estudio.titulo}</h3>

                <p className="centro">
                  {estudio.centro}
                </p>

                <p className="descripcion-item">
                  {estudio.descripcion}
                </p>
              </article>
            ))}
          </section>

        </div>

      </div>

      {/* PIE DE PÁGINA */}
      <footer className="footer">
        <p>Diseñado y desarrollado con React</p>
        <p>© 2026 - Mi currículum personal</p>
      </footer>

    </main>
  );
}

export default App;