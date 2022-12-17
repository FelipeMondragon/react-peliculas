import React, { useEffect, useState } from "react";
import "./App.css";
import ListadoPeliculas from "./peliculas/ListadoPeliculas";
// import PeliculaIndividual from "./peliculas/PeliculaIndividual";
import { landingPageDTO } from "./peliculas/peliculas.model";
import Button from "./utils/Button";

function App() {
  const [peliculas, setPeliculas] = useState<landingPageDTO>({});

  useEffect(() => {
    const timerId = setTimeout(() => {
      setPeliculas({
        enCartelera: [
          {
            id: 1,
            titulo: "Spider-Man: Far from Home",
            poster:
              "https://blog.es.playstation.com/tachyon/sites/14/2022/06/adf0c6e3da060a9f9581c12eff047a48668fe616.jpg",
          },
          {
            id: 2,
            titulo: "Moana",
            poster:
              "https://blog.es.playstation.com/tachyon/sites/14/2022/06/adf0c6e3da060a9f9581c12eff047a48668fe616.jpg",
          },
        ],
        proximosEstrenos: [
          {
            id: 3,
            titulo: "Soul",
            poster:
              "https://blog.es.playstation.com/tachyon/sites/14/2022/06/adf0c6e3da060a9f9581c12eff047a48668fe616.jpg",
          },
        ],
      });
    }, 500);

    return () => clearTimeout(timerId);
  });

  return (
    <>
      <div className="container">
        <Button>Mi componente botón</Button>

        <h3>En Cartelera</h3>
        <ListadoPeliculas peliculas={peliculas.enCartelera} />

        <h3>Próximos estrenos</h3>
        <ListadoPeliculas peliculas={peliculas.proximosEstrenos} />
      </div>
    </>
  );
}

export default App;
