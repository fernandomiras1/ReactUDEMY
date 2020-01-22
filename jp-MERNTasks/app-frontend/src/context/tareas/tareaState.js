import React, { useReducer } from 'react';
import TareaContext from './tareaContext';
import TareaReducer from './tareaReducer';
import {
    TAREAS_PROYECTO,
    AGREGAR_TAREA,
    VALIDAR_TAREA,
    ELIMINAR_TAREA,
    ESTADO_TAREA,
    TAREA_ACTUAL,
    ACTUALIZAR_TAREA,
    LIMPIAR_TAREA
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
        tareasProyecto: null,
        errorTarea: false,
        tareaSeleccionada: null
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

    // Valida y muestra un error en caso de que sea necesario
    const validarTarea = () => {
        dispatch({
            type: VALIDAR_TAREA
        })
    }
    
    // Eliminar tarea por id 
    const eliminarTarea = id => {
        dispatch({
            type: ELIMINAR_TAREA,
            payload: id
        })
    }

    // Cambia el estado de cada tarea
    const cambiarEstadoTarea = tarea => {
        dispatch({
            type: ESTADO_TAREA,
            payload: tarea
        })
    }

    // Extrae una tarea para edicion
    const guardarTareaActual = tarea => {
        dispatch({
            type: TAREA_ACTUAL,
            payload: tarea
        })
    }
    
    // Edita o modifica una tarea
    const acutalizarTarea = tarea => {
        dispatch({
            type: ACTUALIZAR_TAREA,
            payload: tarea
        })
    }

    // Elimina la tarea Seleccionada
    const limpiarTarea = () => {
        dispatch({
            type: LIMPIAR_TAREA
        })
    }

    return (
        <TareaContext.Provider
            value={{
                tareas: state.tareas,
                tareasProyecto: state.tareasProyecto,
                errorTarea: state.errorTarea,
                tareaSeleccionada: state.tareaSeleccionada,
                obtenerTareas,
                agregarTarea,
                validarTarea,
                eliminarTarea,
                cambiarEstadoTarea,
                guardarTareaActual,
                acutalizarTarea,
                limpiarTarea
            }}
        >
            {props.children}
        </TareaContext.Provider>
    )
}

export default TareaState;




