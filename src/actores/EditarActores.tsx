import FormularioActores from "./FormularioActores";

export default function EditarActores() {
  return (
    <>
      <h3>Editar Actores</h3>
      <FormularioActores
        modelo={{
          nombre: "Tom Cruise",
          fechaNacimiento: new Date("1996-06-01T00:00:00"),
          fotoURL:
            "http://www.hola.com/imagenes/belleza/actualidad/2016051985860/ana-de-armas-looks-cannes/0-366-232/ana-de-armas-getty11-a.jpg",
          biografia: ` # Negros 
                      Putos **negros** de mierda`,
        }}
        onSubmit={(valores) =>
          console.log(
            "🚀 ~ file: CrearActores.tsx:8 ~ CrearActores ~ valores",
            valores
          )
        }
      />
    </>
  );
}
