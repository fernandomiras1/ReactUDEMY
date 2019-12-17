import React, { Component } from 'react';
import axios from 'axios';

// Crear el context
const CategoriasContext = React.createContext();
// Creamos el Consumer
export const CategoriasConsumer = CategoriasContext.Consumer;

class CategoriasProvider extends Component {
    // https://www.eventbrite.com/account-settings/apps
    tokenEventbrite = 'HBE2HXYSTXVA5EMYDOO2';

    componentDidMount() {
        this.obtenerCategorias();
    }

    obtenerCategorias = () => {
        let url = `https://www.eventbriteapi.com/v3/categories/?token=${this.tokenEventbrite}&locale=es_ES`;

        axios.get(url).then(categorias => {
            console.log(categorias);
            this.setState({ categorias: categorias.data.categories });
        })
    }

    state = {
        categorias: []
    }
    render() { 
        return (
            <CategoriasContext.Provider
                value={{
                    categorias: this.state.categorias
                }}
                >
                {this.props.children}
            </CategoriasContext.Provider>
        );
    }
}
 
export default CategoriasProvider;