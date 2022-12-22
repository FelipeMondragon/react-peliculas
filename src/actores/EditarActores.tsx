import FormularioActores from "./FormularioActores";

export default function EditarActores() {
  return (
    <>
      <h3>Editar Actores</h3>
      <FormularioActores
        modelo={{
          nombre: "Tom Cruise",
          fechaNacimiento: new Date("1996-06-01T:00:00:00"),
        }}
        onSubmit={(valores) =>
          console.log(
            "🚀 ~ file: CrearActores.tsx:8 ~ CrearActores ~ valores",
            valores
          )
        }
      />
    </>
  );
}
