import React from "react";
import "./App.css";
import PeliculaIndividual from "./peliculas/PeliculaIndividual";
import { pelicula } from "./peliculas/peliculas.model";

function App() {
  const peliculaPrueba: pelicula = {
    id: 1,
    titulo: "Spider-Man: Far from Home",
    poster:
      "https://blog.es.playstation.com/tachyon/sites/14/2022/06/adf0c6e3da060a9f9581c12eff047a48668fe616.jpg",
  };
  return (
    <>
      <PeliculaIndividual pelicula={peliculaPrueba} />
    </>
  );
}

export default App;
