import React from 'react';
import './ProductListPages.css';
import { useSelector } from 'react-redux';
import { IconButton, Typography } from '@material-ui/core';
import { ArrowBackIosRounded, ArrowForwardIosRounded } from '@material-ui/icons';

const ProductListPages = (props) => {
    const productList = useSelector(state => state.productList.productList)
    const loading = useSelector(state => state.productList.loading)

    return (
        <div className="productlistpages">
            <IconButton >
                <ArrowBackIosRounded fontSize="small" />
            </IconButton>
            {loading ? null :
                <Typography variant="subtitle1" color="textSecondary">{productList.itemList.currentSet}/{Math.ceil(productList.itemList.count/(productList.itemList.startIndex + 48))}</Typography>
            }
            <IconButton onClick={props.goForward}>
                <ArrowForwardIosRounded fontSize="small" />
            </IconButton>
        </div>
    )
}

export default ProductListPages;