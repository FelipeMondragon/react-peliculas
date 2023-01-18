import { ReactElement } from "react";
import { useState } from "react";
import axios, { AxiosResponse } from "axios";
import { useEffect } from "react";
import ListadoGenerico from "../utils/ListadoGenerico";
import Button from "../utils/Button";
import confirmar from "../utils/Confirmar";
import Paginacion from "../utils/Paginacion";

export default function IndiceEntidad<T>(props: indiceEntidadProps<T>) {
  const [entidades, setEntidades] = useState<T[]>();
  const [totalDePaginas, setTotalDePaginas] = useState(0);
  const [recordsPorPagina, setRecordsPorPagina] = useState(10);
  const [pagina, setPagina] = useState(1);

  useEffect(() => {
    cargaDatos();
  }, [pagina, recordsPorPagina]);

  function cargaDatos() {
    axios
      .get(props.url, {
        params: { pagina, recordsPorPagina },
      })
      .then((respuesta: AxiosResponse<T[]>) => {
        const totalDeRegistros = parseInt(
          respuesta.headers["cantidadtotalregistros"],
          10
        );
        setTotalDePaginas(Math.ceil(totalDeRegistros / recordsPorPagina));
        setEntidades(respuesta.data);
      });
  }

  async function borrar(id: number) {
    try {
      await axios.delete(`${props.url}/${id}`);
      cargaDatos();
    } catch (error) {
      console.log("🚀 ~ file: IndiceGeneros.tsx:38 ~ borrar ~ error", error);
    }
  }

  const botones = (urlEditar: string, id: number) => (
    <>
      <a className="btn btn-success" href={urlEditar}>
        Editar
      </a>
      <Button
        onClick={() => confirmar(() => borrar(id))}
        className="btn btn-danger"
      >
        Borrar
      </Button>
    </>
  );

  return (
    <>
      <h3>{props.titulo}</h3>
      <a className="btn btn-primary" href={props.urlCrear}>
        Crear {props.nombreEntidad}
      </a>
      <div className="form-group" style={{ width: "150px" }}>
        <label>Registros por página: </label>
        <select
          className="form-control"
          defaultValue={10}
          onChange={(e) => {
            setPagina(1);
            setRecordsPorPagina(parseInt(e.currentTarget.value));
          }}
        >
          <option value={5}>5</option>
          <option value={10}>10</option>
          <option value={25}>25</option>
          <option value={50}>50</option>
        </select>
      </div>
      <Paginacion
        cantidadTotalDePaginas={totalDePaginas}
        paginaActual={pagina}
        onChange={(nuevaPagina) => setPagina(nuevaPagina)}
      />
      <ListadoGenerico listado={entidades}>
        <table className="table table-stripped">
          {props.children(entidades!, botones)}
        </table>
      </ListadoGenerico>
    </>
  );
}

interface indiceEntidadProps<T> {
  url: string;
  urlCrear: string;
  children(
    entidades: T[],
    botones: (urlEditar: string, id: number) => ReactElement
  ): ReactElement;
  titulo: string;
  nombreEntidad: string;
}
