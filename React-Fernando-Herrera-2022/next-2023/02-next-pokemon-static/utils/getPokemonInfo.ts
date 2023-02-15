import { pokeApi } from '../api';
import { Pokemon } from '../interfaces';


// De esta forma es para que no me almacene todo el JSON estatico, solo vamos a guardar lo que vamos a necesitasr
export const getPokemonInfo = async( nameOrId: string ) => {

  
    const { data } = await pokeApi.get<Pokemon>(`/pokemon/${ nameOrId }`);

    return {
        id: data.id,
        name: data.name,
        sprites: data.sprites
    }

}