import React, { useState } from "react";

export function Buttonxd(){
    const[boton,setBoton] = useState("Comprar"); //Se inicializa el hook
    function actualizar(){ //Se crea para actualizar el boton
        setBoton("Animal"); //Se usa el setter para cambiar el valor del boton
    }
    return(
        <button onClick={actualizar}>{boton}</button>
    )

}