import { useMemo, useState } from 'react';
import { useCounter } from '../hooks';


/**
 *  Es un funcion un poco Pesada, es para usar el useMemo. En este ejemplo
 */
const heavyStuff = (iterationNumber = 100) => {
    for (let i = 0; i < iterationNumber; i++) {
        console.log('Ahí vamos...');
    }

    return `${iterationNumber} iteraciones realizadas`;
}



export const MemoHook = () => {

    const { counter, increment } = useCounter(4000);
    const [show, setShow] = useState(true);

    // Almacena el valor memorizado, y lo que le decimos es memoriaza heavvyStuff 
    // y que solo se renderice nuevamente cuando el coutner cambie por eso se pasa en las dependencias.
    const memorizedValue = useMemo(() => heavyStuff(counter), [counter])

    return (
        <>
            <h1>Counter: <small>{counter}</small>  </h1>
            <hr />

            <h4>{memorizedValue}</h4>


            <button
                className="btn btn-primary"
                onClick={() => increment()}
            >
                +1
            </button>

            <button
                className="btn btn-outline-primary"
                onClick={() => setShow(!show)}
            >
                Show/Hide {JSON.stringify(show)}
            </button>

        </>
    )
}
