import IndiceEntidad from "../utils/IndiceEntidad";
import { generoDTO } from "./genero.model";

export default function IndiceGeneros() {
  return (
    <>
      <IndiceEntidad<generoDTO>
        url="https://localhost:7088/api/generos"
        urlCrear="generos/crear"
        titulo="Géneros"
        nombreEntidad="Género"
      >
        {(generos, botones) => (
          <>
            <thead>
              <tr>
                <th></th>
                <th>Nombre</th>
              </tr>
            </thead>
            <tbody>
              {generos?.map((genero) => (
                <tr key={genero.id}>
                  <td> {botones(`generos/editar/${genero.id}`, genero.id)} </td>
                  <td>{genero.nombre}</td>
                </tr>
              ))}
            </tbody>
          </>
        )}
      </IndiceEntidad>
    </>
  );
}
