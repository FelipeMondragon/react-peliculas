import { useHistory, useParams } from "react-router-dom";
import FormulariosGeneros from "./FormularioGeneros";
import { useEffect } from "react";
import axios, { AxiosResponse } from "axios";
import { generoDTO, generoCreacionDTO } from "./genero.model";
import { useState } from "react";
import Cargando from "../utils/Cargando";
import MostrarErrores from "../utils/MostrarErrores";

export default function EditarGenero() {
  const { id }: any = useParams();
  const history = useHistory();
  const [genero, setGenero] = useState<generoDTO>();
  const [errores, setErrores] = useState<string[]>([]);

  useEffect(() => {
    axios
      .get(`https://localhost:7088/api/generos/${id}`)
      .then((respuesta: AxiosResponse<generoDTO>) => {
        setGenero(respuesta.data);
      });
  }, [id]);

  async function editar(generoEditar: generoCreacionDTO) {
    try {
      await axios.put(`https://localhost:7088/api/generos/${id}`, generoEditar);
      history.push("/generos");
    } catch (error: any) {
      setErrores(error.response.data);
    }
  }

  return (
    <>
      <h3>Editar Genero</h3>
      <MostrarErrores errores={errores} />
      {genero ? (
        <FormulariosGeneros
          modelo={genero}
          onSubmit={async (valores) => {
            await editar(valores);
          }}
        />
      ) : (
        <Cargando />
      )}
    </>
  );
}
