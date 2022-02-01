
import React from 'react';
import { useCounter } from './hooks/useCounter';

export const CounterApp = () =>{
    /* para que importe rapido el use counter el archivo usecounter
       debe estar abierto en otra pestaña     
    ---- podemos o no enviar parametros en este caso =5   
       */
    //console.log(valorEntrada);
    const [counter,increment,reset] = useCounter(8);
    return(
        <div>
            <h1>contador de clicks: {counter}</h1>
            <button onClick={increment}>increment </button>
            <button onClick={reset}>reset</button>
        </div>
    );
}

/*
como agregar contadores para
hombres
mujeres
niños

*/