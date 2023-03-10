export default function Menu() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          React Películas
        </a>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" href="/generos">
                Géneros
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/peliculas/filtrar">
                Películas Filtro
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/actores">
                Actores
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/cines">
                Cines
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/peliculas/crear">
                Crear Películas
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
