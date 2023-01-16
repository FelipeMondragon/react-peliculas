import axios, { AxiosResponse } from "axios";
import { useEffect } from "react";
import { generoDTO } from "./genero.model";
import { useState } from "react";
import ListadoGenerico from "../utils/ListadoGenerico";
import Button from "../utils/Button";

export default function IndiceGeneros() {
  const [generos, setGeneros] = useState<generoDTO[]>();

  useEffect(() => {
    axios
      .get("https://localhost:7088/api/generos")
      .then((respuesta: AxiosResponse<generoDTO[]>) => {
        console.log(
          "🚀 ~ file: IndiceGeneros.tsx:8 ~ axios.get ~ respuesta",
          respuesta.data
        );
        setGeneros(respuesta.data);
      });
  }, []);
  return (
    <>
      <h3>Géneros</h3>
      <a className="btn btn-primary" href="generos/crear">
        Crear Genero
      </a>
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
                  <a className="btn btn-success" href={`/generos/${genero.id}`}>
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
