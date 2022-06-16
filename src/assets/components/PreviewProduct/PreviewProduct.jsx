import React from 'react';
import laptop from "../../images/laptops.png";
import watch from "../../images/watch.png";
import phone from "../../images/phones.png";
import tablet from "../../images/tablet.png";

export default function PreviewProduct() {
    return (
        <section className='previewProduct'>
            <div>
                <div className='previewProduct__container container-laptop'>
                    <img className='container-laptop__img' alt='laptop' src={laptop} />
                    <p className='container-laptop__text'>Laptops</p>
                    <h2 className='container-laptop__title'>True Laptop<br />Solution</h2>
                </div>
                <div className='previewProduct__container container-watch'>
                    <img className='container-watch__img' alt='watch' src={watch} />
                    <div className='container-watch__supporting'>
                        <p className='container-watch__text'>Watch</p>
                        <h2 className='container-watch__title'>Not just<br />stylisht</h2>
                    </div>
                </div>
            </div>
            <div className='previewProduct__container container-phone'>
                <img className='container-phone__img' alt='phone' src={phone} />
                <p className='container-phone__text'>Phones</p>
                <h2 className='container-phone__title'>Your day to day<br />life</h2>
            </div>
            <div className='previewProduct__container container-tablet'>
                <p className='container-tablet__text'>Tablet</p>
                <h2 className='container-tablet__title'>Empower your<br />work</h2>
                <img className='container-tablet__img' alt='tablet' src={tablet} />
            </div>
        </section>
    )
}
