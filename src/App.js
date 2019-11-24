import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

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

function App() {
  return (
    <div className="App">
      <header className="App-header"> 
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
       {/* Nuestro primer componente */}
        <Hello title='hola mundo' />
        <Hello2 title='hola mundo con arrow fuction' />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
