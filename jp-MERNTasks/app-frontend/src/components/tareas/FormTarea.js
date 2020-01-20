import React, { useContext } from 'react';
import proyectoContext from '../../context/proyectos/proyectoContext';

const FormTarea = () => {

    // Extraer proyecto seleccionado de state inicial
    const proyectosContext = useContext(proyectoContext);
    const { proyecto } = proyectosContext;

    // Si no hay proyecto seleccionado
    if (!proyecto) return null;

    // Array destructuring para extraer el proyecto actual
    const [proyectoActual] = proyecto;

    const onSubmit = e => {
        e.preventDefault();

        // validar

        // pasar la validacion

        // Agregar la nueva tarea al state de tarea

        // reiniciar el form
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
                    />
                </div>
                <div className="contenedor-input">
                    <input
                        type="submit"
                        className="btn btn-block btn-submit btn-primario"
                        value="Agregar Tarea"
                    />
                </div>
            </form>
        </div>
     );
}
 
export default FormTarea;