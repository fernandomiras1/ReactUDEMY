import React, { useContext, useState, useEffect } from 'react';
import proyectoContext from '../../context/proyectos/proyectoContext';
import tareaContext from '../../context/tareas/tareaContext';
import uuid from 'uuid';

const FormTarea = () => {

    // Extraer proyecto seleccionado de state inicial
    const proyectosContext = useContext(proyectoContext);
    const { proyecto } = proyectosContext;

    // Obtener la funcion del context de tarea
    const tareasContext = useContext(tareaContext);
    const { tareaSeleccionada,
            errorTarea,
            agregarTarea,
            validarTarea,
            obtenerTareas,
            acutalizarTarea,
            limpiarTarea
    } = tareasContext;
 
    // Effect que detecta si hay una tarea seleccioanda 
    useEffect(() => {

        if (tareaSeleccionada !== null) {
            guardarTarea(tareaSeleccionada);
        } else {
            guardarTarea({
                nombre: ''
            })
        }

    }, [tareaSeleccionada])

    // State del formulario
    const [tarea, guardarTarea] = useState({
        nombre: ''
    })

    // Si no hay proyecto seleccionado
    if (!proyecto) return null;

    // extraer el nombre del proyecto
    const { nombre } = tarea;

    // Array destructuring para extraer el proyecto actual
    const [proyectoActual] = proyecto;

    // Leer los valores del formulario
    const handleChange = e => {
        guardarTarea({
            ...tarea,
            [e.target.name]: e.target.value
        })
    }

    const onSubmit = e => {
        e.preventDefault();

        // validar
        if (nombre.trim() === '') {
            validarTarea();
            return;
        }
        
        // Si es edicion o es nueva tarea 
        if (tareaSeleccionada === null) {
            // tarea Nueva
   
            // Agregar la nueva tarea al state de tareaue
            tarea.proyectoId = proyectoActual.id;
            tarea.id = uuid.v4();
            tarea.estado = false;
            agregarTarea(tarea);
        } else {
            // Actualizar tarea existente
            acutalizarTarea(tarea);

            // Elimina tarea seleccionada del state
            limpiarTarea();
        }

        // Obtener y flirar las tareas del proyecto Acutal
        obtenerTareas(proyectoActual.id);

        // reiniciar el form
        guardarTarea({
            nombre: ''
        });
    }


    return ( 
        <div className="formulario">
            <form onSubmit={onSubmit}>
                <div className="contenedor-input">
                    <input
                        type="text"
                        className="input-text"
                        placeholder="Nombre Tarea..."
                        name="nombre"
                        value={nombre}
                        onChange={handleChange}
                    />
                </div>
                <div className="contenedor-input">
                    <input
                        type="submit"
                        className="btn btn-block btn-submit btn-primario"
                        value={tareaSeleccionada ? 'Editar Tarea': 'Agregar Tarea'}
                    />
                </div>
            </form>
            {errorTarea 
            ? <p className="mensaje error">EL nombre de la tarea es obligatorio</p>
            : null}

        </div>
     );
}
 
export default FormTarea;