import React, { Component } from 'react'

class ComponenteADesmontar extends Component {
  state = { windowWidth: 0 }

  _updateStateWithWindowWidth = () => {
    console.log('_updateStateWithWindowWidth')
    this.setState({ windowWidth: document.body.clientWidth })
  }

  componentDidMount () {
    this._updateStateWithWindowWidth()
    window.addEventListener(
      'resize',
      this._updateStateWithWindowWidth
    )
  }
    // Se ejecuta una vez, y es cuando se cierra el componente
    //se ocupa para desmotar el componente, seria como el ngOnDestroy()
    componentWillUnmount () {
    console.log('componentWillUnmount')
    // rompemos la subscipcion del addEventListener
    window.removeEventListener(
      'resize',
      this._updateStateWithWindowWidth
    )
  }

  render () {
    return (
      <div>
        <p>Ancho de la ventana: {this.state.windowWidth}</p>
      </div>
    )
  }
}

class EjemploDeComponentWillUnmount extends Component {
  state = { mostrarComponente: true }

  render () {

    if (this.state.mostrarComponente) {
      return (
        <div>
          <h4>Ciclo de desmontaje: componentWillUnmount = ngOnDestroy()</h4>
          <ComponenteADesmontar />
          <button onClick={() => this.setState({ mostrarComponente: false })}>
            Desmontar componente
          </button>
        </div>
      )
    }

    return (
      <button onClick={() => this.setState({ mostrarComponente: true })}>
        Montar componente
      </button>
    )
  }
}

export default EjemploDeComponentWillUnmount