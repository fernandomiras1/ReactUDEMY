import React, { Component, Fragment } from 'react';
// COMPONENTES
import {Header} from './components/Header';

// cc - Class Component (Simple React Snippets)
class App extends Component {
  state = { 
    noticias: []
  }

  render() { 
    return (
      <Fragment>
        <Header titulo='Eventos en React con Event' />
      </Fragment>
     );
  }
}
 
export default App;
