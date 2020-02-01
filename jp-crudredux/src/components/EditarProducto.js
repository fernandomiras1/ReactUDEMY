import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { editarPrdocutoAction } from '../actions/productoActions';

const EditarProducto = () => {

    // nuevo state producto
    const [producto, guardarProducto] = useState({
        nombre: '',
        precio: ''
    });

    // Producto a editar
    const productoEditar = useSelector(state => state.productos.productoEditar);
    const { nombre, precio, id} = producto;

    // llenar el state automaticamente
    useEffect(() => {
        guardarProducto(productoEditar);

    }, [productoEditar])

    const onSubmitEditar = e => {
        e.prevetDefault();
        editarPrdocutoAction();
    }
    return ( 
        <div className="row justify-content-center">
            <div className="col-md-8">
                <div className="card">
                    <div className="card-body">
                        <h2 className="text-center mb-4 font-weight-blod">
                            Editar Producto
                        </h2>

                        <form onSubmit={onSubmitEditar}>
                            <div className="form-group">
                                <label>Nombre Producto</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Nombre Producto"
                                    name="nombre"
                                    value={nombre}
                                />
                            </div>
                        
                            <div className="form-group">
                                <label>Precio Producto</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    placeholder="Precio Producto"
                                    name="precio"
                                    value={precio}
                                />
                            </div>

                            <button 
                                type="submit"
                                className="btn btn-primary font-weigth-blod text-uppercase d-block w-100">
                                    Guardar Cambios
                            </button>
                            </form>
                        </div>
                    </div>
            </div>
        </div>
     );
}
 
export default EditarProducto;