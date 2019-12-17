import React, { Component } from 'react';
import { CategoriasConsumer } from '../context/CategoriasContext';
import { EventosConsumer } from '../context/EventosContext';

export class Formulario extends Component {
    // YA que el usuario puede buscar por nombre o categoraia
    state = { 
        nombre: '',
        categoria: ''
    }

    // Si el usuario agrega un evento o categoria
    obtenerDatosEvento = e => {
        // como el nombre de lo campos (name) soy iguales al state. ( lo hacemos de esta forma)
        this.setState({ [e.target.name]: e.target.value });
    }

    render() {
        return (
            <EventosConsumer>
                {(value) => {
                    console.log(value);
                    return (
                        <form onSubmit={(e) => {
                            e.preventDefault();
                            value.obtenerEventos(this.state);
                        }}>
                            <fieldset className="uk-fieldset uk-margin">
                                <legend className="uk-legend uk-text-center">
                                    Busca tu evento por Nombre o Categoría
                                </legend>
                            </fieldset>

                            <div className="uk-column-1-3@m uk-margin">
                                <div className="uk-margin" uk-margin="true">
                                    <input
                                        name="nombre"
                                        className="uk-input"
                                        type="text"
                                        placeholder="Nombre de Evento o Ciudad"
                                        onChange={this.obtenerDatosEvento}
                                    />
                                </div>
                                <div className="uk-margin" uk-margin="true">
                                    <select
                                        className="uk-select"
                                        name="categoria"
                                        onChange={this.obtenerDatosEvento}
                                    >
                                        <option value="">--Selecciona Categoría --</option>
                                        {/* Accedemos al state categorias */}
                                        <CategoriasConsumer>
                                            {(value) => {
                                            return (
                                                value.categorias.map(cate => (
                                                    <option key={cate.id} value={cate.id}
                                                        data-uk-form-select>
                                                        {cate.name_localized}
                                                    </option>
                                                ))
                                            )
                                            }}
                                        </CategoriasConsumer>
                                    </select>
                                </div>
                                <input
                                    className="uk-button uk-button-danger"
                                    type="submit"
                                    value="Buscar Eventos"
                                />
                            </div>
                        </form>
                    )
                }}
            </EventosConsumer>
        );
    }
}
