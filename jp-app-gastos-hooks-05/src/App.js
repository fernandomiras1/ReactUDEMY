import React, { useState, useEffect } from 'react';
import { Pregunta } from './components/Pregunta';
import { Formulario } from './components/Formulario';
import { Listado } from './components/Listado';
import { ControlPresupuesto } from './components/ControlPresupuesto';

function App() {

  // State Presupuesto
  const [ presupuesto, guardarPresupuesto] = useState(0);
  const [ restante, guardarRestante] = useState(0);
  const [ preguntaPresu, guardarPreguntaPresu] = useState(true);
  const [ crearGasto, guardarCrearGasto] = useState(false);
  const [ gasto, guardarGasto] = useState({});
  // Almacenamos los gastos en un arreglo de gastos.
  const [ gastos, guardarGastos] = useState([]);

  // componentDidMound - Cuando esta listo el componente
  useEffect(() => {
    // la primera vex que se renderiza va a estar en false, cuando se agrege en el formulario pasa a true.
    if (crearGasto) {
      // generamos en arreglo
      const listadoGastos = [...gastos, gasto];
      guardarGastos(listadoGastos);


      // restar el presupuesto
      const presuRestante = restante - gasto.cantGasto;
      guardarRestante(presuRestante);
      // Una vez que se agrega, lo ponemos como false
      guardarCrearGasto(false);
    }

  }, [crearGasto, gastos, gasto, restante])


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
                guardarRestante={guardarRestante}
              />
            : (
                <div className="row">
                  <div className="one-half column">
                    <Formulario 
                      guardarGasto={guardarGasto}
                      guardarCrearGasto={guardarCrearGasto}
                    />
                  </div>
                  <div className="one-half column">
                    <Listado 
                      gastos={gastos}
                    />

                    <ControlPresupuesto 
                      presupuesto={presupuesto}
                      restante={restante}
                    />
                  </div>
                </div>
              )
         }
        </div>
      </header>
    </div>
  );
}

export default App;
