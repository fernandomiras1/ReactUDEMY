import React, { Component } from 'react';
import axios from 'axios';

// Crear el context
const categoriasContext = React.createContext();
// Creamos el Consumer
export const categoriasConsumer = categoriasContext.Consumer;

class CategoriasProvider extends Component {
    // https://www.eventbrite.com/account-settings/apps
    tokenEventbrite = 'HBE2HXYSTXVA5EMYDOO2';

    componentDidMount() {
        this.obtenerCategorias();
    }

    obtenerCategorias = () => {
        let url = `https://www.eventbrite.com/v3/categories/?token=${this.tokenEventbrite}&locale=es_ES`;

        axios.get(url).then(categorias => {
            console.log(categorias);
        })
    }

    state = {
        categorias: []
    }
    render() { 
        return (
            <categoriasContext.Provider
            value={{
                categorias: this.state.categorias
            }}
            >
            {this.props.children}
            </categoriasContext.Provider>
        );
    }
}
 
export default CategoriasProvider;