import FormulariosGeneros from "./FormularioGeneros";
import { generoCreacionDTO } from "./genero.model";
import axios from "axios";
import MostrarErrores from "../utils/MostrarErrores";
import { useState } from "react";

export default function CrearGenero() {
  // const history = useHistory();
  const [errores, setErrores] = useState<string[]>([]);

  async function crear(genero: generoCreacionDTO) {
    try {
      await axios.post("https://localhost:7088/api/generos", genero);
      // history.push("/generos");
    } catch (error: any) {
      console.error(error);
      setErrores(error.response.data);
    }
  }

  return (
    <>
      <h3>Crear Genero</h3>
      <MostrarErrores errores={errores} />
      <FormulariosGeneros
        modelo={{ nombre: "" }}
        onSubmit={async (valores) => {
          await crear(valores);
        }}
      />
    </>
  );
}
