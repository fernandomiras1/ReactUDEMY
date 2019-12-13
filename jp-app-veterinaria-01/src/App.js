import React, { Component } from 'react';
// CCS
import './bootstrap.min.css';
// COMPONENTES
import { Header } from './components/Header';
import { NuevaCita } from './components/NuevaCita';
import { ListaCitas } from './components/ListaCitas';

class App extends Component {
  state = {
    citas: []
  }

  // cuando la aplicacion carga
  componentDidMount() {
    const citasStorage = localStorage.getItem('citas');
    if (citasStorage) {
      this.setState({
        citas: JSON.parse(citasStorage)
      })
    }
  }

  // cuando eliminamos o agregamos una nueva cita. 
  componentDidUpdate() {
    localStorage.setItem('citas', JSON.stringify(this.state.citas));
  }

  crearNuevaCita = datos => {
    // copiar el state actual. Seria como un puhs
    const citas = [...this.state.citas, datos]
    // Agregar el nuevo state
    this.setState({ citas });
  }

  // Eliminar las citas del state
  eliminarCita = id => {
     // Tomar una copia del state
     const citasActuales = [...this.state.citas];
     // utilizar filter para sacar el elemento ID del arreglo
     const citas = citasActuales.filter(cita => cita.id !== id);
     // Actualizar el state
     this.setState({
       citas
     })
  }
  
  render() { 
    return (  
      <div className="container">
        <Header
          titulo='Administrador Pacientes Veterinaria'
        />
        <div className="row">
          <div className="col-md-10 mx-auto">
            <NuevaCita 
              crearNuevaCita={this.crearNuevaCita}
            />
          </div>

          <div className="mt-5 col-md-10 mx-auto">
            <ListaCitas 
              citas={this.state.citas}
              eliminarCita={this.eliminarCita}
            />
          </div>
        </div>

      </div>
    );
  }
}
 
export default App;
