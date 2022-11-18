import { ProductCard, ProductImage, ProductTitle, ProductButtons } from '../components';
import { useShoppingCart } from '../hooks/useShoppingCart';
import { products } from '../data/products';
import '../styles/custom-styles.css';


export const ShoppingPage = () => {

    const { shoppingCart, onProductCountChange } = useShoppingCart();
    
    return (
        <div>
            <h1>Shopping Store</h1>
            <hr />

            <div style={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap'
            }}>


                {
                    products.map(product => (
                        <ProductCard
                            key={product.id} 
                            product={ product }
                            className="bg-dark text-white"
                            onChange={ onProductCountChange }
                            value={ shoppingCart[product.id]?.count || 0 }>

                            <ProductCard.Image className="custom-image" />
                            <ProductCard.Title className="text-bold"/>
                            <ProductCard.Buttons className="custom-buttons" />
                        </ProductCard>
                    ))
                }

            </div>

            <div className="shopping-cart">

                {
                    Object.entries( shoppingCart ).map( ([ key, product ]) => (
                        <ProductCard 
                            key={ key }
                            product={ product }
                            className="bg-dark text-white"
                            style={{ width: '100px' }}
                            onChange={ onProductCountChange }
                            value={ product.count }
                        >
                            <ProductImage className="custom-image" style={{ boxShadow: '10px 10px 10px rgba(0,0,0,0.2)' }} />
                            <ProductButtons 
                                className="custom-buttons"
                                style={{
                                    display: 'flex',
                                    justifyContent: 'center'
                                }}
                            />
                        </ProductCard>
                    ))
                }


            </div>

            <hr />
            <h3>Extensible Styles Pattern</h3>
            <p>Pasar CSS a tus propios componentes personalizados</p>


            <div style={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap'
            }}>
                <ProductCard 
                    product={ products[1] }
                    className="bg-dark text-white"
                >
                    <ProductImage className="custom-image" style={{ boxShadow: '10px 10px 10px rgba(0,0,0,0.2)' }} />
                    <ProductTitle className="text-bold" />
                    <ProductButtons className="custom-buttons" />
                </ProductCard>

                <ProductCard 
                    product={ products[0] }
                    style={{
                        backgroundColor: '#70D1F8'
                    }}
                >
                    <ProductImage style={{ boxShadow: '10px 10px 10px rgba(0,0,0,0.2)' }} />
                    <ProductTitle style={{ fontWeight: 'bold' }} />
                    <ProductButtons style={{
                        display: 'flex',
                        justifyContent: 'end'
                    }}/>
                </ProductCard>


            </div>
        </div>
    )
}
