import React from 'react';
import classes from './Banner.module.css';
import AdiBtn from '../AdiBtn/AdiBtn';
import { Typography } from '@material-ui/core';

const Banner = () => {
    return (
        <div className={classes.Banner}>
            <div className={classes.BannerContainer}>
                <div className={classes.TextContainer}>
                    <h2 className={classes.BannerSlogan} >That Boost Hype Is Real</h2>
                    <Typography>Iconic Ultraboost 20. Outrageous energy return. You ready?</Typography>
                </div>
                <div>
                    <AdiBtn type="navButton" to="/men">Shop Men</AdiBtn>
                    <AdiBtn type="navButton" to="/women">Shop Women</AdiBtn>
                </div>
            </div>
        </div>
    );
}

export default Banner;