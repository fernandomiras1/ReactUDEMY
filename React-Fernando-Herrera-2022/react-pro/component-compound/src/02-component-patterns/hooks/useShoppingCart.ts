import { useState } from 'react';
import { Product, ProductInCart } from '../interfaces/interfaces';



export const useShoppingCart = () => {

    /**
     *  Seria un objeto el shoppingCart algo asi
     *  '1': {...producto1, count: 10}
     *  '2': {...producto2, count: 10}
     */
    const [ shoppingCart, setShoppingCart ] = useState<{ [key:string]: ProductInCart }>({});


    const onProductCountChange = ({ count, product }: { count:number, product: Product }) => {
        console.log('onProductCountChange', count, product);
        
        setShoppingCart( oldShoppingCart => {

            const productInCart: ProductInCart = oldShoppingCart[product.id] || { ...product, count: 0 };

            if( Math.max( productInCart.count + count, 0 ) > 0 ) {
                productInCart.count += count;
                return {
                    ...oldShoppingCart,
                    [product.id]: productInCart
                }
            }

            // Borrar el producto
            const { [product.id]: toDelete, ...rest  } = oldShoppingCart;
            return rest;


            // if( count === 0 ) {
                // const {  [product.id]: toDelete, ...rest  } = oldShoppingCart;
                // return rest;
            // }

            // return {
            //     ...oldShoppingCart,
            //     [ product.id ]: { ...product, count }
            // }
        })

    }

    return {
        shoppingCart,
        onProductCountChange,
    }

}