import React, { useEffect } from 'react';
import './ProductList.css';
import { useSelector } from 'react-redux';
import TrendingCard from '../TrendingCard/TrendingCard';
import { Typography, ListItemSecondaryAction } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import * as productSearchAction from '../../store/actions/searchProduct';

const ProductList = (props) => {
    const productlist = useSelector(state => state.productList.productList.items)
    const loading = useSelector(state => state.productList.loading)
    return (
        <div className="productlist">
            {loading ? null :
                productlist.map((item, key) => {
                    return <TrendingCard id={item.productId} key={key} img={item.image.src} name={item.displayName} division={item.division} />
                })
            }
        </div>
    );
};

export default ProductList;