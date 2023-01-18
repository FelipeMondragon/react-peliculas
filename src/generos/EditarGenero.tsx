import FormulariosGeneros from "./FormularioGeneros";
import { generoDTO, generoCreacionDTO } from "./genero.model";
import EditarEntidad from "../utils/EditarEntidad";

export default function EditarGenero() {
  return (
    <>
      <EditarEntidad<generoCreacionDTO, generoDTO>
        url="https://localhost:7088/api/generos"
        nombreEntidad="Géneros"
      >
        {(entidad, editar) => (
          <FormulariosGeneros
            modelo={entidad}
            onSubmit={async (valores) => {
              await editar(valores);
            }}
          />
        )}
      </EditarEntidad>
    </>
  );
}
