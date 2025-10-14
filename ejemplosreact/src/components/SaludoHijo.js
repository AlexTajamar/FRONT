function SaludoHijo(props) {
  //NESCESITO ALGO (NOMBREDEVARIABLE) PARA LLMAR AL METODO DEL PADRE
  var ejecutarPadre = props.metodoPadre;
  var ejecutarTriple=props.num
  return (
    <div>
      <h1 style={{ color: "blue" }}>Soy un Hijo</h1>
      <button onClick={() => ejecutarPadre("Anakin " + props.idhijo)}
      >
        <button onClick={()=>ejecutarTriple()}
        EJECUTA EL METODO DEL PADRE
      </button>
    </div>
  );
}
export default SaludoHijo;
