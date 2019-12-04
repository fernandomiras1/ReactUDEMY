import React, { Component } from 'react';
import './App.css';
import 'bulma/css/bulma.css'
// Switch: sirve para renderizar ruta que esta en el pats
import { Switch, Route } from "react-router-dom";

// IMPORT PAGES
import { Home } from './pages/Home'
import { Detail } from './pages/Detail'
import { NotFound } from './pages/NotFound'

class App extends Component {
 
  render() {
    return (
      <div className="App">
       <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/detail/:id" component={Detail}/>
          <Route component={NotFound}/>
        </Switch>
      </div>
    );
  };
}

export default App;
