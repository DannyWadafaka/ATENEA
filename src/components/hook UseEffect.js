import { useEffect, useState } from "react"




function Timer(){
    const[contador,setContador]=useState(0);
    const tiempo=()=>{setTimeout(()=>{setContador((cont)=>cont+1);},1000)}
    useEffect(tiempo,[]); //recibe una funcion y una dependencia
    return(
        <h1>El componente se ha renderizado {contador} veces</h1>
    )}

export function Contador(){
    const [cont,setCont]=useState(0);
    const [calcular,setCalcular]=useState(0);

    const tiempo =()=>{
        setCalcular(()=> cont*2);
    }
    useEffect(tiempo,[cont]);

    function sumar(){
        setCont((c)=>c+1)

    }
    return<>
    <p>Contador: {cont}</p>
    <button onClick={sumar}>sumar</button>
    <p>Calcular:{calcular}</p>
    </>
}