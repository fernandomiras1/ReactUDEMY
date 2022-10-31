import { ProductCard as ProductCardHOC } from './ProductCard';
import { ProductCardHOCProps } from '../interfaces/interfaces';

import { ProductButtons } from './ProductButtons';
import { ProductImage } from './ProductImage';
import { ProductTitle } from './ProductTitle';

export { ProductButtons } from './ProductButtons';
export { ProductImage } from './ProductImage';
export { ProductTitle } from './ProductTitle';

/**
 * ProductCardHOCProps : Ademas le agregamos la intefaces corresponidinete
 * Me permite extender el Compoente y exportar Estos compoentes para poder lograr esto
 *     <ProductCard product={ product }>
            <ProductCard.Image />
            <ProductCard.Title title={ 'Hola Mundo' } />
            <ProductCard.Buttons  />
        </ProductCard>
 */
export const ProductCard: ProductCardHOCProps = Object.assign( ProductCardHOC, {
    Title: ProductTitle,
    Image: ProductImage,
    Buttons: ProductButtons
})


export default ProductCard;

