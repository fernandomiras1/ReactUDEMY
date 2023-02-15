import { NextPage, GetStaticProps } from 'next';
import { Card, Grid, Row, Text } from '@nextui-org/react';

import { pokeApi } from '../api';
import { Layout } from '../components/layouts';
import { PokemonListResponse, SmallPokemon } from '../interfaces';
import { PokemonCard } from '../components/pokemon';

interface Props {
  pokemons: SmallPokemon[];
}


const HomePage: NextPage<Props> = ({ pokemons }) => {

  return (
    <Layout title='Listado de Pokémons'>
      
      <Grid.Container gap={ 2 } justify='flex-start'> 
        {
          pokemons.map( ( pokemon ) => (
            <PokemonCard key={ pokemon.id } pokemon={ pokemon } />
          ))
        }
      </Grid.Container>

    </Layout>
  )
}

/**
 * 
 * Usamos la Estragenia de Statico.
 * 
 * 
 * Esta funcion se ejecuta en tiempo de build yarn build. 
 * Y se ejecuta del lado del Servicos. Es cuando sabemos que siempre va a mostar esa misma inforamcion y no va a cambiar.
 * Tambien solo se debe usar dentro de las pagina y no en los componentes 
 */
export const getStaticProps: GetStaticProps = async (ctx) => {
  
  const { data } = await pokeApi.get<PokemonListResponse>('/pokemon?limit=151');
  
  const pokemons: SmallPokemon[] = data.results.map( (poke, i) => ({
    ...poke,
    id: i + 1,
    img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${ i + 1 }.svg`
  }) )

  return {
    props: {
      pokemons
    }
  }
}


export default HomePage;
