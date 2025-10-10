import SaludoHijo from "./SaludoHijo";

function SaludoPadre() {
  const metodoPadre = () => {
    console.log("Ejecutando el PADRE");
  };
  return (
    <div>
      <h1 style={{ color: "red" }}>Saludo Padre</h1>
      {/* DESDE PROPS ENVIAMOS EL METODO AL HIJO PARA QUE PUEDA LLAMARLO */}
      <SaludoHijo metodoPadre={metodoPadre}></SaludoHijo>
      <SaludoHijo metodoPadre={metodoPadre}></SaludoHijo>
    </div>
  );
}
export default SaludoPadre;
