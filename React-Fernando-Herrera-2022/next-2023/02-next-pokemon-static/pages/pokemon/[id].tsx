import { GetStaticProps, NextPage, GetStaticPaths } from 'next';
import { Button, Card, Container, Grid, Image, Text } from '@nextui-org/react';

import { pokeApi } from '../../api';
import { Layout } from '../../components/layouts';
import { Pokemon } from '../../interfaces';

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

const PokemonPage: NextPage<Props> = ({ pokemon }) => {

  // console.log(pokemon);

    
    return (
        <Layout title='Algun pokémon'>
           
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
                      ghost
                    >
                      Guardar en favoritos
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

  const pokemons151 = [...Array(151)].map( ( value, index ) => `${ index + 1 }` );

  return {
    paths: pokemons151.map( id => ({
      params: { id }
    })),
    // es deicir si la pag no fue renderizad aque falle, es decir que no existe 404 
    fallback: false
  }
}


// Aca pasamos los params primero se renderiza getStaticPaths y luego pasa a getStaticProps
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id } = params as { id: string };
  
  const { data } = await pokeApi.get<Pokemon>(`/pokemon/${ id }`);

  return {
    props: {
      pokemon: data
    }
  }
}





export default PokemonPage;
