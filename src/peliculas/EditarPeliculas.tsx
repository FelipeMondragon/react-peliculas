import { cineDTO } from "../cines/cines.model";
import { generoDTO } from "../generos/genero.model";
import FormularioPeliculas from "./FormularioPeliculas";
import { actorPeliculaDTO } from "../actores/actores.model";

export default function EditarPeliculas() {
  const generosNoSeleccionados: generoDTO[] = [
    { id: 1, nombre: "Acción" },
    { id: 2, nombre: "Drama" },
  ];

  const generosSeleccionados: generoDTO[] = [
    { id: 3, nombre: "Terror" },
    { id: 4, nombre: "Comedia" },
  ];

  const cinesNoSeleccionados: cineDTO[] = [
    { id: 1, nombre: "El Dorado" },
    { id: 3, nombre: "Macro Plaza" },
    { id: 4, nombre: "The Park" },
  ];

  const cinesSeleccionados: cineDTO[] = [{ id: 2, nombre: "Tangamanga" }];
  const actoresSeleccionados: actorPeliculaDTO[] = [
    {
      id: 1,
      nombre: "Ana de Armas",
      personaje: "La IA sexy",
      foto: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/gettyimages-1139359898.jpg",
    },
  ];

  return (
    <>
      <h3>Editar Película</h3>
      <FormularioPeliculas
        generosNoSeleccionados={generosNoSeleccionados}
        generosSeleccionados={generosSeleccionados}
        cinesNoSeleccionados={cinesNoSeleccionados}
        cinesSeleccionados={cinesSeleccionados}
        actoresSeleccionados={actoresSeleccionados}
        modelo={{
          titulo: "Spider-Man",
          enCines: true,
          trailer: "url",
          fechaLanzamiento: new Date("2019-01-01T00:00:00"),
        }}
        onSubmit={(valores) =>
          console.log(
            "🚀 ~ file: CrearPelicula.tsx:7 ~ CrearPeliculas ~ valores",
            valores
          )
        }
      />
    </>
  );
}
