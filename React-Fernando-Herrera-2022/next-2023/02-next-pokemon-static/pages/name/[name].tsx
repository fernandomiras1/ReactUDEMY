import { GetStaticProps, NextPage, GetStaticPaths } from 'next';
import { Button, Card, Container, Grid, Image, Text } from '@nextui-org/react';
import confetti from 'canvas-confetti';
import { useEffect, useState } from 'react';
import { pokeApi } from '../../api';
import { Layout } from '../../components/layouts';
import { Pokemon, PokemonListResponse } from '../../interfaces';
import { getPokemonInfo, localFavorites } from '../../utils';

interface Props {
  pokemon: Pokemon;
}

/**
 * 
 *  IMPORTANTE 
 * 
 * - QUeremos navegar a algo que sea pokemon/1 ( es decir le pasamos el ID)
 * - Para eso la carpeta se tiene que llamar como en path en este caso pokemon. 
 * - Y creamos este archico con el ID generico que va a recibir como parametro  /1
 *  Le ponemos el nombre del argumento que esta esperando en este caso seria el id por eso se llama [id].tsx
 */

const PokemonByNamePage: NextPage<Props> = ({ pokemon }) => {


    const [isInFavorites, setIsInFavorites] = useState( localFavorites.existInFavorites( pokemon.id ) );

    // console.log(pokemon);
    const onToggleFavorite = () => {
      localFavorites.toggleFavorite( pokemon.id );
      setIsInFavorites( !isInFavorites );

      if ( isInFavorites ) return;
      
      // Animacion de Confetti 
      confetti({
        zIndex: 999,
        particleCount: 100,
        spread: 160,
        angle: -100,
        origin: {
          x: 1,
          y: 0,
        }
      })

    }  
    // Va a tirar error 500 porque se corre tambien del lado del servidor. ( node ) No existe window
    // console.log(localStorage.getItem('favorites'));
    console.log({ existeWindo: typeof window});

    // A menos que se use useEffect que lo va a usar del lado del cliente. Y no lo va a renderizar en node.
    
    
    return (
        <Layout title={ pokemon.name }>
           
           <Grid.Container css={{ marginTop: '5px' }} gap={ 2 }>
              <Grid xs={ 12 } sm={ 4 } >
                <Card hoverable css={{ padding: '30px' }}>
                    <Card.Body>
                      <Card.Image 
                        src={ pokemon.sprites.other?.dream_world.front_default || '/no-image.png' }
                        alt={ pokemon.name }
                        width="100%"
                        height={ 200 }
                      />
                    </Card.Body>
                </Card>
              </Grid>

              <Grid xs={ 12 } sm={ 8 }>
                <Card>
                  <Card.Header css={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Text h1 transform='capitalize'>{ pokemon.name }</Text>

                    <Button
                      color="gradient"
                      ghost={ !isInFavorites }
                      onClick={ onToggleFavorite }
                    >
                      { isInFavorites ? 'En Favoritos' : 'Guardar en favoritos' }
                    </Button>
                  </Card.Header>

                  <Card.Body>
                    <Text size={30}>Sprites:</Text>

                    <Container direction='row' display='flex' gap={ 0 }>
                        <Image 
                          src={ pokemon.sprites.front_default }
                          alt={ pokemon.name }
                          width={ 100 }
                          height={ 100 }
                        />
                        <Image 
                          src={ pokemon.sprites.back_default }
                          alt={ pokemon.name }
                          width={ 100 }
                          height={ 100 }
                        />
                        <Image 
                          src={ pokemon.sprites.front_shiny }
                          alt={ pokemon.name }
                          width={ 100 }
                          height={ 100 }
                        />
                        <Image 
                          src={ pokemon.sprites.back_shiny }
                          alt={ pokemon.name }
                          width={ 100 }
                          height={ 100 }
                        />

                    </Container>


                  </Card.Body>  


                </Card>
              </Grid>

           </Grid.Container>



        </Layout>
    )
};


// You should use getStaticPaths if you’re statically pre-rendering pages that use dynamic routes
/**
 * 
 * Usamos este metodo, ya que tenemos este componete que va a ser dinamico porq tiene las llaves cuadras. 
 * es decir tenemos n ids. Por eso hay que simular los 151 path para que cree este HTML. 
 * Se generara en el build time, es decir se generara 151 paginas web de esta forma pokemon/1 to 151, es decir generara 151 paginas HTML 
 *  
 */

export const getStaticPaths: GetStaticPaths = async (ctx) => {

    const { data } = await pokeApi.get<PokemonListResponse>('/pokemon?limit=151');
    const pokemonNames: string[] = data.results.map( pokemon => pokemon.name );
  
  
    return {
      paths: pokemonNames.map( name => ({
        params: { name }
      })),
      // fallback: false
      // (fallback: false): Es deicir si la pag no fue renderizad aque falle, es decir que no existe 404 
      // fallback: false
      //  (fallback: blocking): Nos permite crear nuevo contenido estatico a partir de un llamdoa a la API 200 Correctamente, por ejemplo mostramos 151, pero si buscamos el id 152 que no lo tenemos statico, es decir, o esta creado en el build de la APP. no va a permitir podes Crear ese HTML y que quede startico
      fallback: 'blocking'
    }
  }
  
  
  
  export const getStaticProps: GetStaticProps = async ({ params }) => {
    
    const { name } = params as { name: string };

    const pokemon =  await getPokemonInfo( name )

    // El id No exite en la API , LA API ROMPE
    // Lo redireccionamos a la HOME
    if (!pokemon) {
    
      return {
        redirect: {
          destination: '/',
          permanent: false
        }
      }
    }
  
    return {
      props: {
        pokemon
      },
      // Vuelve hacer un llamado a la API y a refresacar la INFO. Cada sierto lapzo de tiempo
      revalidate: 86400 // Cada 24 horas ---> 60 * 60 * 24 // En segundos
    }
  }
  
  
  



export default PokemonByNamePage;
