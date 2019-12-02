import React, { Component } from 'react'
import PropTypes from 'prop-types'

const API_KEY = '4287ad07'
export class Detail extends Component {
    static propTypes = {
        id: PropTypes.string
    }

    state = { movie: {} }

    _getMovieById({id}) {
        fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`)
        .then(res => res.json())
        .then(movie => {
            console.log({movie});
            this.setState({ movie })
        })
    }

    // Se renderizo al el menos una vez
    componentDidMount() {
        const {id} = this.props
        this._getMovieById({ id })
    }
    render() {
        const { Title, Poster, Poster, Metascore, Plot } =
            this.state.movie

        return (
            <div>
                <h1>{Title}</h1>
                <img src={Poster}></img>
                <h3>{Actors}</h3>
                <p>pagina Detalle</p>
            </div>
        )
    }    
}