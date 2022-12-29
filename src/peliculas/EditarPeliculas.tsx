import { generoDTO } from "../generos/genero.model";
import FormularioPeliculas from "./FormularioPeliculas";

export default function EditarPeliculas() {
  const generosNoSeleccionados: generoDTO[] = [
    { id: 1, nombre: "Acción" },
    { id: 2, nombre: "Drama" },
  ];

  const generosSeleccionados: generoDTO[] = [
    { id: 3, nombre: "Terror" },
    { id: 4, nombre: "Comedia" },
  ];
  return (
    <>
      <h3>Editar Película</h3>
      <FormularioPeliculas
        generosNoSeleccionados={generosNoSeleccionados}
        generosSeleccionados={generosSeleccionados}
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
