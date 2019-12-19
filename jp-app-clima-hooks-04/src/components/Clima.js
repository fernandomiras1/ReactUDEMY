import React from 'react';

export function Clima({resultado}) {

    // Extraer los valores
    const { name, main } = resultado;

    if (!name) return null;

    // restar grados kelvin
    const kelvin = 273.15;

    console.log(resultado);
    return (
        <div className="card-panel white col s12">
            <div className="black-text">
                <h2>El clima de {name} es:</h2>
                <p className="temperatura">
                    { parseInt(main.temp - kelvin, 10)} <span>&#x2103;</span>
                </p>
                {/* cuando usamos parseInt en react tenemos que especificar el sistema decimal
                en base 10 */}
                <p>Temperatura Máxima: { parseInt(main.temp_max - kelvin, 10)} &#x2103;</p>
                <p>Temperatura Minima: { parseInt(main.temp_min - kelvin, 10)} &#x2103;</p>
            </div>
        </div>
    )
}