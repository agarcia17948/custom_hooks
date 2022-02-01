
import { useState, useEffect } from "react";
//objeto con valor inicial null
const initialPosition = {x:null, y:null}
// hasta que el usuario mueva el mouse entonces se sabe
// en donde esta
export const useMousePosition =  ()=>{
    
    const [position, setPosition] =useState(initialPosition);
    useEffect(()=>{
        /*para evitra usar el use callback lo definimos aqui */
        const manejadorMovimientoMouse=(e)=>{
            const{ clientX, clientY} = e;
            setPosition({
                x:clientX,
                y:clientY
            });
            //console.log("se movio el mouse");
        }
        window.addEventListener('mousemove',
                manejadorMovimientoMouse)
        return()=>{
            window.removeEventListener('mousemove',manejadorMovimientoMouse)
        }    
    },[]);

    return position;
}