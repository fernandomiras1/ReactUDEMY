import { AGREGAR_PRODUCTO } from "../types";

// cada reducer tiene su propio state
const initialState = {
    productos: [],
    error: null,
    loading: false
}


export default function(state = initialState, action) {
    switch (action.type) {
        case AGREGAR_PRODUCTO:
            return {
                ...state,
                loading: true
            }
    
        default:
            return state;
    }
}