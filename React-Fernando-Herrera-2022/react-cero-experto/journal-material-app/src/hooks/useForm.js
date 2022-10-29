import { useEffect, useMemo, useState } from 'react';

export const useForm = ( initialForm = {}, formValidations = {}) => {
  
    const [ formState, setFormState ] = useState( initialForm );
    const [ formValidation, setFormValidation ] = useState({});

    // Cada vez que se cambio el formulario el input o algo se llama esta funcion
    // Por eso cuando se escribe una letra esta evaluando cada validacion si se cumple o no.
    useEffect(() => {
        createValidators();
    }, [ formState ])

     // Tenemos que vovler a redibuar el formualario cuando  seleccionemos otra nota. 
    // El compontete se tiene q vovler a redibujar para que carge el formulario los valores 
    useEffect(() => {
        setFormState( initialForm );
    }, [ initialForm ])
    
    // Solo se tiene que vovler a procesar si cambia el formValidation ( es decir cuando se cambia algo de los 3 input)
    const isFormValid = useMemo( () => {

        for (const formValue of Object.keys( formValidation )) {
            if ( formValidation[formValue] !== null ) return false;
        }

        // Si es valido
        return true;
    }, [ formValidation ])


    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [ name ]: value
        });
    }

    const onResetForm = () => {
        setFormState( initialForm );
    }

    const createValidators = () => {
        
        const formCheckedValues = {};
        
        for (const formField of Object.keys( formValidations )) {
            const [ fn, errorMessage ] = formValidations[formField];

            formCheckedValues[`${ formField }Valid`] = fn( formState[formField] ) ? null : errorMessage;
        }

        setFormValidation( formCheckedValues );
        console.log('formCheckedValues', formCheckedValues);
    }



    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm,

        ...formValidation,
        isFormValid
    }
}