import React from 'react';
// impt
import PropTypes from 'prop-types';

// sfc - Stateless Function Component
export const Header = ({titulo}) => (
    <header>
        <h1 className='text-center'>{titulo}</h1>
    </header>
);

Header.propTypes = {
    titulo: PropTypes.string.isRequired
}