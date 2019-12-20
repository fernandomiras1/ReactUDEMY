import React, {useState, useEffect} from 'react';
import axios from 'axios';

function Frase({frase}) {
  return (
    <div className="frase">
      <h1>{frase.quote}</h1>
      <p>- {frase.author}</p>
    </div>
  )
}

function App() {

  // obtenerFrase: lo que me va a traer la API. la guaramos en la varaible frase.
  const [frase, obtenerFrase] = useState({});

  const consultarAPI = async () => {
      const resultado = await axios('https://breaking-bad-quotes.herokuapp.com/v1/quotes');

      console.log(resultado);
      // agregar el resultado de la API al state; (similar a this.setState)
     obtenerFrase(resultado.data[0]);
  }

  // consulta a una rest api
  useEffect(
    () => {
      consultarAPI()
    }, [])
  // console.log(frase);

  return (
    <div className="contenedor">
      <Frase 
        frase={frase}
      />
      <button
        onClick={consultarAPI}
      >Generar Nueva</button>
    </div>
  )
}

export default App;