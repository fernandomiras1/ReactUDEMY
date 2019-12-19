import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Formulario } from './components/Formulario';
import { Error } from './components/Error';
import { Clima } from './components/Clima';

function App() {

  // State principal
  // ciudad = state, guardarCiudad = this.setState()
  const [ ciudad, guardarCiudad ] = useState('');
  const [ pais, guardarPais ] = useState('');
  const [ error, guardarError ] = useState(false);
  const [ resultadoAPI, guardarResultadoAPI ] = useState({})


  // Ciclos de vida con hooks
  useEffect(() => {

    // prevenir la ejecuccion por primera vez
    if (ciudad === '') return;

    const consultarAPI = async () => {
      const appId = 'd429c657cb23b897bece28158640bab1';
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appId}`;
      const resupuesta = await fetch(url);
      const resultado = await resupuesta.json();
  
      guardarResultadoAPI(resultado);
    }
    consultarAPI();
    // Va a estar escuchando el state ciudad. Cuando tengamos un cambio en ciudad y pais
  }, [ciudad, pais]); // Es un arreglo de dependencias, generalemte se queda vacio. o agregamos el state que queremos que este ecucahndo ese Effect.

  const datosConsulta = datos => {
    console.log(datos);

    // validar que ambos campos esten 
    if (datos.ciudad === '' || datos.pais === '') {
      // un error
      guardarError(true);
      return;
    }

    // Ciudad y pais existen, agregarlos al state
    guardarCiudad(datos.ciudad);
    guardarPais(datos.pais);
    guardarError(false);
  }

 

  // Cargar un componente Condicionalmente
  let componente;
  if (error) {
    // Hay un error, mostrarlo
    componente = <Error mensaje='Ambos campos son obligatorios' />
  } else {
    // Mostar el Clima
    componente = resultadoAPI.cod === '404' 
      ? <Error mensaje='La ciudad no existe en nuestro registro' /> 
      : <Clima resultado={resultadoAPI}/>;
  }

  return (
    <div className="App">
      <Header 
        titulo='Clima React App'
      />
      <div className="contenedor-form">
        <div className="container">
          <div className="row">
            <div className="col s12 m6">
              <Formulario 
                datosConsulta={datosConsulta}
              />
            </div>
            <div className="col s12 m6">
              {componente}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
