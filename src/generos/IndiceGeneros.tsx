import axios, { AxiosResponse } from "axios";
import { useEffect } from "react";
import { generoDTO } from "./genero.model";
import { urlGeneros } from "../utils/endpoints";

export default function IndiceGeneros() {
  useEffect(() => {
    axios
      .get("https://localhost:7088/api/generos")
      .then((respuesta: AxiosResponse<generoDTO[]>) => {
        console.log(
          "🚀 ~ file: IndiceGeneros.tsx:8 ~ axios.get ~ respuesta",
          respuesta.data
        );
      });
  }, []);
  return (
    <>
      <h3>Indice Géneros</h3>
      <a href="generos/crear">Crear Genero</a>
    </>
  );
}
