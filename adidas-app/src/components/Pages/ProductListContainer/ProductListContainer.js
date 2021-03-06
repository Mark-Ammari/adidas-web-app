import React, { useEffect } from 'react';
import ProductList from '../../ProductList/ProductList';
import { useDispatch } from 'react-redux';
import * as productListAction from '../../../store/actions/productList';
import * as productItemsAction from '../../../store/actions/productItems';
import * as filterAction from '../../../store/actions/filter';

const ProductListContainer = (props) => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(productListAction.fetchProductList("us", props.match.url.slice(1), props.location.search.slice(7)))
        dispatch(productItemsAction.fetchProductItems("us", props.match.url.slice(1), props.location.search.slice(7)))
        dispatch(filterAction.fetchFilter())
    }, [dispatch, props.match.url, props.location.search])

    return (
        <div>
            <ProductList />
        </div>
    );
};

export default ProductListContainer;