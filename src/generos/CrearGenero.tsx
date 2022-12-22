import FormulariosGeneros from "./FormularioGeneros";

export default function CrearGenero() {
  // const history = useHistory();
  return (
    <>
      <h3>Crear Genero</h3>
      <FormulariosGeneros
        modelo={{ nombre: "" }}
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
