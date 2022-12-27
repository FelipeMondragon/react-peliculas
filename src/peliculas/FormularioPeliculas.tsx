import { Form, Formik, FormikHelpers } from "formik";
import { peliculaCreacionDTO } from "./peliculas.model";
import * as Yup from "yup";
import FormGroupText from "../utils/FormGroupText";
import FormGroupCheckBox from "../utils/FormGroupCheckBox";
import FormGroupFecha from "../utils/FormGroupFecha";
import FormGroupImagen from "../utils/FormGroupImagen";
import Button from "../utils/Button";

export default function FormularioPeliculas(props: formularioPeliculasProps) {
  return (
    <Formik
      initialValues={props.modelo}
      onSubmit={props.onSubmit}
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
}
