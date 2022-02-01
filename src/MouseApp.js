
import React from "react";
import { useBackground } from "./hooks/useBackground";
//import { useMousePosition } from "./hooks/useMousePosition";

/*
//lo siguiente no es muy recomendable es mejor usar use memo //
const fondo = position.x 
< window.innerWidth/2 
? 'pink'
: 'orange';
*/

export const MouseApp =()=>{
    // use background devuelve fondo y posicion
    
    const {fondo, position} = useBackground();

    return(
        <div style={{background:fondo, height:'90vh'}}>
            <h1>posicion del mouse</h1>
            <pre>
                {JSON.stringify(position, null,2)}
            </pre>
        </div>
    );
}

/*
//const back = useBackground(); esto funciona
<div style={{background:back.fondo, height:'90vh'}}>
            <h1>posicion del mouse</h1>
            <pre>
                {JSON.stringify(back.position, null,2)}
            </pre>
        </div>
        */