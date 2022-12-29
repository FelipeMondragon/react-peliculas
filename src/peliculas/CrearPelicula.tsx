import FormularioPeliculas from "./FormularioPeliculas";
import { generoDTO } from "../generos/genero.model";
export default function CrearPeliculas() {
  const generos: generoDTO[] = [
    { id: 1, nombre: "Acción" },
    { id: 2, nombre: "Drama" },
    { id: 3, nombre: "Terror" },
    { id: 4, nombre: "Comedia" },
  ];

  return (
    <>
      <h3>Crear Película</h3>
      <FormularioPeliculas
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
