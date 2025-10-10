function DobleNumero() {
  const numeroDoble = (numero) => {
    var numDoble = numero * 2;
    console.log(numDoble);
  };

  var estilo = {
    color: "red",
    backgroundColor: "yellow",
  };

  return (
    <div>
      <h1 style={estilo}>Ejemplo metodos parametro</h1>
      <h2 style={{ color: "fuchsia" }}>tengo estilo sin variable</h2>
      <button
        onClick={() => {
          numeroDoble(7);
        }}
      >
        Doble 7
      </button>
      <button
        onClick={() => {
          numeroDoble(15);
        }}
      >
        Doble 15
      </button>
    </div>
  );
}
export default DobleNumero;
