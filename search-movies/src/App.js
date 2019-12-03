import React, { Component } from 'react';
import './App.css';
import 'bulma/css/bulma.css'
// Switch: sirve para renderizar ruta que esta en el pats
import { Switch, Route } from "react-router-dom";

// IMPORT PAGES
import { Home } from './pages/Home'
import { Detail } from './pages/Detail'

class App extends Component {
 
  render() {
    return (
      <div className="App">
       <Switch>
          <Route exact path="/" Component={Home}/>
          <Route path="/detail/:id" Component={Detail}/>
        </Switch>
      </div>
    );
  };
}

export default App;
