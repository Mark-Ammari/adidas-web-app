import React from 'react';
import './NavImgLinkSection.css';
import NavImgLink from '../NavImgLink/NavImgLink';
import menShoes from '../../assets/shoes.webp';
import menClothes from '../../assets/clothing.webp';
import womenShoes from '../../assets/womenshoes.webp';
import womensClothes from '../../assets/womensclothing.webp';
import { Typography } from '@material-ui/core';

const NavImgLinkSection = props => {
    return (
        <>
            <div className="trendingtitle">
                <Typography variant="h4">Shop Now</Typography>
            </div>
            <div className="navimglinksectioncontainer">
                <NavImgLink to="/men-shoes" img={menShoes}>Men's Shoes</NavImgLink>
                <NavImgLink to="/men-apparel" img={menClothes}>Men's Apparel</NavImgLink>
                <NavImgLink to="/women-shoes" img={womenShoes}>Women's Shoes</NavImgLink>
                <NavImgLink to="/women-apparel" img={womensClothes}>Women's Apparel</NavImgLink>
            </div>
        </>
    );
};

export default NavImgLinkSection;