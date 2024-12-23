import { Buscador } from "./components/Buscador";
import { Crear } from "./components/Crear";
import { Listado } from "./components/Listado";

function App() {
  return (
    <div className="layout">
      {/*Cabecera*/}
      <header className="header">
        <div className="logo">
          <div className="play">

          </div>
        </div>
        <h1>Cartelera</h1>
      </header>
      {/*Barra de navegación*/}
      <nav className="nav">
        <ul>
          <li><a href="/#">Inicio</a></li>
          <li><a href="/#">Peliculas</a></li>
          <li><a href="/#">Blog</a></li>
          <li><a href="/#">Contacto</a></li>
        </ul>
      </nav>

      {/*Contenido principal*/}
      <section className="content">
       {/*Aquí van el listado de las peliculas*/}
       <Listado />
      </section>
      {/*Barra lateral*/}
      <aside className="lateral">
        <Buscador />

        <Crear />
       
      </aside>
      {/*Pie de página*/}
      <footer className="footer">
        &copy; Cartelera Talavera de la Reina
      </footer>
    </div>
  );
}

export default App;
