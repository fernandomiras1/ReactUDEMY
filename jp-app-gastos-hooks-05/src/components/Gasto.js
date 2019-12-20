import React from 'react';

export const Gasto = ({gasto}) => (
    <li className="gastos">
        <p>
            {gasto.nombreGasto}
            <span className="gasto">$ {gasto.cantGasto}</span>
        </p>
    </li>
);

