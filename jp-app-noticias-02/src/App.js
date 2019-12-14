import React, { Component, Fragment } from 'react';
// COMPONENTES
import {Header} from './components/Header';
import {ListaNoticias} from './components/ListaNoticias';
import {Formulario} from './components/Formulario';

// cc - Class Component (Simple React Snippets)
class App extends Component {
  state = { 
    noticias: []
  }

  // Cuando el componente esta listo, se usa para las apis
  componentDidMount() {
    this.consultarNoticias();
  }
  
  consultarNoticias = async (categoria = 'general') => {
    const url = `https://newsapi.org/v2/top-headlines?country=ar&category=${categoria}&apiKey=89937fd3672b4349aa1486f1c80d1189`;
  
    const respuesta = await fetch(url);
    const noticias = await respuesta.json();
  
    this.setState({
      noticias: noticias.articles
    })
  }

  render() { 
    return ( 
      <Fragment>
        <Header 
          titulo='Noticias React API'
        />

        <div className="container white contenedor-noticias">
          <Formulario
            consultarNoticias={this.consultarNoticias}
          />

          <ListaNoticias 
            noticias={this.state.noticias}
          />
        </div>
      </Fragment>
     );
  }
}
 
export default App;
