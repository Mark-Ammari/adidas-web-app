import React, { useEffect, useCallback, useMemo } from 'react';
import './ProductListContainer.css';
import ProductList from '../../ProductList/ProductList';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import * as productListAction from '../../../store/actions/productList';
import * as productItemsAction from '../../../store/actions/productItems';
import * as filterAction from '../../../store/actions/filter';

const ProductListContainer = (props) => {
    const dispatch = useDispatch()
    const history = useHistory()
    let pathName = history.location.pathname.slice(1)

    const callback = useCallback(() => {
        dispatch(productListAction.fetchProductList("us", pathName))
    }, [pathName, dispatch])

    const memoize = useMemo(() => callback, [callback])

    useEffect(() => {
        dispatch(productItemsAction.fetchProductItems("us", pathName))
        dispatch(filterAction.fetchFilter())
    }, [pathName, dispatch])

    useEffect(() => {
        memoize()
    }, [memoize])
    return (
        <div>
            <ProductList/>
        </div> 
    );
};

export default ProductListContainer;