import { 
    AGREGAR_PRODUCTO,
    AGREGAR_PRODUCTO_EXITO,
    AGREGAR_PRODUCTO_ERROR,
    COMENZAR_DESCARGA_PRODUCTOS,
    DESCARGA_PRODUCTOS_EXITO,
    DESCARGA_PRODUCTOS_ERROR,
    OBTENER_PRODUCTO_ELIMINAR,
    PRODUCTO_ELIMINADO_EXITO
} from "../types";
import clienteAxios from "../config/axios";
import Swal from "sweetalert2";

// Crear nuevos productos
export function crearNuevoProduAction(producto) {
    return async (dispatch) => {
        dispatch( agregarProducto() );

        try {
            // Insertar en la API
            await clienteAxios.post('/productos', producto);

            // Si todo sale bien, actualizar el state.
            dispatch( agregarProductoExito(producto) );

            // Alerta de exito
            Swal.fire(
                'Correcto',
                'El producto se agregó correctamente',
                'success'
            )
        } catch (error) {
            console.log(error);
            // Si hay un error cambiar el state.
            dispatch( agregarProductoError(true) );
            // Alerta de error
            Swal.fire({
                icon: 'error',
                title: 'Hubo un error',
                text: 'Hubo un error, intena de nuevo'
            });
        }
    }
}

const agregarProducto = () => ({
    type: AGREGAR_PRODUCTO,
    payload: true
});

// Si el produto se guarda en la base de datos
const agregarProductoExito = producto => ({
    type: AGREGAR_PRODUCTO_EXITO,
    payload: producto
});

// Si hubo un error
const agregarProductoError = estado => ({
    type: AGREGAR_PRODUCTO_ERROR,
    payload: estado
}); 

// Funcion que descarga los porductos de la base de datos
export function obetenerProductosAction() {
    return async (dispatch) => {
        dispatch(descargarProductos());

        try {
            const respuesta = await clienteAxios.get('/productos');
            dispatch( descargaProductosExitosa(respuesta.data))
        } catch (error) {
            dispatch( descargaProductosError())
        }
    }
}

const descargarProductos = () => ({
    type: COMENZAR_DESCARGA_PRODUCTOS,
    payload: true
});

const descargaProductosExitosa = productos => ({
    type: DESCARGA_PRODUCTOS_EXITO,
    payload: productos
});

const descargaProductosError = () => ({
    type: DESCARGA_PRODUCTOS_ERROR,
    payload: true
});

// Selecciona y elimina el producto
export function borrarProductoAction(id) {
    return async (dispatch) => {
        dispatch(obtenerProductoEliminar(id));

        try {
            await clienteAxios.delete(`/productos/${id}`);
            dispatch(eliminarProductoExito());
        } catch (error) {
            
        }
    }
}

const obtenerProductoEliminar = id => ({
    type: OBTENER_PRODUCTO_ELIMINAR,
    payload: id
});

const eliminarProductoExito = () => ({
    type: PRODUCTO_ELIMINADO_EXITO
});