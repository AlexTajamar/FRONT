import SaludoHijo from "./SaludoHijo";

function SaludoPadre() {
  //METODO QUE DESEA EJECUTAR EL HIJO ENVIANDOLE VARIABLES
  const metodoPadre = (nombre) => {
    console.log("yo soy tu padre " + nombre);
  };

  return (
    <div>
      <h1 style={{ color: "red" }}>Saludo Padre</h1>
      {/* DESDE PROPS ENVIAMOS EL METODO AL HIJO PARA QUE PUEDA LLAMARLO */}
      <SaludoHijo idhijo="1" metodoPadre={metodoPadre}></SaludoHijo>
      <SaludoHijo idhijo="2" metodoPadre={metodoPadre}></SaludoHijo>
      <SaludoHijo idhijo="3" metodoPadre={metodoPadre}></SaludoHijo>
    </div>
  );
}
export default SaludoPadre;
