import React, { Fragment, useState } from 'react';
import { Error } from './Error';

export function Pregunta(props) {

    const { guardarPresupuesto, guardarPreguntaPresu } = props;

    // definir el state
    const [cantidad, guardarCantidad] = useState(0);
    const [error, guardarError] = useState(false);

    const agregarPresupuesto = e => {
        e.preventDefault();

        // Validar
        if (cantidad < 1 || isNaN(cantidad)) {
            guardarError(true);
            return;
        }

        // Si se pasa la validacion
        guardarError(false);
        // Le pasamos el presupuesto al App.js
        guardarPresupuesto(cantidad);
        guardarPreguntaPresu(false);
    }


    return(
        <Fragment>
            <h2>Coloca tu Presupuesto</h2>

            {error 
            ? <Error mensaje="El presupuesto es Incorrecto"/>
            : null 
            }
            <form onSubmit={agregarPresupuesto}>
                <input 
                    type="number"
                    className="u-full-width"
                    placeholder="Agrega tu Presupuesto"
                    onChange={e => guardarCantidad( Number(e.target.value) )}
                />
                <input 
                    type="submit"
                    className="button-primary u-full-width"
                    value="Definir Presupuesto"
                    // onChange={}
                />
            </form>
        </Fragment>
    )
}