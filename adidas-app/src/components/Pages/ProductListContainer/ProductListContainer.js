import React, { useEffect, useCallback, useMemo, useState } from 'react';
import './ProductListContainer.css';
import ProductList from '../../ProductList/ProductList';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import * as productListAction from '../../../store/actions/productList';
import * as productItemsAction from '../../../store/actions/productItems';
import * as filterAction from '../../../store/actions/filter';
import usePrevious from '../../../hooks/usePrevious';
import {resetPageToZero} from '../../../store/actions/pages'

const ProductListContainer = (props) => {
    const dispatch = useDispatch()
    const history = useHistory()
    const pages = useSelector(state => state.pages.pages)
    let pathName = history.location.pathname.slice(1)
    let [ match, setMatch ] = useState(props.match.url)
    let previous = usePrevious(match)

    useEffect(() => {
        dispatch(productListAction.fetchProductList("us", pathName, pages))
        dispatch(productItemsAction.fetchProductItems("us", pathName, pages))
        dispatch(filterAction.fetchFilter())
    }, [pathName, dispatch, pages])

    useEffect(() => {
        setMatch(props.match.url)
        if (previous !== match) {
            dispatch(resetPageToZero())
        }
    }, [dispatch, match, previous, props.match.url])

    return (
        <div>
            <ProductList 
                
            />
        </div> 
    );
};

export default ProductListContainer;