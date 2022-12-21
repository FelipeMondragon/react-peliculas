import { Formik, Form, Field} from "formik";
// import { useHistory } from "react-router-dom";
import Button from "../utils/Button";

export default function CrearGenero() {
  // const history = useHistory();
  return (
    <>
      <h3>Crear Genero</h3>
      <Formik initialValues={{
        nombre: ''
      }} onSubmit={values => {
        console.log(values);
      }} >
        <Form>
          <div className="form-group">
            <label htmlFor="nombre">Nombre</label>
            <Field name="nombre" className="form-control"/>
          </div>
          <Button type="submit">Salvar</Button>
          <a className="btn btn-secondary" href="/generos">Cancelar</a>
        </Form>
      </Formik>
      {/* <Button onClick={() => history.push('/generos')}> Salvar </Button> */}
    </>
  );
}
