import { useState } from "react";

function Contador() {
  //Declaramos la variable que deseamos dibujar
  // en el render y que se ha modificado

  const [numero, setNumero] = useState(0);
  const sumarContador = () => {
    //Para modificar el valor de una variable de estado
    // se realiza con setNombre(nuevo valor)
    setNumero(numero + 1);
  };
  return (
    <div>
      <h1>Contador : {numero}</h1>
      <button onClick={() => sumarContador()}>Sumar</button>
      <button onClick={() => setNumero(numero - 1)}>Restar</button>
    </div>
  );
}

export default Contador;
