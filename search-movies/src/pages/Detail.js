import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { ButtonBackToHome } from '../components/ButtonBackToHome'

// import { useParams, useRouteMatch } from "react-router-dom";
const API_KEY = '4287ad07'
export class Detail extends Component {
    static propTypes = {
        match: PropTypes.shape({
            params: PropTypes.object,
            isExact: PropTypes.bool,
            path: PropTypes.string,
            url: PropTypes.string
        })
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
        // let { id } = useParams();
        // console.log('topicId', {id});
        console.log(this.props);
        const {id} = this.props.match.params
        this._getMovieById({ id })
    }

    _goBack() {
        window.history.back()
    }

    render() {
        const { Title, Poster, Actors, Metascore, Plot } =
            this.state.movie

        return (
            <div>
                <ButtonBackToHome />
                <h1>{Title}</h1>
                <img src={Poster} alt={Title}></img>
                <h3>{Actors}</h3>
                <span>{Metascore}</span>
                <p>{Plot}</p>
            </div>
        )
    }    
}