import FormularioCines from "./FormularioCines";
import { cineCreacionDTO, cineDTO } from "./cines.model";
import EditarEntidad from "../utils/EditarEntidad";

export default function EditarCines() {
  return (
    <EditarEntidad<cineCreacionDTO, cineDTO>
      url="https://localhost:7088/api/cines"
      nombreEntidad="Cines"
    >
      {(entidad, editar) => (
        <FormularioCines
          modelo={entidad}
          onSubmit={async (valores) => {
            await editar(valores);
          }}
        />
      )}
    </EditarEntidad>
  );
}
