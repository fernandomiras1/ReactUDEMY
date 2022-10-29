import { useState } from 'react';
import PropTypes from 'prop-types';
// rafc
export const AddCategory = ({ onNewCategory }) => {

    // usestateSnippet
    const [inputValue, setInputValue] = useState('');

    const onInputChange = ({ target }) => {
        setInputValue(target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        // Si tenemos mas de un caracter ingresa.
        if (inputValue.trim().length <= 1) return;

        // setCategories( categories => [ inputValue, ...categories ]);
        setInputValue('');
        // Emite el valor insertado al Padre.
        // onNewCa -- Cuando inicia con on quiere decir que esta emitiendo algo. Sumamente importante.
        onNewCategory(inputValue.trim());
    }

    return (
        <form onSubmit={onSubmit} aria-label="form">
            <input
                type="text"
                placeholder="Buscar gifs"
                value={inputValue}
                onChange={onInputChange}
            />
        </form>
    )
}



AddCategory.propTypes = {
    onNewCategory: PropTypes.func.isRequired,
}