import React, { Component } from 'react';

// cc - Class Component (Simple React Snippets)

class App extends Component {
  state = {  }

  // Cuando el componente esta listo, se usa para las apis
  componentDidMount() {
    const url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=89937fd3672b4349aa1486f1c80d1189`

  }

  render() { 
    return ( <p>holA</p> );
  }
}
 
export default App;
