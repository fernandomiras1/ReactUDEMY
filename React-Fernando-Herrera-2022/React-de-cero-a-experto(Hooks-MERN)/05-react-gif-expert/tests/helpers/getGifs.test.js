import { getGifs } from '../../src/helpers/getGifs';

describe('Pruebas en getGifs()', () => {
    
    test('debe de retornar un arreglo de gifs', async() => {

        const gifs = await getGifs('One Punch');
        // Que sea mayor a cero, tiene mas de un elemento.
        expect( gifs.length ).toBeGreaterThan( 0 );
        expect( gifs[0] ).toEqual({
            id: expect.any( String ), // Espera cualquier String
            title: expect.any( String ),
            url: expect.any( String ),
        });
        
    });

});