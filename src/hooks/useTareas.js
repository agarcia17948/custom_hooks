
import { useState } from "react";

//el hook recibe un parametro = lista de tareas
export const useTareas =(listaTareas)=>{

    const [tareas, setTareas]=useState(listaTareas);

    const addTarea = (newTarea) =>{
        /*agregamos un id aleatorio */
        newTarea.id = Date.now();
        setTareas([
            ...tareas,
            newTarea
        ]);
    }
    /*devuleve una lista de tareas menos la tarea que coincide */
    const deleteTarea=(tareaId)=>{
        setTareas(tareas.filter(tarea=>tarea.id !== tareaId));
    }

    return[
        tareas,
        addTarea,
        deleteTarea
    ];
}

/* tareas, addTarea, deleteTarea */