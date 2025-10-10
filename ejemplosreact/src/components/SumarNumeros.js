import img from "../assets/images/descargar.webp";
import "./SumarNumeros.css";
function SumarNumeros(props) {
  const sumarNumeros = (num1, num2) => {
    //var sum = num1 + num2;
    let sum = props.numero1 + props.numero2;
    console.log(sum);
  };
  return (
    <div>
      <h1>Sumar Números</h1>
      <img src={img} style={{ width: "150px", height: "150px" }} />{" "}
      {/* <img
        src={"../assets/images/OIP.webp"}
        style={{ width: "150px", height: "150px" }}
      /> */}
      {/* //asi no lo cage */}
      <button onClick={sumarNumeros(2, 7)} className="sum">
        SUMA DE 2 y 7
      </button>
    </div>
  );
}
export default SumarNumeros;
