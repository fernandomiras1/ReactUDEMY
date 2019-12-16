import React from 'react'
import PropTypes from 'prop-types';

export const Header = ({titulo}) => (
    <header className="uk-margin" uk-margin='true'>
        <h1 className="uk-text-center">
            {titulo}
        </h1>
    </header>
)

Header.propTypes = {
    titulo: PropTypes.string.isRequired
}