import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ConditionalSection from './sections/conditional'
import cars from './data/cars.json'
import Forms from './sections/forms'
import PropTypes from 'prop-types'
import ComponentWillMount from './sections/life-cycle/componentWillMount'

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
  // Cliclo de vida constructor: es lo primero que se inicializar y lo hace por unica vez
  constructor(props) {
    // este método llama al constructor de Component padre en este caso Component
    super(props) 
    // inicializamos el state de nuestro componente
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


// ------- COMPONENTE TEXTO ------- // 
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

// ------- COMPONENTES Array ------- // 

class CarItem extends Component {
  render() {
    const { car, id } = this.props

    return (
      <li>
        <p><strong>Key: </strong>{ id}</p>
        <p><strong>Nombre: </strong>{car.name}</p>
        <p><strong>Marca: </strong>{car.company}</p>
      </li>
    )
  }
}
class ManejoArray extends Component {
  render () {
    const numbers = [1,1,3,4,5]
    return (
      <div>
        <h4>Trabajando con Listas</h4>
        {numbers.map((numero, index) => {
          // en react necesitamos especificar una key unica 
        return <p key={index}>Soy el Numero {numero}</p>
        })}


        <h4>Trabajando con Listas con Objetos</h4>
        <ul>
          {
            cars.map(car => {
              return <CarItem id={car.id} key={car.id} car={car}/>
            })
          }
        </ul>
      </div>
    )
  }
}


// ------- COMPONENTES Evetos ------- // 

class Eventos extends Component {

  constructor() {
    super()
    this.state = { mouseX: 0, mouseY: 0}

     // bindeamos el contexto al método
    // this.handleClick = this.handleClick.bind(this)
  }

  handleClick(e) {
    console.log(e);
    console.log(e.nativeEvent);
    alert('hola');
  }
  
  // Se usa arrow function en los metodos donde necesitemos enlazar el contexto correcto
  handleMouseMove = (e) => {
    const { clientX, clientY } = e
    this.setState({ mouseX: clientX, mouseY: clientY })
  }

  render() {
    const { car, id } = this.props

    return (
      <div style={{width: '80%'}}>
        <h4>Eventos</h4>
        <button onClick={this.handleClick}>Hola mundo</button>
        <div 
          onMouseMove={this.handleMouseMove}
          style={{border: '1px solid', marginTop: 10, padding: 10}}>
          <p>{this.state.mouseX}, {this.state.mouseY}</p>
        </div>
      </div>
    )
  }
}


// ------- COMPONENTES Children ------- // 

// Children: Siver para hacer hacer layout o compoenetes ui/ux reutilizables


class Box extends Component {
  render () {
    return (
      <div style={{ border: '1px solid', margin: 10, padding: 10 }}>
        {this.props.children}
      </div>
    )
  }
}

// Creamos un compoente llamado Articulo haciendo referencia a un blog
class Article extends Component {
  // Definimos prototipar los props. para evitar errores.
  static propTypes = {
    // la prop author tiene q ser un string y ser requerida
    author: PropTypes.string.isRequired
  }
  
  render () {

    const { author, children, date, title} = this.props

    return (
      <section>
        <h2>{title}</h2>
        {/* si autor no esta definido, no lo renderiza */}
        {author && <p><em>Escrito por {author}</em></p>}
        <Box>{date}</Box>
        <article>
          {children}
        </article>
      </section>
    )
  }
}

class Children extends Component {
  render() {
    return (
      <div>
        <h4>Children propos</h4>
        <Box>soy un children</Box>
        <Box>otro soy un children</Box>

        <Article
          author='Miguel'
          // Nos devuele la fecha formateada como dd/MM/YYYY
          date={new Date().toLocaleDateString()}
          title='Artículo sobre la prop children'
        >
          <p>El contenido que envolvemos dentro del componente Article será enviado al componente como this.props.children.</p>
          <strong>Y mantiene las etiquetas y componentes que hayáis añadido dentro</strong>
        </Article>
        <Article
          author='Miguel'
          date={new Date().toLocaleDateString()}
          title='Artículo 2'
        >
          <p>El contenido que envolvemos dentro del componente Article será enviado al componente como this.props.children.</p>
          <strong>Y mantiene las etiquetas y componentes que hayáis añadido dentro</strong>
        </Article>
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
        {/* Trabajando con array */}
        <ManejoArray />
        <Eventos />
        {/* Trabajando con Formularios */}
        <Forms />
        {/* Trabajando con Children */}
        <Children />
        {/* CICLOS DE VIDA DE LOS COMPONENTES  */}
        <ComponentWillMount />
        
      </header>
    </div>
  );
}

export default App;