import React from 'react';

export default function SaleContainer(props) {
    return (
        <section className='container-sale'>
            <h2 className='container-sale__title'>{props.title}</h2>
            <p className='container-sale__text'>{props.text}</p>
        </section>
    )
}
