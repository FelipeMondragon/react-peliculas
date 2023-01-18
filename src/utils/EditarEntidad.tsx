import { useParams } from "react-router-dom";
import { useEffect, ReactElement } from "react";
import axios, { AxiosResponse } from "axios";
import { useState } from "react";
import MostrarErrores from "../utils/MostrarErrores";
import Cargando from "../utils/Cargando";

export default function EditarEntidad<TCreacion, TLectura>(
  props: editarEntidadProps<TCreacion, TLectura>
) {
  const { id }: any = useParams();
  const [entidad, setEntidad] = useState<TCreacion>();
  const [errores, setErrores] = useState<string[]>([]);

  useEffect(() => {
    axios
      .get(`${props.url}/${id}`)
      .then((respuesta: AxiosResponse<TLectura>) => {
        setEntidad(props.transformar(respuesta.data));
      });
  }, [id, props, props.url]);

  async function editar(entidadEditar: TCreacion) {
    try {
      await axios.put(`${props.url}/${id}`, entidadEditar);
    } catch (error: any) {
      setErrores(error.response.data);
    }
  }

  return (
    <>
      <h3>Editar {props.nombreEntidad} </h3>
      <MostrarErrores errores={errores} />
      {entidad ? props.children(entidad, editar) : <Cargando />}
    </>
  );
}

interface editarEntidadProps<TCreacion, TLectura> {
  url: string;
  nombreEntidad: string;
  children(
    modelo: TCreacion,
    editar: (entidad: TCreacion) => void
  ): ReactElement;
  transformar(entidad: TLectura): TCreacion;
}

EditarEntidad.defaultProps = {
  transformar: (entidad: any) => entidad,
};
