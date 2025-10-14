function MatematicaHijo(props) {
  //NESCESITO ALGO (NOMBREDEVARIABLE) PARA LLMAR AL METODO DEL PADRE
  var numero = props.num;
  var ejecutarTriple = props.metodoPadre;
  const dobleNum = (num) => {
    console.log("doble de " + num + " es " + num * 2);
  };
  return (
    <div>
      <h1 style={{ color: "blue" }}>Soy un MatematicasHijo</h1>
      <button onClick={() => numero(3)}>PÚLSAME</button>
      <button onClick={() => dobleNum(6)}>pulsame 2</button>
      //EJECUTA EL METODO DEL PADRE
    </div>
  );
}
export default MatematicaHijo;
