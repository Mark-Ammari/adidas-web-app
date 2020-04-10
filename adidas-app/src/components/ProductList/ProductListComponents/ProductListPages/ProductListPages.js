import React, { useEffect, useState } from 'react';
import classes from './ProductListPages.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { IconButton, Typography } from '@material-ui/core';
import { ArrowBackIosRounded, ArrowForwardIosRounded } from '@material-ui/icons';
import { goBackPage, goForwardPage, resetPageToZero } from '../../../../store/actions/pages'
import { useHistory } from 'react-router-dom';
import usePrevious from '../../../../hooks/usePrevious';

const ProductListPages = () => {
    const dispatch = useDispatch();
    const productList = useSelector(state => state.productList.productList)
    const loading = useSelector(state => state.productList.loading)
    const pages = useSelector(state => state.pages.pages);
    
    const history = useHistory()
    
    const [ match, setMatch ] = useState(history.location.pathname)
    const previous = usePrevious(match)
   
    useEffect(() => {
        setMatch(history.location.pathname)
        if (previous !== match) {
            dispatch(resetPageToZero())
        }
        history.replace({
            search: `?start=${pages}`
        })
    }, [history, pages, dispatch, history.location.pathname, match, previous])

    const goForward = () => {
        dispatch(goForwardPage())
    }

    const goBack = () => {
        dispatch(goBackPage())
    }

    return (
        <div className={classes.ProductListPages}>
            {loading ? null
                :
                <>
                    <IconButton disabled={productList.itemList.currentSet <= 1} onClick={goBack}>
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