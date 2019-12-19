import React from 'react';

export function Error({mensaje}) {
    return(
        <div className="card-panel red darken-4 error col s12">
            {mensaje}
        </div>
    )
}