import React, { useState } from 'react';
import { crearNuevoProduAction } from '../actions/productoActions';
import { useDispatch, useSelector } from 'react-redux';
import { mostrarAlerta, ocultarAlertaAction } from '../actions/alertaActions';
// el history es como el Router de Angualr
const NuevoProducto = ({history}) => {

    // sate del componente
    const [nombre, guardarNombre] = useState('');
    const [precio, guardarPrecio] = useState(0);

    // utilizar use dispatch y te crea una funcion
    const dispatch = useDispatch();

    // Acceder al state del store
    const cargando = useSelector(state => state.productos.loading);
    const error = useSelector(state => state.productos.error);
    const alerta = useSelector(state => state.alerta.alerta);


    // manda a llamar el action de productoAction
    const agregarProducto = producto => dispatch(crearNuevoProduAction(producto));

    const onSubmitNuevoProducto = e => {
        e.preventDefault();
        
        // Validar Formulario
        if (nombre.trim() === '' || precio <= 0) {
            
            const alerta = {
                msg: 'Ambos campos son obligatorios',
                clases: 'alert alert-danger text-center text-uppercase p3'
            }
            dispatch(mostrarAlerta(alerta));

            return;
        }
        // si no hay errores
        dispatch(ocultarAlertaAction());
        
        // Crear el nuevo Producto
        agregarProducto({
            nombre,
            precio
        });

        // redireccionar al home
        history.push('/');
    }
    
    return (
        <div className="row justify-content-center">
            <div className="col-md-8">
                <div className="card">
                    <div className="card-body">
                        <h2 className="text-center mb-4 font-weight-blod">
                            Agregar Nuevo Producto
                        </h2>

                        {alerta ? <p className={alerta.clases}>{alerta.msg}</p>: null}

                        <form onSubmit={onSubmitNuevoProducto}>
                            <div className="form-group">
                                <label>Nombre Producto</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Nombre Producto"
                                    name="nombre"
                                    value={nombre}
                                    onChange={e => guardarNombre(e.target.value)}
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
                                    onChange={e => guardarPrecio(Number(e.target.value))}
                                />
                            </div>

                            <button 
                                type="submit"
                                className="btn btn-primary font-weigth-blod text-uppercase d-block w-100">
                                    Agregar
                            </button>
                        </form>

                        { cargando ? <p>Cargando</p> : null }
                        
                        { error ? <p className="alert alert-danger p2 mt-4 text-center">Hubo un error</p> : null }
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default NuevoProducto;