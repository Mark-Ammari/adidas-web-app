import React, { useEffect } from 'react';
import './ProductInfoContainer.css';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import * as searchProductAction from '../../../store/actions/searchProduct';
import ProductInfo from '../../ProductInfo/ProductInfo';

const ProductInfoContainer = (props) => {
    const dispatch = useDispatch()
    // console.log('productinfo page')
    useEffect(() => {
        dispatch(searchProductAction.fetchProductSearch(props.match.params.id))
    }, [dispatch, props.match.params.id]);
    return (
        <div>
            {/* <h1>{props.match.params.id}</h1> */}
            <ProductInfo />
        </div>
    )
}

export default ProductInfoContainer;