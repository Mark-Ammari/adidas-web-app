import React, { useEffect, useCallback, useMemo, useState } from 'react';
import './ProductListContainer.css';
import ProductList from '../../ProductList/ProductList';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import * as productListAction from '../../../store/actions/productList';
import * as productItemsAction from '../../../store/actions/productItems';
import * as filterAction from '../../../store/actions/filter';

const ProductListContainer = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    let pathName = history.location.pathname.slice(1)
    let [page, setPage] = useState(0)

    useEffect(() => {
        dispatch(productListAction.fetchProductList("us", pathName, page))
        dispatch(productItemsAction.fetchProductItems("us", pathName, page))
        dispatch(filterAction.fetchFilter())
    }, [pathName, dispatch, page])

    return (
        <div>
            <ProductList 
               
            />
        </div> 
    );
};

export default ProductListContainer;