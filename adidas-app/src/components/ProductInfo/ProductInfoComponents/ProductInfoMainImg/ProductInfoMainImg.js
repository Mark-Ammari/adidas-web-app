import React from 'react';
import classes from "./ProductInfoMainImg.module.css";
import { IconButton } from '@material-ui/core';
import { ArrowRight, ArrowLeft } from '@material-ui/icons';
import ProductBadge from '../../../ProductBadge/ProductBadge';

const ProductInfoMainImg = props => {
    return (
        <div className={classes.ProductInfoMainImg}>
            <div
                style={{
                    backgroundImage: `url(${props.search})`
                }}
                className={classes.ProductInfoImageContainer}
            >
                <ProductBadge badge={props.badge}/>
                <div className={classes.StacContainer}>
                    <IconButton onClick={props.stacleft}>
                        <ArrowLeft fontSize="large" />
                    </IconButton>
                    <IconButton onClick={props.stacright}>
                        <ArrowRight fontSize="large" />
                    </IconButton>
                </div>
            </div>
        </div>
    );
};

export default ProductInfoMainImg;