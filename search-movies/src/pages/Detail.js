import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class Detail extends Component {
    static propTypes = {
        id: PropTypes.string
    }

    _getMovieById(id) {
        fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${inputMove}`)
        .then(res => res.json())
        .then(resu => {
            const { Search = [], totalResults = '0'} = resu
            console.log({ Search, totalResults });
            // Se lo pasamos a la props para que lo trabaje el Padre App.js
            this.props.onResults(Search)
        })
    }

    // Se renderizo al el menos una vez
    componentDidMount() {
        const {id} = this.props
        this._getMovieById({ id })
    }
    render() {
        return (
            <p>pagina Detalle</p>
        )
    }    
}