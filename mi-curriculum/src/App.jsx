
import './App.css';

function App() {
  return (
    <div className="contenedor-principal">

      {/* Cabecera */}
      <div className="header">
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
      </div>

      {/* Sobre Mí */}
      <div className="contenido">

        <div className="columna-izquierda">

          <div className="seccion">
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
          </div>

          {/* Idiomas */}
          <div className="seccion">
            <h2 className="titulo-seccion">Idiomas</h2>

            <div className="lista-idiomas">

              <div className="tarjeta-idioma">
                <span className="nombre-idioma">Español</span>
                <span className="nivel-idioma">Nativo</span>
              </div>

              <div className="tarjeta-idioma">
                <span className="nombre-idioma">Inglés</span>
                <span className="nivel-idioma">Medio</span>
              </div>

            </div>
          </div>

          {/* Habilidades */}
          <div className="seccion">
            <h2 className="titulo-seccion">Habilidades</h2>

            <div className="lista-habilidades">

              <div className="habilidad">
                <span className="punto-habilidad"></span>
                Java
              </div>

              <div className="habilidad">
                <span className="punto-habilidad"></span>
                JavaScript
              </div>

              <div className="habilidad">
                <span className="punto-habilidad"></span>
                SQL
              </div>

              <div className="habilidad">
                <span className="punto-habilidad"></span>
                HTML
              </div>

              <div className="habilidad">
                <span className="punto-habilidad"></span>
                CSS
              </div>

            </div>
          </div>

        </div>

        {/* Experiencia y Educación */}
        <div className="columna-derecha">

          {/* Experiencia y Proyectos */}
          <div className="seccion">
            <h2 className="titulo-seccion">Experiencia y proyectos</h2>

            <div className="item-experiencia">
              <h3>Desarrollar un juego en Java</h3>

              <p className="empresa">
                Proyecto académico - DAM
              </p>

              <p className="periodo">
                Proyecto de clase
              </p>

              <p className="descripcion-item">
                Desarrollo de un juego de aventuras en Java ejecutado
                desde la consola de Eclipse. Incluye puzzles, exploración
                y mecánicas RPG. Siendo mi mayor orgullo.
              </p>
            </div>

            <div className="item-experiencia">
              <h3>Desarrollo de aplicaciones y ejercicios</h3>

              <p className="empresa">
                Formación académica - DAM
              </p>

              <p className="periodo">
                Durante el ciclo formativo
              </p>

              <p className="descripcion-item">
                Realización de prácticas de programación y pequeños
                proyectos de clase, trabajando la lógica, la organización
                del código y la resolución de problemas.
              </p>
            </div>

          </div>

          {/* Educación */}
          <div className="seccion">
            <h2 className="titulo-seccion">Educación</h2>

            <div className="item-experiencia">
              <h3>
                Técnico Superior en Desarrollo de Aplicaciones Multiplataforma (DAM)
              </h3>

              <p className="centro">
                CPIFP Los Enlaces
              </p>

              <p className="descripcion-item">
                Estudios de Formación Profesional de Grado Superior.
              </p>
            </div>

            <div className="item-experiencia">
              <h3>Certificado en los Fundamentos de Java</h3>

              <p className="centro">
                CPIFP Los Enlaces
              </p>

              <p className="descripcion-item">
                Adquisición de conocimientos teóricos y prácticos
                en la programación orientada a objetos con Java.
              </p>
            </div>

            <div className="item-experiencia">
              <h3>Certificado en la Programación de Bases de Datos mediante SQL</h3>

              <p className="centro">
                CPIFP Los Enlaces
              </p>

              <p className="descripcion-item">
                Diseño, gestión y consultas de bases de datos relacionales.
              </p>
            </div>

            <div className="item-experiencia">
              <h3>Certificado de nivel básico de Prevención de Riesgos Laborales</h3>

              <p className="centro">
                CPIFP Los Enlaces
              </p>

              <p className="descripcion-item">
                Formación básica orientada a la seguridad y salud
                en el entorno laboral.
              </p>
            </div>

            <div className="item-experiencia">
              <h3>Bachillerato</h3>

              <p className="centro">
                IES Tiempos Modernos
              </p>

              <p className="descripcion-item">
                Estudios de Bachillerato.
              </p>
            </div>

            <div className="item-experiencia">
              <h3>Educación Secundaria Obligatoria (ESO)</h3>

              <p className="centro">
                IES Tiempos Modernos
              </p>

              <p className="descripcion-item">
                Graduado en Educación Secundaria Obligatoria.
              </p>
            </div>

          </div>

        </div>

      </div>

      {/* Pie de página */}
      <div className="footer">
        <p>Diseñado y desarrollado con React</p>
        <p>© 2026 - Mi currículum personal</p>
      </div>

    </div>
  );
}

export default App;
