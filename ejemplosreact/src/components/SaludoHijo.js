function SaludoHijo(props) {
  //NESCESITO ALGO (NOMBREDEVARIABLE) PARA LLMAR AL METODO DEL PADRE
  var ejecutarPadre = props.metodoPadre;
  return (
    <div>
      <h1 style={{ color: "blue" }}>Soy un Hijo</h1>
      <button onClick={() => ejecutarPadre()}>
        EJECUTA EL METODO DEL PADRE
      </button>
    </div>
  );
}
export default SaludoHijo;
