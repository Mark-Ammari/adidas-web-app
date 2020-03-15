import React, { useEffect } from 'react';
import './ProductListContainer.css';
import ProductList from '../../ProductList/ProductList';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import * as productListAction from '../../../store/actions/productList';

const ProductListContainer = (props) => {
    const dispatch = useDispatch()
    const history = useHistory()
    console.log("productlist page")
    let pathName = history.location.pathname.slice(1)
    useEffect(() => {
        dispatch(productListAction.fetchProductList("us", pathName))
    }, [pathName, dispatch])
    return (
        <div>
            <ProductList/>
        </div> 
    );
};

export default ProductListContainer;