import { 
    AGREGAR_PRODUCTO,
    AGREGAR_PRODUCTO_EXITO,
    AGREGAR_PRODUCTO_ERROR
} from "../types";

// Crear nuevos productos
export function crearNuevoProduAction(producto) {
    return (dispatch) => {
        dispatch( agregarProducto() );

        try {
            dispatch( agregarProductoExito(producto) );
        } catch (error) {
            dispatch( agregarProductoError(true) );
        }
    }
}

const agregarProducto = () => ({
    type: AGREGAR_PRODUCTO
});

// Si el produto se guarda en la base de datos
const agregarProductoExito = producto => ({
    type: AGREGAR_PRODUCTO_EXITO
});

// Si hubo un error
const agregarProductoError = error => ({
    type: AGREGAR_PRODUCTO_ERROR
});