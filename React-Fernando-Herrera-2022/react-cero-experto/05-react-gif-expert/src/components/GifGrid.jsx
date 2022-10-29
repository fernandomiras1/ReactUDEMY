import PropTypes from 'prop-types';

import { GifItem } from './GifItem';
import { useFetchGifs } from '../hooks/useFetchGifs';
// rafc
export const GifGrid = ({ category }) => {

    const { images, isLoading } = useFetchGifs(category);

    return (
        // Fragmento
        <>
            <h3>{category}</h3>
            {
                isLoading && (<h2>Cargando...</h2>)
            }


            <div className="card-grid">
                {
                    images.map((image) => (
                        <GifItem
                            key={image.id}
                            {...image} // Sppret Esparicmos para tener las porps.
                        />
                    ))
                }

            </div>

        </>
    )
}


GifGrid.propTypes = {
    category: PropTypes.string.isRequired,
}
