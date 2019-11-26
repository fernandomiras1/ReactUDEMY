import React, { Component, PureComponent } from 'react'
import PropTypes from 'prop-types'

// imagenes de animales en un objeto
const ANIMAL_IMAGES = {
  panda: 'https://goo.gl/oNbtoq',
  cat: 'https://goo.gl/PoQQXb',
  dolphin: 'https://goo.gl/BbiKCd'
}
// Obtenemos la key de ANIMAL_IMAGES, en este caso es el nombre
// Conendra un array con todos los key
const ANIMALS = Object.keys(ANIMAL_IMAGES)

class AnimalImage extends Component {
  state = { src: ANIMAL_IMAGES[this.props.animal] }

  // Nos permite ejecutar codigo justo cuando al componente le va a llegar nuevas props
  // Seria como un ngChanges en algular con los input
  componentWillReceiveProps (nextProps) {
    console.clear()
    console.log('1. componentWillReceiveProps', nextProps)
    // Actualizamos es state con el nuevo animal que viene en la props
    // de esta forma la imagen puede cambiar.
    this.setState({ src: ANIMAL_IMAGES[nextProps.animal] })
  }

  // determina si el componente se debe renderizar nuevamente
  // debe devovler un valor booleano si es true entra en el metodo render(), 
  // si es false evitara un nuevo renderizado del componente
  // shouldComponentUpdate (nextProps) {
  //   console.log('2. shouldComponentUpdate', nextProps)
  //   // si el animal es distinto al proximo se actualiza el render
  //   return this.props.animal !== nextProps.animal
  // }

  // Se ejecuta antes del metodo render. NO es muy utilizado
  // Nuna hay que actalizar el state aqui, ya que puedes generar un loop infinito
  componentWillUpdate (nextProps, nextState) {
    console.log('3. componentWillUpdate', nextProps, nextState)
    const img = document.querySelector('img')
    console.log('from img element', { alt: img.alt })
    // web animations api
    // justo en el intate anterior podemos aplicar una animacion en la imagen antes de que se renderize
    img.animate([ {
      filter: 'blur(0px)'
    }, {
      filter: 'blur(5px)'
    }], {
      duration: 1000,
      easing: 'ease'
    })
  }

  // Cuando se terina el render entra a este ciclo.
  // se disparara justo despues del renderizado
  componentDidUpdate (prevProps, prevState) {
    console.log('4. componentDidUpdate')
    // recuperamos la imagen de dom
    const img = document.querySelector('img')
    img.animate([
      {
        filter: 'blur(0px)'
      },
      {
        filter: 'blur(5px)'
      }
    ], {
      duration: 1500,
      easing: 'ease'
    })
    console.log('from img element', { alt: img.alt })
  }

  render () {
    console.log('-> render')
    return (
      <div>
        <p>El animal selecionado es {this.props.animal}</p>
        <img style={{width: '100%'}}
          alt={this.props.animal}
          src={this.state.src}
          width='250'
        />
      </div>
    )
  }
}

AnimalImage.propTypes = {
  // es una de los posibles elementos de este array.
  // animal: PropTypes.oneOf(['cat', 'dolphin', 'panda'])
  animal: PropTypes.oneOf(ANIMALS)
}


// PureComponent: Hace una comparacion como el shouldComponentUpdate superficial,
// detecta automaticamente si tiene que renderizar el componente.key
// devuevle false por defecto si no detecta cambios superficialemente en sus props o state
class EjemploDeCicloDeActualizacion extends PureComponent {
  state = { animal: 'panda' }

  // Creamos nuestros botones de forma programatica
  _renderAnimalButton = (animal) => {
    return (
      <button
        // disabled={animal === this.state.animal}
        key={animal}
        onClick={() => this.setState({ animal })}>
        {animal}
      </button>
    )
  }

  render () {
    return (
      <div style={{width: '80%'}}>
        <h4>Ciclo de Actualización, Ejemplo de: ComponentDidUpdate</h4>

        {/* // el map es lo mismo que un ngFor, Lo hace en ANIMAL que es un array de string */}
        {ANIMALS.map(this._renderAnimalButton)}
        <AnimalImage animal={this.state.animal} />
      </div>
    )
  }
}

export default EjemploDeCicloDeActualizacion