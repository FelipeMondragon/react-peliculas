import FormularioCines from "./FormularioCines";

export default function EditarCines() {
  return (
    <>
      Editar Cines
      <FormularioCines
        modelo={{ nombre: "Sambil" }}
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
