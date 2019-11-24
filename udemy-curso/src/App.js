import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ConditionalSection from './sections/conditional'

// Forma 1
function  Hello(props) {
  return <h2>{props.title}</h2>
}
// De otra forma con arrow function
const Hello2 = (props) => <h2>{props.title}</h2>

// De otra forma con clases. La mejor forma de hacerlo
class Hello3 extends Component {
  // como minimo tiene que tener un metodo que se llame render. No lleva parametros
  render() {
    return <h2>{this.props.title}</h2>
  }
}

// Usamos los state ( Cambios de estado)
class Contador extends Component {
  constructor(props) {
    super(props)
    this.state = { contador: this.props.contadorInicial }
    // para actualizar el valor usamos setState
    setInterval(() => {
      this.setState({ contador: this.state.contador + 1 })
    }, 1000);
  }
  render() {
    // const contador = 0
    // Nos comunicamos con el componente hijo
    return <ContadorNumero numero={this.state.contador} />  }
}


// Este es un componente hijo del Componente padre que seria Contador
class ContadorNumero extends Component {
  render() {
    console.log('ContadorNumero render()');
  return <span>{this.props.numero}</span>
  }
}

// De esta forma especificamos un valor por defecto a la variable contadorInicial
Contador.defaultProps = {
  contadorInicial: 0
}



class Text extends Component {
  render() {
    // destructuracion del objeto para achicar codigo. 
    // Se usa en la primera linea del render.
    const {
      isActivated,
      arrayOfNumbers,
      multiply,
      objectWithInfo,
      title
    } = this.props;

    const textoSegunBool = isActivated ? 'On' : 'Off';
    // hago un map al array y lo multiplico por dos 
    const mappedNumbers = arrayOfNumbers.map(multiply);
    return (
      <div>
        {title}
        <p>{this.props.text}</p>
        <p>{this.props.number}</p>
        <p>{textoSegunBool}</p>
        <p>{mappedNumbers.join(', ')}</p>
        <p>{objectWithInfo.key}</p>
      </div>
    )
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header"> 
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
       {/* Nuestro primer componente */}
        <Hello title='Hola Mundo' />
        <Hello2 title='hola mundo con arrow fuction' />
        <Hello3 title='hola mundo con una clase' />
        <Contador contadorInicial={100}/>
        <Text
          arrayOfNumbers={[2,3,10]}
          objectWithInfo={{ key: '1 valor', key2: '2 valor'}}
          isActivated
          multiply={(number) => number * 2}
          number={2}
          text='hola mundo con arrow fuction'
          title={<h1>Este es el Titulo</h1>}
        />

        {/* Renderizado Condicional ( Ejemplo practico) */}
        <ConditionalSection />
        
      </header>
    </div>
  );
}

export default App;