import FormularioCines from "./FormularioCines";

export default function EditarCines() {
  return (
    <>
      Editar Cines
      <FormularioCines
        modelo={{ nombre: "Sambil", latitud: 22.163773, longitud: -100.977371 }}
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
