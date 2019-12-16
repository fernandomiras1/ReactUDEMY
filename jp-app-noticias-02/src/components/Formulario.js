import React, { Component } from 'react';
import PropTypes from 'prop-types';
export class Formulario extends Component {

    static propTypes = {
        consultarNoticias: PropTypes.func.isRequired
    }

    state = { 
        categoria: 'general' 
     }

    cambiarCategoria = e => {
        this.setState({
             categoria: e.target.value
        }, () => {
            // pasarlo a la pag principar para q haga la consulta
            this.props.consultarNoticias(this.state.categoria);
        });
    }


    render() { 
        return (
            <div className="buscador row">
                {/* Lo va a centrar pero no va a tomar todo el espacio disponible */}
                <div className="col s12 m8 offset-m2">
                    <form>
                        <h2>Encuentra Noticias por Categoría</h2>
                        <div className="input-field col s12 m8 offset-m2">
                            <select onChange={this.cambiarCategoria}>
                                <option value="general">General</option>
                                <option value="business">Negocios</option>
                                <option value="entretainment">Entretenimiento</option>
                                <option value="health">Salud</option>
                                <option value="science">Ciencia</option>
                                <option value="sports">Deportes</option>
                                <option value="technology">Tecnologia</option>
                            </select>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}