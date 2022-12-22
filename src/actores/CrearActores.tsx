import FormularioActores from "./FormularioActores";

export default function CrearActores() {
  return (
    <>
      <h3>Crear Actores</h3>
      <FormularioActores
        modelo={{ nombre: "", fechaNacimiento: undefined }}
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
