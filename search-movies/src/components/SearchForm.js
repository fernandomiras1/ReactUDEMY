import React, {Component} from 'react'

// API Key : http://www.omdbapi.com
const API_KEY = '4287ad07'

export class SearchForm extends Component {
    state = {
        inputMove: ''
    }

    _handleChange = (e) => {
        this.setState({ inputMove: e.target.value })
    }

    _handleSubmit = (e) => {
        e.preventDefault()

        const { inputMove } = this.state
        fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${inputMove}`)
            .then(res => res.json())
            .then(resu => {
                const { Search = [], totalResults = '0'} = resu
                console.log({ Search, totalResults });
                // Se lo pasamos a la props para que lo trabaje el Padre App.js
                this.props.onResults(Search)
            })
    }

    render() {
        return (
            <form onSubmit={this._handleSubmit}>
                <div className="field has-addons">
                    <div className="control">
                        <input 
                            className="input"
                            onChange={this._handleChange}
                            type="text" 
                            placeholder="Move Search ..." />
                    </div>
                    <div className="control">
                        <button className="button is-info">
                        Search
                        </button>
                    </div>
                </div>
            </form>
        )
    }
}
