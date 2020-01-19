import React, { Fragment, useState } from 'react';

const NuevoProyecto = () => {

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
        e.prevetDefault();

        // Validar el proyecto 

        // Agregar al State

        // Reinicar el form
        
    }

    // Extraer nombre de proyecto
    const { nombre } = proyecto;

    return (
        <Fragment>
            <button type="button" className="btn btn-block btn-primario">
                Nuevo Proyecto
            </button>

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
        </Fragment>
     );
}
 
export default NuevoProyecto;