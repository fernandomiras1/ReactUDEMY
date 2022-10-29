import { useEffect, useState } from 'react';
import { getGifs } from '../helpers/getGifs';

export const useFetchGifs = ( category ) => {
 
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState( true );

    const getImages = async() => {
        const newImages = await getGifs( category );
        setImages(newImages);
        setIsLoading(false);
    }
    
    useEffect( () => {
        getImages();
    }, []); // Si ponemos la dependencia empy, se va a llamar una unica vez cunado se crea el componente.



    return {
        images,
        isLoading
    }

}
