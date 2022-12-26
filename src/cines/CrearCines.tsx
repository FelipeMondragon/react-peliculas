import FormularioCines from "./FormularioCines";

export default function CrearCines() {
  return (
    <>
      Crear Cines
      <FormularioCines
        modelo={{ nombre: "" }}
        onSubmit={(valores) =>
          console.log(
            "🚀 ~ file: CrearCines.tsx:8 ~ CrearCines ~ valores",
            valores
          )
        }
      />
    </>
  );
}
