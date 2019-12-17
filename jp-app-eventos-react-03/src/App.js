import React, { Component } from 'react';

import CategoriasProvider from './context/CategoriasContext';
import {EventosProvider} from './context/EventosContext';

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
      <EventosProvider>
        <CategoriasProvider>
          <Header titulo='Eventos en React con Event' />
          <div className="uk-container">
            <Formulario />
          </div>
        </CategoriasProvider>
      </EventosProvider>
     );
  }
}
 
export default App;
