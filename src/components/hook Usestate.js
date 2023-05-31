//Hook useState
import {useState, Fragment} from "react";

export function Colorfavorito(){
    const [color, setColor] = useState("azul");
    return(
        <Fragment>
        <h1>Mi color favorito es: {color} </h1>
        <button onClick={()=>setColor("verde")}>Cambiar color</button>
        </Fragment>
    );


}

//Hook useState * retener estados

export function Carro(){
    const [marca, setMarca] = useState("Mitsubishi");
    const [modelo, setModelo] = useState("Mazda 6");
    const [color, setColor] = useState("gris")

    return(
        <>
        <h1> La marca es {marca }</h1>
        <p><pre>Detalles:
            modelo: {modelo}
            color: {color}</pre></p>

        </>
    );
}