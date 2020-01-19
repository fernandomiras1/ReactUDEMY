import React from 'react';
import Proyecto from './Proyecto';

const ListadoProyectos = () => {

    const proyectos = [
        {id: 1, nombre: 'Tienda Virtual'},
        {id: 2, nombre: 'Tienda CASA'},
        {id: 3, nombre: 'My Money System'}
    ];


    return ( 
        <ul className="listado-proyectos">
            {proyectos.map(proyecto => (
                <Proyecto key={proyecto.id}
                    proyecto={proyecto}
                />
            ))}
        </ul>
     );
}
 
export default ListadoProyectos;