import React, {useState, Fragment} from 'react';

export function App() {
  // useState retorna 2 funcionas
  // El state actual = this.state
  // Funcion que actualiza el state this.setState()
  const [cita, guardarCita] = useState([]); // valor inicial

  return(
    <Fragment>
      <h1>Administrador de Pacientes</h1>
      <div className="container">
        <div className="row">
          <div className="one-hslf column"></div>
          <div className="one-hslf column"></div>
        </div>
      </div>
    </Fragment>
  )

}