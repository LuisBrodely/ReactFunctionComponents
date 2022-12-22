import {useState} from "react";
const ContadorHooks = (props) => {
    //Se puede recibir todo tipo de dato incluyendo arreglos y objetos
    const[contador,setContador] = useState(0);

    //console.log(useState())

    function sumar() {
        setContador(contador+1)
    }
    return(
        <div>
            <h2>Hooks - useState</h2>
            <h2>{contador}</h2>
            <button onClick={()=> setContador(contador-1)}>-</button>
            <button onClick={sumar}>+</button>
            <h3>{props.titulo}</h3>
            <h3>{props.mensaje}</h3>
        </div>
    );
}

export default ContadorHooks;

//Propiedades por Defecto
ContadorHooks.defaultProps ={
    titulo:"Titulo por Defecto"
}