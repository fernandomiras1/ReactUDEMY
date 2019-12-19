import React from 'react';

export function Header({titulo}) {
    return(
        <nav>
            <div className="nav-weapper light-blue darken-2">
                <a href="#!" className="brand-logo">{titulo}</a>
            </div>
        </nav>
    )
}