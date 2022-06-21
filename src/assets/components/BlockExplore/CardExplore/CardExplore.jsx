import React from 'react';
import ButtonExplore from '../../ButtonExplore/ButtonExplore';

export default function CardExplore(props) {
    return (
        <section className='cardExplore__container' key={props.id}>
            <p className='cardExplore__item-text'>{props.text}</p>
            <h2 className='cardExplore__item-title'>{props.title}</h2>
            <ButtonExplore />
            <img className='cardExplore__item-image' src={props.image} alt="cardImage" />
        </section>
    )
}
