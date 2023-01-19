import FormularioActores from "./FormularioActores";
import { actorCreacionDTO } from "./actores.model";
import axios from "axios";
import { useState } from "react";
import MostrarErrores from "../utils/MostrarErrores";
import { convertirActorAFormData } from "../utils/formDataUtils";

export default function CrearActores() {
  const [errores, setErrores] = useState<string[]>([]);
  async function crear(actor: actorCreacionDTO) {
    try {
      const formData = convertirActorAFormData(actor);
      await axios({
        method: "POST",
        url: "https://localhost:7088/api/actores",
        data: formData,
        headers: { "Content-Type": "multipart/form-data" },
      });
    } catch (error: any) {
      console.error(error);
      setErrores(error.response.data);
    }
  }

  return (
    <>
      <h3>Crear Actores</h3>
      <MostrarErrores errores={errores} />
      <FormularioActores
        modelo={{ nombre: "", fechaNacimiento: undefined }}
        onSubmit={async (valores) => await crear(valores)}
      />
    </>
  );
}
