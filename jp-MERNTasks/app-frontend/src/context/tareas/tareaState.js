import React, { useReducer } from 'react';
import TareaContext from './tareaContext';
import TareaReducer from './tareaReducer';
import {
    TAREAS_PROYECTO,
    AGREGAR_TAREA
} from '../../types/index';

const TareaState = props => {
    const initialState = {
        tareas: [
            {id: 1, proyectoId: 1, nombre: 'Elegir Plataforma', estado: true},
            {id: 2, proyectoId: 2, nombre: 'Elegir Colores', estado: false},
            {id: 3, proyectoId: 3, nombre: 'Elegir Plataformas de pago', estado: false},
            {id: 4, proyectoId: 4, nombre: 'Elegir Hosting', estado: true},
            {id: 5, proyectoId: 2, nombre: 'Elegir Plataformas de pago', estado: false},
            {id: 6, proyectoId: 1, nombre: 'Elegir Hosting', estado: true},
            {id: 7, proyectoId: 4, nombre: 'Elegir Hosting', estado: true},
            {id: 8, proyectoId: 4, nombre: 'Elegir Hosting', estado: true},
        ],
        tareasProyecto: null
    }

    // Crear dispatch y state
    const [state, dispatch] = useReducer(TareaReducer, initialState);

    // Obtener las tareas de un proyecto en especifico
    const obtenerTareas = proyectoId => {
        dispatch({
            type: TAREAS_PROYECTO,
            payload: proyectoId
        })
    }
    
    // Agregar una tarea al proyecto seleccionado
    const agregarTarea = tarea => {
        dispatch({
            type: AGREGAR_TAREA,
            payload: tarea
        })
    }
    return (
        <TareaContext.Provider
            value={{
                tareas: state.tareas,
                tareasProyecto: state.tareasProyecto,
                obtenerTareas,
                agregarTarea
            }}
        >
            {props.children}
        </TareaContext.Provider>
    )
}

export default TareaState;




