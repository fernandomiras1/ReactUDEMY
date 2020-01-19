import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const ModalContext = createContext();

const ModalProvider = (props) => {

    // state del provider
    const [ idReceta, guardarIdReceta ] = useState(null);
    const [ informacion, guardarReceta] = useState({});

    // una vez que tenemos una receta, llamar la api
    useEffect( () => {
        const obtenerReceta = async () => {
            // si no hay receta que no ejecute el llamado
            if(!idReceta) return;

            const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idReceta}`;

            const resultado = await axios.get(url);

            guardarReceta(resultado.data.drinks[0]);
        }
        obtenerReceta();
    }, [idReceta]);

    return ( 
        <ModalContext.Provider
            value={{
                informacion,
                guardarIdReceta,
                guardarReceta
            }}
        >
            {props.children}
        </ModalContext.Provider>
    );
}
 
export default ModalProvider;