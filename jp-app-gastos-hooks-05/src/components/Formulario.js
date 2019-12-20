import React, { useState } from 'react';
import { Error } from './Error';
import shortid from 'shortid';

export function Formulario(props) {

    const { guardarGasto, guardarCrearGasto } = props;

    // state
    const [nombreGasto, guardarNombreGasto] = useState('');
    const [cantGasto, guardarCantGasto] = useState(0);
    const [error, guardarError] = useState(false);

    // Cuado se agrega el gasto
    const agregarGasto = e => {
        e.preventDefault();

        // Validar
        if (cantGasto < 1 || isNaN( cantGasto ) || nombreGasto === '') {
            guardarError(true);
            return;
        }

        // Construir objeto de gasto
        const gasto = {
          nombreGasto,
          cantGasto,
          id: shortid.generate()
        }

        // pasar el gasto al componente principal
        guardarGasto(gasto);
        guardarCrearGasto(true);

        // Elimiar alerta
        guardarError(false);

        // Resetear el form
        guardarNombreGasto('');
        guardarCantGasto('');
    }


    return(
      <form onSubmit={agregarGasto}>
          <h2>Agrega tus Gastos Aquí</h2>

          { error
          ? <Error mensaje='Ambos campos son obligatorios o Presupuesto Incorrecto'/>
          : null
          }

          <div className="campo">
              <label htmlFor="name">Nombre Gasto</label>
              <input 
                type="text"
                name="name"
                className="u-full-width"
                placeholder="Ej. Trasporte"
                onChange={e => guardarNombreGasto(e.target.value)}
                value={nombreGasto}
              />
          </div>
      
          <div className="campo">
              <label htmlFor="catGato">Cantidad Gasto</label>
              <input 
                type="number"
                name="catGato"
                className="u-full-width"
                placeholder="Ej. 300"
                onChange={e => guardarCantGasto(Number(e.target.value))}
                value={cantGasto}
              />
          </div>

          <input 
                type="submit"
                className="button-primary u-full-width"
                value="Agregar Gasto"
              />
      </form>  
    )
}