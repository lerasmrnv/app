import React from 'react';



export default function Product(props) {
    return (
        <section className='cardProduct__item'>
            <img className='cardProduct__item-image' src={props.image} alt="productImage" />
            <h2 className='cardProduct__item-title'>{props.title}</h2>
            <p className='cardProduct__item-text'>{props.text}</p>
            <p className='cardProduct__item-cost'>{props.cost}</p>
        </section>
    )
}
