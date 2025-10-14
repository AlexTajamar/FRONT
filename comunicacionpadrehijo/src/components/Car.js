import { useState } from "react";
function Coche(props) {
  //variable para el estado
  const [estado, setEstado] = useState(false);
  const [velocidad, setVelocidad] = useState(0);

  //creamos un injeto coche
  var coche = {
    marca: props.marca,
    modelo: props.modelo,
    velocidadmax: parseInt(props.velocidadmax),
    aceleracion: parseInt(props.aceleracion),
  };

  //METODO PARA DEVOLVER METODO HTML DINAMICO
  const comprobarEstadocoche = () => {
    if (estado == true) {
      return <h1 style={{ color: "blue" }}>Arrancado</h1>;
    } else {
      return <h1 style={{ color: "red" }}>Apagado</h1>;
    }
  };
  const acelerar = () => {
    if (estado == false) {
      alert("el coche esta apagado");
      setVelocidad(0);
    } else {
      if (velocidad >= coche.velocidadmax) {
        setVelocidad(coche.velocidadmax);
      } else {
        console.log(velocidad);
        setVelocidad(velocidad + coche.aceleracion);
      }
    }
  };
  return (
    <div>
      <h1>Coche</h1>
      <h2>
        Marca : {coche.marca} Modelo : {coche.modelo}
      </h2>
      <h2 style={{ color: "fuchsia" }}> velocidad en Km/H : {velocidad}</h2>
      <div>{comprobarEstadocoche()}</div>
      <button
        onClick={() => {
          setEstado(!estado);
        }}
      >
        Apagado/Arrancar
      </button>
      <button
        onClick={() => {
          acelerar();
        }}
      >
        Acelerar : {coche.aceleracion} km/h
      </button>
    </div>
  );
}
export default Coche;
