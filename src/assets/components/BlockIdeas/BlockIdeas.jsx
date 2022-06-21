import React from 'react';
import imageIdea from "../../images/blockIdeas.png";

export default function BlockIdeas() {
    return (
        <section className='blockIdea'>
            <img className='blockIdea-image' src={imageIdea} alt='imageIdea' />
            <div className='blockIdea__conteiner'>
                <p className='blockIdea__conteiner-text'>We Make It Easy To Find The Great Design Talent, Easier...</p>
                <p className='blockIdea__conteiner-text'>Road Design Handbook For The International Road...</p>
                <p className='blockIdea__conteiner-text'>The Best Kept Secrets About Creative People</p>
                <p className='blockIdea__conteiner-text'>We Make It Easy To Find The Great Design Talent, Easier...</p>
            </div>
        </section>
    )
}
