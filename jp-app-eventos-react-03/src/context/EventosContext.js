import React, { Component } from 'react';
import axios from 'axios';

const EventosContext = React.createContext();
export const EventosConsumer = EventosContext.Consumer;

export class EventosProvider extends Component {
    state = {
        eventos: []
    }

    tokenEventbrite = 'HBE2HXYSTXVA5EMYDOO2';
    ordenar = 'date'

    obtenerEventos = async (busqueda) => {
        let url = `https://www.eventbriteapi.com/v3/users/me/events/search/?q=${busqueda.nombre}&categories=${busqueda.categoria}&sort_by=${this.ordenar}&token=${this.tokenEventbrite}&locale=es_ES`;
        
        // consultar la API con la URL
        // const eventos = await axios(url);
        // console.log(eventos);
        // this.setState({ eventos: eventos });

        axios.get(url).then(categorias => {
            console.log(categorias);
            // this.setState({ categorias: categorias.data.categories });
        })
    }

    render() { 
        return (
            <EventosContext.Provider
                value={{
                    eventos: this.state.eventos,
                    obtenerEventos: this.obtenerEventos
                }}
            >
                {this.props.children}
            </EventosContext.Provider>
        );
    }
}