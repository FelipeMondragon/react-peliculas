import FormularioPeliculas from "./FormularioPeliculas";

export default function EditarPeliculas() {
  return (
    <>
      <h3>Editar Película</h3>
      <FormularioPeliculas
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
