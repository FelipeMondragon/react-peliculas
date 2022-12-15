import { pelicula } from "./peliculas.model";

export default function PeliculaIndividual(props: peliculaIndividualProps) {
  return (
    <div>
      <a href="...">
        <img src={props.pelicula.poster} alt="Poster" />
      </a>
    </div>
  );
}

interface peliculaIndividualProps {
  pelicula: pelicula;
}
