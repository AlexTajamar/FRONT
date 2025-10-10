function Metodos() {
  //CREAMOS UN METODO
  const mostrarMensaje = () => {
    console.log("Boton pulsado");
  };
  var mensaje = "hOY ES VIERNES";
  const cambiarTexto = () => {
    console.log("Hoy se sale" + mensaje);
    mensaje = "mejor no";
    console.log("valor despues " + mensaje);
  };
  return (
    <div>
      <h1>{mensaje}</h1>
      <button
        onClick={() => {
          cambiarTexto();
        }}
      >
        675675
      </button>
      {mostrarMensaje()}
      <button onClick={() => mostrarMensaje()}>Pulsa para cosas</button>
    </div>
  );
}
export default Metodos;
