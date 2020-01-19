import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const NuevaCuenta = () => {

    // State para Inicar Sesion
    const [ usuario, guardarUsuario ] = useState({
        nombre: '',
        email: '',
        password: '',
        confirmar: ''
    });

    // extraer de usuario
    const { nombre, email, password, confirmar } = usuario;

    const onChange = e => {
        guardarUsuario({
            ...usuario,
            [e.target.name] : e.target.value
        })
    }

    // Cuando el usuario quiere iniciar Sesion
    const onSubmit = e => {
        e.preventDefault();


        // Validar que no haya campos vacios
        
        // Password minimo de 6 caracateres

        // Los 2 pass sean iguales

        // Pasarlo al action
    }

    return ( 
        <div className="form-usuario">
            <div className="contenedor-form sombra-dark">
                <h1>Obtener una Cuenta</h1>
                <form onSubmit={onSubmit}>
                    <div className="campo-form">
                        <label htmlFor="nombre">Nombre</label>
                        <input 
                            type="text" 
                            name="nombre" 
                            id="nombre" 
                            placeholder="Tu Nombre"
                            value={nombre}
                            onChange={onChange}
                        />
                    </div>

                    <div className="campo-form">
                        <label htmlFor="email">Email</label>
                        <input 
                            type="email" 
                            name="email" 
                            id="email" 
                            placeholder="Tu Email"
                            value={email}
                            onChange={onChange}
                        />
                    </div>
                   
                    <div className="campo-form">
                        <label htmlFor="password">Password</label>
                        <input 
                            type="password" 
                            name="password" 
                            id="password" 
                            placeholder="Tu password"
                            value={password}
                            onChange={onChange}
                        />
                    </div>
                 
                    <div className="campo-form">
                        <label htmlFor="confirmar">Confirmar Password</label>
                        <input 
                            type="password" 
                            name="confirmar" 
                            id="confirmar" 
                            placeholder="Repíte tu Password"
                            value={confirmar}
                            onChange={onChange}
                        />
                    </div>
                   
                    <div className="campo-form">
                       <input
                            className="btn btn-block btn-primario"
                            type="submit"
                            value="Registrarme"
                        />
                    </div>
                </form>

                <Link to={'/'} className="enlace-cuenta">
                    Vovler a Iniciar Sesión
                </Link>
            </div>
        </div>
     );
}
 
export default NuevaCuenta;