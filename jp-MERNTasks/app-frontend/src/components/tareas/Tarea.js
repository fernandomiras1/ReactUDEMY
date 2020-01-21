import React, { useContext } from 'react';
import tareaContext from '../../context/tareas/tareaContext';
import proyectoContext from '../../context/proyectos/proyectoContext';

const Tarea = ({tarea}) => {

    // Obtener el state del formulario
    const proyectosContext = useContext(proyectoContext);
    const { proyecto } = proyectosContext;

    // Obtener la funcion del context de tarea
    const tareasContext = useContext(tareaContext);
    const { eliminarTarea, obtenerTareas } = tareasContext;

    // Array destructuring para extraer el proyecto actual
    const [proyectoActual] = proyecto;

    const tareaEliminar = id => {
       eliminarTarea(id);
       obtenerTareas(proyectoActual.id)
    }
 
    return ( 
        <li className="tarea sombra">
            <p>{tarea.nombre}</p>

            <div className="estado">
                {tarea.estado
                ?
                    (
                        <button className="completo" type="button">
                            Completo
                        </button>
                    )
                :  
                    (
                        <button className="incompleto" type="button">
                            Incompleto
                        </button>
                    )
                }
            </div>

            <div className="acciones">
                <button type="button" className="btn btn-primario">
                    Editar
                </button>
                <button 
                    type="button"
                    className="btn btn-secundario"
                    onClick={() => tareaEliminar(tarea.id)}
                    >Eliminar
                </button>
            </div>
        </li>
     );
}
 
export default Tarea;