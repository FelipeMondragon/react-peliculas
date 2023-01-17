import axios, { AxiosResponse } from "axios";
import { useEffect } from "react";
import { generoDTO } from "./genero.model";
import { useState } from "react";
import ListadoGenerico from "../utils/ListadoGenerico";
import Button from "../utils/Button";
import Paginacion from "../utils/Paginacion";

export default function IndiceGeneros() {
  const [generos, setGeneros] = useState<generoDTO[]>();
  const [totalDePaginas, setTotalDePaginas] = useState(0);
  const [recordsPorPagina, setRecordsPorPagina] = useState(10);
  const [pagina, setPagina] = useState(1);

  useEffect(() => {
    axios
      .get("https://localhost:7088/api/generos", {
        params: { pagina, recordsPorPagina },
      })
      .then((respuesta: AxiosResponse<generoDTO[]>) => {
        const totalDeRegistros = parseInt(
          respuesta.headers["cantidadtotalregistros"],
          10
        );
        setTotalDePaginas(Math.ceil(totalDeRegistros / recordsPorPagina));
        console.log(
          "🚀 ~ file: IndiceGeneros.tsx:8 ~ axios.get ~ respuesta",
          respuesta.data
        );
        setGeneros(respuesta.data);
      });
  }, [pagina, recordsPorPagina]);
  return (
    <>
      <h3>Géneros</h3>
      <a className="btn btn-primary" href="generos/crear">
        Crear Genero
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
      <ListadoGenerico listado={generos}>
        <table className="table table-stripped">
          <thead>
            <tr>
              <th></th>
              <th>Nombre</th>
            </tr>
          </thead>
          <tbody>
            {generos?.map((genero) => (
              <tr key={genero.id}>
                <td>
                  <a
                    className="btn btn-success"
                    href={`/generos/editar/${genero.id}`}
                  >
                    Editar
                  </a>
                  <Button className="btn btn-danger">Borrar</Button>
                </td>
                <td>{genero.nombre}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </ListadoGenerico>
    </>
  );
}
