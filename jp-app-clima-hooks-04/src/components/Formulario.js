import React, { useState } from 'react';

export function Formulario({datosConsulta}) {

    
    // State del Componente
    // busqueda = state
    // guardarBusqueda = this.setState({})
    
    const [busqueda, guardarBusqueda] = useState({
        ciudad: '',
        pais: ''
    })
    
    const handleChange = e => {
        // Cambiar el state
        guardarBusqueda({
            ...busqueda, // tomo una copia del state ,para no perder la referencia al hora de escribir
            [e.target.name] : e.target.value
        })
    }

    const consultarClima = e => {
        e.preventDefault();
        console.log('object');
        // pasar hacia el componente principal la busqueda del usuario
        datosConsulta(busqueda);
    }

    return(
        <form onSubmit={consultarClima}>
            <div className="input-field col s12">
                <input
                    type="text"
                    name="ciudad"
                    id="ciudad"
                    onChange={handleChange}
                />
                <label htmlFor="ciudad">Ciudad: </label>
            </div>

            <div className="input-field col s12">
                <select onChange={handleChange} name="pais">
                    <option value="">Selecciona un país</option>
                    <option value="AR">Argentina</option>
                    <option value="US">Estados Unidos</option>
                    <option value="MX">México</option>
                    <option value="CO">Colombia</option>
                </select>
            </div>

            <div className="input-field col s12">
                {/* <input
                    type="submit"
                    className="waves-effect waves-light btn-large btn-block accent-4"
                    value="Buscar Clima"
                /> */}
                <button className="waves-effect waves-light btn-large btn-block accent-4">Buscar Clima</button>
                <label htmlFor="ciudad">Ciudad: </label>
            </div>
        </form>
    )
}