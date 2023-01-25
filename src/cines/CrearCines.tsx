import FormularioCines from "./FormularioCines";
import { cineCreacionDTO } from "./cines.model";
import axios from "axios";
import { useState } from "react";
import MostrarErrores from "../utils/MostrarErrores";

export default function CrearCines() {
  const [errores, setErrores] = useState<string[]>([]);

  async function crear(cine: cineCreacionDTO) {
    try {
      await axios.post("https://localhost:7088/api/cines", cine);
      // history.push("/generos");
    } catch (error: any) {
      console.error(error);
      setErrores(error.response.data);
    }
  }

  return (
    <>
      Crear Cines
      <MostrarErrores errores={errores} />
      <FormularioCines
        modelo={{ nombre: "" }}
        onSubmit={async (valores) => await crear(valores)}
      />
    </>
  );
}
