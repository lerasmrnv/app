import React from 'react';
import mainImage from "../../images/main_img2x.png";
import ButtonExplore from '../ButtonExplore/ButtonExplore';

export default function BannerMain() {
    return (
        <div className='conteiner-bannerMain'>
            <div className='conteiner-bannerMain__item'>
                <h1 className='bannerMain__title'>The new phones are <br /> here take a look.</h1>
                <p className='bannerMain_text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque in est <br /> dui, aliquam, tempor. Faucibus morbi turpis.</p>
                <ButtonExplore />
            </div>
            <img className='container-bannerMain__item-image' src={mainImage} alt="mainImage" />
        </div>
    )
}
