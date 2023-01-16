import { Formik, Form, FormikHelpers } from "formik";
import Button from "../utils/Button";
import * as Yup from "yup";
import FormGroupText from "../utils/FormGroupText";
import { generoCreacionDTO } from "./genero.model";

export default function FormulariosGeneros(props: formulariosGeneros) {
  return (
    <Formik
      initialValues={props.modelo}
      onSubmit={props.onSubmit}
      validationSchema={Yup.object({
        nombre: Yup.string()
          .required("Este campo es requerido")
          .max(50, "La longitud maxima es de 50 caracteres")
          .primeraLetraMayuscula(),
      })}
    >
      {(formikProps) => (
        <Form>
          <FormGroupText
            campo="nombre"
            label="Nombre"
            placeholder="Nombre genero"
          />
          <Button disabled={formikProps.isSubmitting} type="submit">
            Salvar
          </Button>
          <a className="btn btn-secondary" href="/generos">
            Cancelar
          </a>
        </Form>
      )}
    </Formik>
  );
}

interface formulariosGeneros {
  modelo: generoCreacionDTO;
  onSubmit(
    valores: generoCreacionDTO,
    accion: FormikHelpers<generoCreacionDTO>
  ): void;
}
