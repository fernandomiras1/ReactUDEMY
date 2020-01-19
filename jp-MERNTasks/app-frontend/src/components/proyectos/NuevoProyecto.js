import React, { Fragment, useState, useContext } from 'react';
import proyectoContext from '../../context/proyectos/proyectoContext';

const NuevoProyecto = () => {

    // Obtener el state del formulario
    const proyectosContext = useContext(proyectoContext);
    const { 
        formulario,
        errorFormulario,
        mostrarFormulario,
        agregarProyecto,
        mostrarError
    } = proyectosContext;

    // State para Proyecto
    const [proyecto, guardarProyecto ] = useState({
        nombre: '',
    });

    // Lee los contenidos del input
    const onChangeProyecto = e => {
        guardarProyecto({
            ...proyecto,
            [e.target.name]: e.target.value
        })
    }

    // Cuando el usuario envia un proyecto
    const onSubmitProyecto = e => {
        e.preventDefault();

        // Validar el proyecto
        if (nombre === '') {
            mostrarError();
            return;
        }

        // Agregar al State
        agregarProyecto(proyecto)

        // Reinicar el form
        guardarProyecto('');
    }

    // Extraer nombre de proyecto
    const { nombre } = proyecto;

    return (
        <Fragment>
            <button
                onClick={() => mostrarFormulario()}
                type="button"
                className="btn btn-block btn-primario"
            >Nuevo Proyecto
            </button>

            {formulario 
            ? 
                (
                    <form onSubmit={onSubmitProyecto} className="formulario-nuevo-proyecto">
                        <input
                            type="text"
                            className="input-text"
                            placeholder="Nombre Proyecto"
                            name="nombre"
                            value={nombre}
                            onChange={onChangeProyecto}
                        />
                        <input
                            type="submit"
                            className="btn btn-primario btn-block"
                            value="Agregar Proyecto"
                        />
                    </form>
                )
            : null
            }

            {errorFormulario 
                ? <p className="mensaje error">El nombre del Proyecto es obligatorio</p>
                : null
            }
            
        </Fragment>
     );
}
 
export default NuevoProyecto;