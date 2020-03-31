import React from 'react';
import './ProductListPages.css';
import { useSelector, useDispatch } from 'react-redux';
import { IconButton, Typography } from '@material-ui/core';
import { ArrowBackIosRounded, ArrowForwardIosRounded } from '@material-ui/icons';
import { goBackPage, goForwardPage } from '../../../../store/actions/pages';

const ProductListPages = (props) => {
    const productList = useSelector(state => state.productList.productList)
    const loading = useSelector(state => state.productList.loading)
    const pages = useSelector(state => state.pages.pages)
    const dispatch = useDispatch()
    const goBack = () => {
        dispatch(goBackPage())
    }
    const goForward = () => {
        dispatch(goForwardPage())
    }
    return (
        <div className="productlistpages">
            {loading ? null
                :
                <>
                    <IconButton disabled={pages <= 0} onClick={goBack}>
                        <ArrowBackIosRounded fontSize="small" />
                    </IconButton>

                    <Typography variant="subtitle1" color="textSecondary">{productList.itemList.currentSet}/{Math.ceil(productList.itemList.count / (48))}</Typography>

                    <IconButton disabled={productList.itemList.currentSet >= Math.ceil(productList.itemList.count / (48))} onClick={goForward}>
                        <ArrowForwardIosRounded fontSize="small" />
                    </IconButton>
                </>
            }
        </div>
    )
}

export default ProductListPages;