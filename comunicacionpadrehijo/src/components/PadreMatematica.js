import MatematicaHijo from "./MatematicaHijo";

function PadreMatematicas() {
  //METODO QUE DESEA EJECUTAR EL HIJO ENVIANDOLE VARIABLES

  const tripleNum = (num) => {
    console.log("Trple de " + num + " es " + num * 3);
  };
  return (
    <div>
      <h1 style={{ color: "red" }}>Saludo Padre</h1>
      {/* DESDE PROPS ENVIAMOS EL METODO AL HIJO PARA QUE PUEDA LLAMARLO */}
      <MatematicaHijo num={tripleNum}></MatematicaHijo>
      <MatematicaHijo tripleNum={tripleNum}></MatematicaHijo>
      <MatematicaHijo num={tripleNum}></MatematicaHijo>
    </div>
  );
}
export default PadreMatematicas;
