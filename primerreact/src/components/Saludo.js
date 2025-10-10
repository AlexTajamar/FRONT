function Saludo(props){
    //este codio es js
var mensaje=" mi Primer React!";
//let nombre=props.nombre;
const {nombre,mensaje2,edad2}=props;
//aqui termina el codigo js
//aqui empieza el codigo html
    return(<div><h1>Hola, bienvenido a {mensaje}!</h1><h2>Prueba {nombre} {props.edad}</h2></div>);
}

export default Saludo;