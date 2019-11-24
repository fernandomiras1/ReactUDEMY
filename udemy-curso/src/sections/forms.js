import React, { Component } from 'react'

export default class Forms extends Component {
  constructor () {
    super()
    // guardamos todos los datos del formulario
    this.state = {
      inputName: '',
      inputTwitter: '@',
      inputTerms: true
    }
  }

  handleSubmit = (e) => {
    // evitamos que el boton haga submit
    e.preventDefault()
    console.log(this.state)
  }

  handleChange = (e) => {
    console.log('handleChange')
    console.log(e.target.checked)
    // actualizamos el valor en el state
    this.setState({ inputTerms: e.target.checked })
  }

  render () {
    return (
      <div>
        <h4>Formularios</h4>
        <form onSubmit={this.handleSubmit}>
          <p>
          {/* htmlFor: Para cuando hagamos click en el label se active el input asiciado a su id */}
            <label htmlFor='name'>Nombre: </label>
            <input
              id='name'
              name='userName'
              // Lo hacemos manualamente a sus estados internos.
              onChange={e => this.setState({ inputName: e.target.value })}
              placeholder='Introduce el nombre'
              //Para obtener el valor del input seria como un ngModel en Angular
              ref={inputElement => this.inputName = inputElement}
              // Valor inicial
              value={this.state.inputName} />
          </p>

          <p>
            <label htmlFor='twitter'>Twitter:</label>
            <input
              id='twitter'
              name='twitterAccount'
              onChange={e => this.setState({ inputTwitter: e.target.value })}
              placeholder='Introduce tu Twitter'
              value={this.state.inputTwitter} />
          </p>

          <p>
            <label>
              <input
                checked={this.state.inputTerms}
                // Cuando el campo cambia de valor
                onChange={this.handleChange}
                type='checkbox' />
              Accepted terms
            </label>
          </p>

          <button>Enviar</button>
        </form>
      </div>
    )
  }
}