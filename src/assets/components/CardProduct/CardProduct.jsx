import React from 'react';
import Product from './Product/Product';
import products from './product';



export default function CardProduct() {
    return (
        <section className='cardProduct'>
            {
                products.map((product) =>
                    <Product key={product.id} title={product.title} text={product.text} cost={product.cost} image={product.image} />)
            }
        </section>
    )
}
