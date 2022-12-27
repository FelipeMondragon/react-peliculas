import { cineCreacionDTO } from "./cines.model";
import { Form, Formik, FormikHelpers } from "formik";
import * as Yup from "yup";
import FormGroupText from "../utils/FormGroupText";
import Button from "../utils/Button";
import MapaFormulario from "../utils/MapaFormulario";
import { coordenadaDTO } from "../utils/coordenadas.model";

export default function FormularioCines(props: formularioCinesProps) {
  function transformarCoordenadas(): coordenadaDTO[] | undefined {
    if (props.modelo.latitud && props.modelo.longitud) {
      const respuesta: coordenadaDTO = {
        lat: props.modelo.latitud,
        lng: props.modelo.longitud,
      };
      return [respuesta];
    }
    return undefined;
  }

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
          <div style={{ marginBottom: "1rem" }}>
            <MapaFormulario
              campoLat="latitud"
              campoLng="longitud"
              coordenadas={transformarCoordenadas()}
            />
          </div>
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
