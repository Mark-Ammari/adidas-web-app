import React from 'react';
import classes from './ProductListProductCardSkeleton.module.css';

const ProductListProductCardSkeleton = () => {
    return (
        <div className={classes.ProductListProductCardSkeleton}>
            <div className={classes.ProductListProductCardSkeletonImg}></div>
            <div className={classes.ProductListProductCardMarginSkeleton}>
                <p></p>
                <p></p>    
                <p></p>
                <p></p>
            </div>
    </div>
    )
}

export default ProductListProductCardSkeleton;