import React, { Component } from 'react'
// IMPORT COMPONENES 
import { Title } from '../components/Title'
import { SearchForm } from '../components/SearchForm'
import { MoviesList } from '../components/MoviesList'

export class Home extends Component {
    
    state = { usedSearch: false, resu: [] }

    // Llama al metodo buscar del Componente SearchForm.
    _handleResults = (resu) => {
      this.setState({ resu, usedSearch: true })
    }
  
    _renderResults() {
      return this.state.resu.length === 0
      ? <p>Sorry! Results not found!</p>
      : <MoviesList movies={this.state.resu} />
    }
    
    render() {
        return (
            <div>
               <Title>Search Movies</Title>
                <div className="searchForm-wrapper">
                <SearchForm onResults={this._handleResults}/>
                </div>
                { this.state.usedSearch
                ? this._renderResults()
                : <small>Use the form to search a movie</small>
                } 
            </div>
        )
    }
}
