import { Typeahead } from "react-bootstrap-typeahead";
import { actorPeliculaDTO } from "./actores.model";
import { ReactElement } from "react";

export default function TypeAheadActores(props: typeAheadActoresProps) {
  const actores: actorPeliculaDTO[] = [
    {
      id: 1,
      nombre: "Ana de Armas",
      personaje: "La IA sexy",
      foto: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/gettyimages-1139359898.jpg",
    },
    {
      id: 2,
      nombre: "Anya Taylor Joy",
      personaje: "The Witch",
      foto: "https://images.chicmagazine.com.mx/F44dw9QjRStkLvVzSt-_e8zuBho=/958x596/uploads/media/2021/03/03/anya-taylor-joy-considerada-mujer.jpg",
    },
    {
      id: 3,
      nombre: "Anne Hathaway",
      personaje: "Rebekah Paltrow",
      foto: "https://media.glamour.mx/photos/628808c833a1d0d79ce30332/master/w_1600,c_limit/por-que-anne-hathaway-visito-de-blanco.jpg",
    },
  ];

  const seleccion: actorPeliculaDTO[] = [];

  return (
    <>
      <label>Actores: </label>
      <Typeahead
        id="typeahead"
        onChange={(actores) => {
          if (props.actores.findIndex((x) => x.id === actores[0].id) === -1) {
            props.onAdd([...props.actores, actores[0]]);
          }
        }}
        options={actores}
        labelKey={(actor) => actor.nombre}
        filterBy={["nombre"]}
        placeholder="Escriba el nombre del actor..."
        minLength={2}
        flip={true}
        selected={seleccion}
        renderMenuItemChildren={(actor) => (
          <>
            <img
              src={actor.foto}
              alt="imagen actor"
              style={{ height: "64px", marginRight: "10px", width: "64px" }}
            />
            <span> {actor.nombre} </span>
          </>
        )}
      />
      <ul className="list-group">
        {props.actores.map((actor) => (
          <li className="list-group-item list-group-item-action" key={actor.id}>
            {" "}
            {props.listadoUI(actor)}{" "}
          </li>
        ))}
      </ul>
    </>
  );
}

interface typeAheadActoresProps {
  actores: actorPeliculaDTO[];
  onAdd(actores: actorPeliculaDTO[]): void;
  listadoUI(actor: actorPeliculaDTO): ReactElement;
}
