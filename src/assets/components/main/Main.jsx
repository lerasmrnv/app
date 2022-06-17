import React from 'react';
import BannerMain from '../BannerMain/BannerMain';
import SaleContainer from '../SaleContainer/SaleContainer';
import PreviewProduct from '../PreviewProduct/PreviewProduct';
import CardProduct from '../CardProduct/CardProduct';
import BlockIdeas from '../BlockIdeas/BlockIdeas';
import BlockExplore from '../BlockExplore/BlockExplore';


export default function Main() {
    return (
        <main className='main'>
            <BannerMain />
            <SaleContainer title="Shop our latest offers and categories" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque in est dui, aliquam, tempor. Faucibus mo" />
            <PreviewProduct />
            <SaleContainer title="Save on our most selled items." text="Our new Limited Edition Winter Design BESPOKE 4-Door Flex™" />
            <CardProduct />
            <SaleContainer title="See the best around here" text="Our new Limited Edition Winter Design BESPOKE 4-Door Flex™" />
            <BlockExplore />
            <SaleContainer title="Ideas have a place here" text="Our new Limited Edition Winter Design BESPOKE 4-Door Flex™" />
            <BlockIdeas />
        </main>
    )
}
