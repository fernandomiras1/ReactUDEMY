import { useRef } from 'react';

export const FocusScreen = () => {

    // Mantenemos una referencia al Input 
    const inputRef = useRef();

    const onClick = () => {
        // document.querySelector('input').select();
        console.log('useRef', inputRef);
        inputRef.current.select();
    }


    return (
        <>
            <h1>Focus Screen</h1>
            <hr />

            <input
                ref={inputRef}
                type="text"
                placeholder="Ingrese su nombre"
                className="form-control"
            />

            <button
                className="btn btn-primary mt-2"
                onClick={onClick}
            >
                Set focus
            </button>

        </>
    )
}
