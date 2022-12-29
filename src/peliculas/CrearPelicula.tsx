import FormularioPeliculas from "./FormularioPeliculas";
import { generoDTO } from "../generos/genero.model";
import { cineDTO } from "../cines/cines.model";
export default function CrearPeliculas() {
  const generos: generoDTO[] = [
    { id: 1, nombre: "Acción" },
    { id: 2, nombre: "Drama" },
    { id: 3, nombre: "Terror" },
    { id: 4, nombre: "Comedia" },
  ];

  const cines: cineDTO[] = [
    { id: 1, nombre: "El Dorado" },
    { id: 2, nombre: "Tangamanga" },
    { id: 3, nombre: "Macro Plaza" },
    { id: 4, nombre: "The Park" },
  ];

  return (
    <>
      <h3>Crear Película</h3>
      <FormularioPeliculas
        cinesNoSeleccionados={cines}
        cinesSeleccionados={[]}
        generosNoSeleccionados={generos}
        generosSeleccionados={[]}
        modelo={{ titulo: "", enCines: false, trailer: "" }}
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
