import React, { Component } from 'react';

import CategoriasProvider from './context/CategoriasContext';

// COMPONENTES
import {Header} from './components/Header';
import { Formulario } from './components/Formulario';

// cc - Class Component (Simple React Snippets)
class App extends Component {
  state = { 
    noticias: []
  }

  render() { 
    return (
      <CategoriasProvider>
        <Header titulo='Eventos en React con Event' />

        <div className="uk-container">
          <Formulario />
        </div>
      </CategoriasProvider>
     );
  }
}
 
export default App;
