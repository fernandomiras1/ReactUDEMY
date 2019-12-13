import React, { Component } from 'react';
import uuid from 'uuid';
import PropTypes from 'prop-types';

const stateInicial = {
    // el name tiene que ser igual a la propiedad del objeto
    cita: {
        mascota: '',
        propietario: '',
        fecha: '',
        hora: '',
        sintomas: '',
    },
    error: false
};

// cc  - Class Component (Simple React Snippets)
export class NuevaCita extends Component {

    static propTypes = {
        crearNuevaCita: PropTypes.func.isRequired
    }

    state = { ...stateInicial }
    // Cuando el usuario escribe en los input
    handleChange = e => {
        console.log(e.target.name + ': ' + e.target.value);
        // Colocar lo q el usuario escribe en el state
        // copio el state y recribo en el campo donde estoy
        this.setState({
            cita: {
                ...this.state.cita, 
                [e.target.name] : e.target.value
            }
        })
    }

    // Cuando el usuario envia el Formulario
    handleSubmit = e => {
        e.preventDefault();
        
        // extraer los valores del state
        const { mascota, propietario, fecha, hora, sintomas } = this.state.cita;

        // Validar que todos los campos esten llenos
        if ( mascota === '' || propietario === '' || fecha === '' || hora === '' || sintomas === '') {
            this.setState({
                error: true
            });

            // D etener la ejecucion
            return;
        }
        // generamos un nuevo objeto con los datos
        const nuevaCita = {...this.state.cita};
        nuevaCita.id = uuid();
        // Agregar la Cita al State de App   
        this.props.crearNuevaCita(nuevaCita);

        // Colocar en el stateInicial ( para limpiar los campos )
        this.setState({
            ...stateInicial
        })

    }

    render() {
        // extraer el valor del state
        const { error } = this.state;

        return (  
            <div className="card m-5 py-5">
                <div className="card-body">
                    <h2 className="card-title text-center m-5">
                        Llena el formulario para crear una nueva cita
                    </h2>

                    { error 
                    ? <div className="alert alert-danger mt-2 mb-5">
                        Todos los campos son Obligatorios
                      </div>
                    : null
                    }

                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-2 col-form-label">Nombre Mascota </label>
                            <div className="col-sm-8 col-lg-10">
                                <input 
                                    type="text"
                                    className="form-control"
                                    placeholder='Nombre Mascota'
                                    name="mascota"
                                    onChange={this.handleChange}
                                    value={this.state.cita.mascota}
                                />
                            </div>
                        </div>  {/* form-group */}
                       
                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-2 col-form-label">Nombre Dueño </label>
                            <div className="col-sm-8 col-lg-10">
                                <input 
                                    type="text"
                                    className="form-control"
                                    placeholder='Nombre Dueño'
                                    name="propietario"
                                    onChange={this.handleChange}
                                    value={this.state.cita.propietario}
                                />
                            </div>
                        </div>  {/* form-group */}
                       
                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-2 col-form-label">Fecha</label>
                            <div className="col-sm-8 col-lg-4">
                                <input 
                                    type="date"
                                    className="form-control"
                                    name="fecha"
                                    onChange={this.handleChange}
                                    value={this.state.cita.fecha}
                                />
                            </div>
                    
                            <label className="col-sm-4 col-lg-2 col-form-label">Hora</label>
                            <div className="col-sm-8 col-lg-4">
                                <input 
                                    type="time"
                                    className="form-control"
                                    name="hora"
                                    onChange={this.handleChange}
                                    value={this.state.cita.hora}
                                />
                            </div>
                        </div>  {/* form-group */}

                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-2 col-form-label">Síntomas</label>
                            <div className="col-sm-8 col-lg-10">
                               <textarea
                                 className="form-control"
                                 placeholder='Describe los Síntomas'
                                 name="sintomas"
                                 onChange={this.handleChange}
                                 value={this.state.cita.sintomas}
                               ></textarea>
                            </div>
                        </div>  {/* form-group */}

                        <input
                            type="submit"
                            className="py-3 mt-2 btn btn-success btn-block"
                            value="Agregar Nueva Cita"
                        />
 
                    </form>
                </div>

            </div>
        );
    }
}