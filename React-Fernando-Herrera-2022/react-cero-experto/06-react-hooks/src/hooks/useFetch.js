import { useEffect, useState } from "react";


export const useFetch = ( url ) => {

    const [state, setState] = useState({
        data: null,
        isLoading: true,
        hasError: null,
    })


    const getFetch = async () => {

        setState({
            ...state,
            isLoading: true,
        });

        const resp = await fetch(url);
        const data = await resp.json();

        setState({
            data,
            isLoading: false,
            hasError: null,
        });
    }

    // SI LA URL CAMBIA, QUE SE DISPARE LA LLAMADA, POR ESO SE LO PASA POR DEPEND.

    useEffect(() => {
        getFetch();
    }, [url])
    


    return {
        data:      state.data,
        isLoading: state.isLoading,
        hasError:  state.hasError,
    };
}
