
//import React, { useState } from "react";
import { useTareas } from "./hooks/useTareas";

/* areglo que tiene la lista de tareas */
const listaTareas=[
    {id:1,title:'learn react'},
    {id:2,title:'learn nodejs'},
    {id:3,title:'learn css'},
    {id:4,title:'ganar compi2'}
];
  

export const TodoApp =()=>{
    //const[todos, setTareas]= useState(Tareas);
    //funcion obtener las tareas
    const [tareas, addTarea, deleteTarea] =useTareas(listaTareas);

    // funcion para agregar una tarea
    // funcion para eliminar una tarea

    return(
        <>
            <button 
                onClick={()=>addTarea({title:'nueva tarea'})}>
                add tarea
            </button>
            <ul>
                {tareas.map(tarea=>(
                    <li key={tarea.id} >
                        {tarea.title}
                        <button onClick={()=>deleteTarea(tarea.id)}>
                            delete
                        </button>
                    </li>
                ))}            
            </ul>
        </>
    );
}

/*
el map tiene que tener un key unico (li)
en el onClick pasamos la funcion como funcion flecha para que se ejecute cuando hacemos click

como agregar escribir un nombre nuevo en la tarea?

*/