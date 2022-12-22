import { Form, Formik, FormikHelpers } from "formik";
import FormGroupText from "../utils/FormGroupText";
import { actorCreacionDTO } from "./actores.model";
import Button from "../utils/Button";
import * as Yup from "yup";

export default function FormularioActores(props: formularioActoresProps) {
  return (
    <Formik
      initialValues={props.modelo}
      onSubmit={props.onSubmit}
      validationSchema={Yup.object({
        nombre: Yup.string()
          .required("Este campo es requerido")
          .primeraLetraMayuscula(),
      })}
    >
      {(formikProps) => (
        <Form>
          <FormGroupText campo="nombre" label="Nombre" />
          <Button disabled={formikProps.isSubmitting} type="submit">
            Salvar
          </Button>
          <a className="btn btn-secondary" href="/actores">
            Cancelar
          </a>
        </Form>
      )}
    </Formik>
  );
}

interface formularioActoresProps {
  modelo: actorCreacionDTO;
  onSubmit(
    valores: actorCreacionDTO,
    acciones: FormikHelpers<actorCreacionDTO>
  ): void;
}
