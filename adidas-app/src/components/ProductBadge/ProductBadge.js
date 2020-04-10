import React from 'react';
import classes from './ProductBadge.module.css';
import { FavoriteBorderRounded } from '@material-ui/icons'
import { IconButton } from '@material-ui/core';

const ProductBadge = (props) => {
    return (
        <div className={classes.ProductListBadgeContainer}>
            <div><span className={classes.ProductListBadge}>{props.badge}</span></div>
            <IconButton>
                <FavoriteBorderRounded />
            </IconButton>
        </div>
    )
}

export default ProductBadge;