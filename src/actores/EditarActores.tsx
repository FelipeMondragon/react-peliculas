import EditarEntidad from "../utils/EditarEntidad";
import FormularioActores from "./FormularioActores";
import { actorCreacionDTO, actorDTO } from "./actores.model";
import { convertirActorAFormData } from "../utils/formDataUtils";

export default function EditarActores() {
  const transformar = (actor: actorDTO) => {
    return {
      nombre: actor.nombre,
      fotoURL: actor.foto,
      biografia: actor.biografia,
      fechaNacimiento: new Date(actor.fechaNacimiento),
    };
  };
  return (
    <>
      <EditarEntidad<actorCreacionDTO, actorDTO>
        url="https://localhost:7088/api/actores"
        nombreEntidad="Actores"
        transformarFormData={convertirActorAFormData}
        transformar={transformar}
      >
        {(entidad, editar) => (
          <FormularioActores
            modelo={entidad}
            onSubmit={async (valores) => await editar(valores)}
          />
        )}
      </EditarEntidad>
    </>
  );
}
