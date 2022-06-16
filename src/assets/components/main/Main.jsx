import React from 'react';
import BannerMain from '../BannerMain/BannerMain';
import SaleContainer from '../SaleContainer/SaleContainer';
import PreviewProduct from '../PreviewProduct/PreviewProduct';


export default function Main() {
    return (
        <main className='main'>
            <BannerMain />
            <SaleContainer title="Shop our latest offers and categories" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque in est dui, aliquam, tempor. Faucibus mo" />
            <PreviewProduct />
        </main>
    )
}
