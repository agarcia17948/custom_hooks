
/*
un hook tiene el prefijo "use"
un hook es una funcion
puede almacenar estados
los hooks tiene estructura parecida a componentes react
no utilizan jsx
------ no usaremos jsx -------
*/


import {useState} from 'react';

export const useCounter = (initialValue) =>{
    // estas constantes son las que se retornan
    const [counter, setCounter] =useState(initialValue);
    //funcion flecha de incremento
    const increment = () =>{
        setCounter(counter+1);
    }
    // coloca el counter en 0
    const reset =()=>{
        setCounter(initialValue);
    }
    return[counter, increment, reset];
}


