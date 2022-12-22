// import { useParams } from "react-router-dom";
import FormulariosGeneros from "./FormularioGeneros";

export default function EditarGenero() {
  // const { id }: any = useParams();

  return (
    <>
      <h3>Editar Genero</h3>
      <FormulariosGeneros
        modelo={{ nombre: "Porno" }}
        onSubmit={async (valores) => {
          console.log(
            "🚀 ~ file: CrearGenero.tsx:11 ~ onSubmit={ ~ valores",
            valores
          );
          await new Promise((r) => setTimeout(r, 3000));
          // console.log(valores);
        }}
      />
    </>
  );
}
