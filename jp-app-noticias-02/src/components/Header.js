import React from 'react'


export const Header = ({titulo}) => (
    <nav className="nav-wrapper light-blue darken-3">
        <a className="brand-logo center">
            {titulo}
        </a>
    </nav>
)