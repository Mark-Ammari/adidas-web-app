import React from 'react';
import classes from './NavImgLinkSection.module.css';
import NavImgLink from '../NavImgLink/NavImgLink';
import menShoes from '../../assets/shoes.webp';
import menClothes from '../../assets/clothing.webp';
import womenShoes from '../../assets/womenshoes.webp';
import womensClothes from '../../assets/womensclothing.webp';
import { Typography } from '@material-ui/core';

const NavImgLinkSection = () => {
    return (
        <div className={classes.NavImgLinkSect}>
            <div className={classes.ShopTitle}>
                <Typography variant="h4">Shop Now</Typography>
            </div>
            <div className={classes.NavImgLinkSectionContainer}>
                <NavImgLink to="/men-shoes" img={menShoes}>Men's Shoes</NavImgLink>
                <NavImgLink to="/men-apparel" img={menClothes}>Men's Apparel</NavImgLink>
                <NavImgLink to="/women-shoes" img={womenShoes}>Women's Shoes</NavImgLink>
                <NavImgLink to="/women-apparel" img={womensClothes}>Women's Apparel</NavImgLink>
            </div>
        </div>
    );
};

export default NavImgLinkSection;