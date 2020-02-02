import React, { Fragment, useEffect } from 'react';
import { obetenerProductosAction } from '../actions/productoActions';
import { useDispatch, useSelector } from 'react-redux';
import Producto from './Producto';

const Productos = () => {

    const dispatch = useDispatch();

    useEffect(() => {

        // Consultar la API
        const cargarProductos = () => dispatch( obetenerProductosAction() );
        cargarProductos();
        // eslint-disable-next-line
    }, []);

    // obtener el state
    const productos = useSelector( state => state.productos.productos);
    const error = useSelector( state => state.productos.error);
    const cargando = useSelector( state => state.productos.loading);

    return ( 
        <Fragment>
            <h2 className="text-center my-5">Listado de Productos</h2>

            {error ? <p className="font-weight-bold alert alert-danger text-center mt-4">Hubo un error</p>
                : null
            }

            {cargando ? <p className="text-center">Cargando...</p> : null}
            
            <table className="table table-striped">
                <thead className="bg-primary table-dark">
                    <tr>
                        <th scope="col">Nombre</th>
                        <th scope="col">Precio</th>
                        <th scope="col">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    { productos.length === 0 ? 'No hay productos' : (
                        productos.map(prod => (
                            <Producto
                                key={prod.id}
                                producto={prod}
                            />
                        ))
                    )}
                </tbody>
            </table>
        </Fragment>
     );
}
 
export default Productos;