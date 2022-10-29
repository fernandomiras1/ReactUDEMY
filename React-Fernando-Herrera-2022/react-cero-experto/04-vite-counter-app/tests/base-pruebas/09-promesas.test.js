import { getHeroeByIdAsync } from '../../src/base-pruebas/09-promesas';


describe('Pruebas en 09-promesas', () => {
    
    test('getHeroeByIdAsync debe de retornar un héroe', (done) => {
        
        const id = 1;
        getHeroeByIdAsync( id )
            .then( hero => {
            
                expect(hero).toEqual({
                    id: 1,
                    name: 'Batman',
                    owner: 'DC'
                });
                // El done, va a esperar que termine de correr todas las prubeas y luego va a evaluiar el expect dentro del then , de la promesa
                done();
            }); 
        
    });

    test('getHeroeByIdAsync debe de obtener un error si heroe no existe', (done) => {
        
        const id = 100;
        getHeroeByIdAsync( id )
           .then( hero => {
               expect( hero ).toBeFalsy();
               done();
           })
           .catch( error => {

                expect( error ).toBe(`No se pudo encontrar el héroe ${ id }`)

                done();
            });
        
    });


});