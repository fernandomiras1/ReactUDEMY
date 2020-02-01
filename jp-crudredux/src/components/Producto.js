import React from 'react';
import { Link, useHistory } from 'react-router-dom';
// Redux
import { borrarProductoAction, obtenerProductoEditar } from '../actions/productoActions';
import { useDispatch } from 'react-redux';
import Swal from 'sweetalert2';

const Producto = ({producto}) => {
    const { nombre, precio, id} = producto;

    const dispatch = useDispatch();
    // habilitar history para redireccionar
    const history = useHistory();
    // Confirmar si desea eliminarlo
    const confirarEliminarProducto = id => {
        
        // Preguntar al usuario
        Swal.fire({
            title: '¿Estas Seguro?',
            text: "Un producto que se elimina no se puede recuperar!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, eliminar!',
            cancelButtonText: 'Cancelar'
          }).then((result) => {
            if (result.value) {
                // Pasarlo al action
                dispatch(borrarProductoAction(id));
            }
          });
        console.log(id);
    }

    // funcion que redirige de forma programada
    const redireccionarEdicion = producto => {
        dispatch(obtenerProductoEditar(producto))
        history.push(`/productos/editar/${producto.id}`);
    }

    return ( 
        <tr>
            <td>{nombre}</td>
            <td><span className="font-weight-bold">$ {precio}</span></td>
            <td className="acciones">
                <button
                onClick={() => redireccionarEdicion(producto)}
                type="button" 
                className="btn btn-primary mr-2"
                >Editar
                </button>
                <button
                    type="button"
                    className="btn btn-danger"
                    onClick={() => confirarEliminarProducto(id)}
                >Eliminar</button>
            </td>
        </tr>
     );
}

export default Producto;