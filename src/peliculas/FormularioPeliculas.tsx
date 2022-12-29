import { Form, Formik, FormikHelpers } from "formik";
import { peliculaCreacionDTO } from "./peliculas.model";
import * as Yup from "yup";
import FormGroupText from "../utils/FormGroupText";
import FormGroupCheckBox from "../utils/FormGroupCheckBox";
import FormGroupFecha from "../utils/FormGroupFecha";
import FormGroupImagen from "../utils/FormGroupImagen";
import Button from "../utils/Button";
import SelectorMultiple, {
  selectorMultipleModel,
} from "../utils/SelectorMultiple";
import { generoDTO } from "../generos/genero.model";
import { useState } from "react";

export default function FormularioPeliculas(props: formularioPeliculasProps) {
  const [generosSeleccionados, setGenerosSeleccionados] = useState(
    mapear(props.generosSeleccionados)
  );
  const [generosNoSeleccionados, setGenerosNoSeleccionados] = useState(
    mapear(props.generosNoSeleccionados)
  );

  function mapear(
    arreglo: { id: number; nombre: string }[]
  ): selectorMultipleModel[] {
    return arreglo.map((valor) => {
      return { llave: valor.id, valor: valor.nombre };
    });
  }

  return (
    <Formik
      initialValues={props.modelo}
      onSubmit={(valores, acciones) => {
        valores.generosIds = generosSeleccionados.map((valor) => valor.llave);
        props.onSubmit(valores, acciones);
      }}
      validationSchema={Yup.object({
        titulo: Yup.string()
          .required("Este campo es requerido")
          .primeraLetraMayuscula(),
      })}
    >
      {(formikProps) => (
        <Form>
          <FormGroupText label="Título" campo="titulo" />
          <FormGroupCheckBox label="En cines" campo="enCines" />
          <FormGroupText label="Trailer" campo="trailer" />
          <FormGroupFecha
            label="Fecha de lanzamiento"
            campo="fechaLanzamiento"
          />
          <FormGroupImagen
            label="Poster"
            campo="poster"
            imagenURL={props.modelo.posterURL}
          />
          <div className="form-group">
            <label> Géneros: </label>
            <SelectorMultiple
              seleccionados={generosSeleccionados}
              noSeleccionados={generosNoSeleccionados}
              onChange={(seleccionados, noSeleccionados) => {
                setGenerosSeleccionados(seleccionados);
                setGenerosNoSeleccionados(noSeleccionados);
              }}
            />
          </div>
          <Button disabled={formikProps.isSubmitting} type="submit">
            Salvar
          </Button>
          <a className="btn btn-secondary" href="/">
            Cancelar
          </a>
        </Form>
      )}
    </Formik>
  );
}

interface formularioPeliculasProps {
  modelo: peliculaCreacionDTO;
  onSubmit(
    valores: peliculaCreacionDTO,
    acciones: FormikHelpers<peliculaCreacionDTO>
  ): void;
  generosSeleccionados: generoDTO[];
  generosNoSeleccionados: generoDTO[];
}
