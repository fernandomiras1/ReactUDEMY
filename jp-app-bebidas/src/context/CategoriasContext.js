import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

// Creamos el Context
export const CategoriasContext = createContext();

// Provider es donde se encutras las funciones y el state
const CategoriasProvider = (props) => {

    // crear el state del Context 
    const [categorias, guardarCategorias] = useState([]);

    // ejecutar el llamado a la api
    useEffect(() => {
        const obtenerCategorias = async () => {
            const url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';

            const categorias = await axios.get(url);
            console.log(categorias);
            guardarCategorias(categorias.data.drinks);
        }
        obtenerCategorias();
    }, []);

    return (
        <CategoriasContext.Provider value={{categorias}}>
            {/* de esta forma todos los componentes como app, formulairio y demas se van a cargar en este propis */}
            {props.children}
        </CategoriasContext.Provider>
    )
}

// Para hacerlo disponible en los demas provider.
export default CategoriasProvider;