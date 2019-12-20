import React, { useState } from 'react';
import { Pregunta } from './components/Pregunta';
import { Formulario } from './components/Formulario';

function App() {

  // State Presupuesto
  const [ presupuesto, guardarPresupuesto] = useState(0);
  const [ preguntaPresu, guardarPreguntaPresu] = useState(true);
  const [ gasto, guardarGasto] = useState({});
  // Almacenamos los gastos en un arreglo de gastos.
  const [ gastos, guardarGastos] = useState([]);


  return (
    <div className="App">
      <header>
        <h1>Gasto Semanal</h1>
        <div className="contenido-principal contenido">
         { (preguntaPresu)
            ? 
              <Pregunta
              guardarPresupuesto={guardarPresupuesto}
              guardarPreguntaPresu={guardarPreguntaPresu}
              />
            : (
                <div className="row">
                  <div className="one-half column">
                    <Formulario 
                      guardarGasto={guardarGasto}
                    />
                  </div>
                  <div className="one-half column"></div>
                </div>
              )
         }
        </div>
      </header>
    </div>
  );
}

export default App;
