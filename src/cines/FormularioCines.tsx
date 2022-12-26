import { cineCreacionDTO } from "./cines.model";
import { Form, Formik, FormikHelpers } from "formik";
import * as Yup from "yup";
import FormGroupText from "../utils/FormGroupText";
import Button from "../utils/Button";

export default function FormularioCines(props: formularioCinesProps) {
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
          <FormGroupText label="Nombre" campo="nombre" />
          <Button disabled={formikProps.isSubmitting} type="submit">
            Salvar
          </Button>
          <a className="btn btn-secondary" href="/cines">
            Cancelar
          </a>
        </Form>
      )}
    </Formik>
  );
}

interface formularioCinesProps {
  modelo: cineCreacionDTO;
  onSubmit(
    valores: cineCreacionDTO,
    acciones: FormikHelpers<cineCreacionDTO>
  ): void;
}
