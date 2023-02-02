import FormularioPeliculas from "./FormularioPeliculas";
import { generoDTO } from "../generos/genero.model";
import { cineDTO } from "../cines/cines.model";
import { useEffect } from "react";
import axios, { AxiosResponse } from "axios";
import { peliculasPostGetDTO, peliculaCreacionDTO } from "./peliculas.model";
import { useState } from "react";
import Cargando from "../utils/Cargando";
import { convertirPeliculaAFormData } from "../utils/formDataUtils";
import MostrarErrores from "../utils/MostrarErrores";
export default function CrearPeliculas() {
  const [generosNoSeleccionados, setGenerosNoSeleccionados] = useState<
    generoDTO[]
  >([]);
  const [cinesNoSeleccionados, setCinesNoSeleccionados] = useState<cineDTO[]>(
    []
  );
  const [cargado, setCargado] = useState(false);
  const [errores, setErrores] = useState<string[]>([]);

  useEffect(() => {
    axios
      .get("https://localhost:7088/api/peliculas/PostGet")
      .then((respuesta: AxiosResponse<peliculasPostGetDTO>) => {
        setGenerosNoSeleccionados(respuesta.data.generos);
        setCinesNoSeleccionados(respuesta.data.cines);
        setCargado(true);
      });
  }, []);

  async function crear(movie: peliculaCreacionDTO) {
    try {
      const formData = convertirPeliculaAFormData(movie);
      await axios({
        method: "POST",
        url: "https://localhost:7088/api/peliculas",
        data: formData,
        headers: { "Content-Type": "multipart/form-data" },
      }).then((respuesta: AxiosResponse<number>) => {});
    } catch (error: any) {
      console.error(error);
      setErrores(error.response.data);
    }
  }

  return (
    <>
      <h3>Crear Película</h3>
      <MostrarErrores errores={errores} />
      {cargado ? (
        <FormularioPeliculas
          cinesNoSeleccionados={cinesNoSeleccionados}
          cinesSeleccionados={[]}
          generosNoSeleccionados={generosNoSeleccionados}
          generosSeleccionados={[]}
          actoresSeleccionados={[]}
          modelo={{ titulo: "", enCines: false, trailer: "" }}
          onSubmit={async (valores) => crear(valores)}
        />
      ) : (
        <Cargando />
      )}
    </>
  );
}
