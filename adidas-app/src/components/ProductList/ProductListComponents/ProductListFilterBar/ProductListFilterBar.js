import React from 'react';
import './ProductListFilterBar.css';
import ProductListDropdown from '../ProductListDropdown/ProductListDropdown';
import { Typography, List, ListItem, ListItemText } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import * as productListAction from '../../../../store/actions/productList';

const ProductListFilterBar = () => {
    const filterItems = useSelector(state => state.filterItems.filterItems)
    const loading = useSelector(state => state.filterItems.loading)
    const history = useHistory()
    const pages = useSelector(state => state.pages.pages)
    const dispatch = useDispatch()
    const sortByHandler = value => {
        switch (value) {
            case 'newest-to-oldest': return dispatch(productListAction.productListSortNewest());
            case 'price-low-to-high': return dispatch(productListAction.productListSortLowToHigh());
            case 'price-high-to-low': return dispatch(productListAction.productListSortHighToLow());
            case 'top-sellers': return dispatch(productListAction.productListSortTopSellers());
            default: return dispatch(productListAction.productListSortTopSellers);
        }
    }

    return (
        <div className="productlistfilterbar">
            {loading ? null :
                <ProductListDropdown title={filterItems.sortBy.category}>
                    {filterItems.sortBy.filter.map((filter, key) => {
                        return <ListItem onClick={() => sortByHandler(filter.value)} button key={key}>
                            <ListItemText primary={filter.name}/>
                        </ListItem>
                    })}
                </ProductListDropdown>
            }
        </div >
    )
}

export default ProductListFilterBar