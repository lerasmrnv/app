import React from 'react';
import CardExplore from './CardExplore/CardExplore';
import cardsExplore from "./cardsExplore";

export default function BlockExplore() {
    return (
        <section className='cardExplore'>
            {
                cardsExplore.map((card) =>
                    <CardExplore title={card.title} text={card.text} image={card.image} />
                )
            }
        </section>
    )
}
