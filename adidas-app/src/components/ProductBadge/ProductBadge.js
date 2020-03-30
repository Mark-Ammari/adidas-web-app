import React from 'react';
import './ProductBadge.css';
import { FavoriteBorderRounded } from '@material-ui/icons'
import { IconButton } from '@material-ui/core';

const ProductBadge = (props) => {
    return (
        <div className="productlistproductcardbadgecontainer">
            <div><span className="productlistbadge">{props.badge}</span></div>
            <IconButton>
                <FavoriteBorderRounded />
            </IconButton>
        </div>
    )
}

export default ProductBadge;