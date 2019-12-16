import React, { Component } from 'react';

export class Formulario extends Component {
    // YA que el usuario puede buscar por nombre o categoraia
    state = { 
        nombre: '',
        categoria: ''
    }

    render() { 
        return (
            <form>
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
                        />
                    </div>
                    <div className="uk-margin" uk-margin="true">
                        <select
                            className="uk-select"
                            name="categoria"
                        >
                        </select>
                    </div>
                    <input
                        className="uk-button uk-button-danger"
                        type="submit"
                        value="Buscar Eventos"
                    />
                </div>
            </form>
        );
    }
}
