import {
    FORMULARIO_PROYECTO,
    OBTENER_PROYECTO,
    AGREGAR_PROYECTO,
    VALIDAR_FORMULARIO,
    PROYECTO_ACTUAL,
    ELIMINAR_PROYECTO
} from "../../types";

export default (state, action) => {
    switch(action.type) {

        case FORMULARIO_PROYECTO:
            return {
                ...state,
                formulario: true
            }
        case OBTENER_PROYECTO:
            return {
                ...state,
                proyectos: action.payload
            }
        case AGREGAR_PROYECTO:
            return {
                ...state,
                proyectos: [...state.proyectos, action.payload], // seria como un push, lo agrega en el arrego que ya teniamos
                formulario: false,
                errorFormulario: false
            }
        case VALIDAR_FORMULARIO:
            return {
                ...state,
                errorFormulario: true
            }
        case PROYECTO_ACTUAL:
            return {
                ...state,
                proyecto: state.proyectos.filter(proyecto => proyecto.id === action.payload)
            }
        case ELIMINAR_PROYECTO:
            return {
                ...state,
                proyectos: state.proyectos.filter(proyecto => proyecto.id !== action.payload),
                proyecto: null
            }
        default: 
            return state;
    }
}