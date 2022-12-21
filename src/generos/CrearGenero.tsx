import { Formik, Form} from "formik";
// import { useHistory } from "react-router-dom";
import Button from "../utils/Button";
import * as Yup from 'yup'
import FormGroupText from "../utils/FormGroupText";

export default function CrearGenero() {
  // const history = useHistory();
  return (
    <>
      <h3>Crear Genero</h3>
      <Formik initialValues={{
        nombre: ''
      }} onSubmit={values => {
        console.log(values);
      }} 
      validationSchema={Yup.object({
        nombre: Yup.string().required('Este campo es requerido')
      })}
      >
        <Form>
          <FormGroupText campo="nombre" label="Nombre" placeholder="Nombre genero" />
          <Button type="submit">Salvar</Button>
          <a className="btn btn-secondary" href="/generos">Cancelar</a>
        </Form>
      </Formik>
      {/* <Button onClick={() => history.push('/generos')}> Salvar </Button> */}
    </>
  );
}
