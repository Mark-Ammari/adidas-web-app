import React from 'react';
import './ProductListFilterBar.css';
import ProductListDropdown from '../ProductListDropdown/ProductListDropdown';
import { Typography, List, ListItem, ListItemText } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

const ProductListFilterBar = () => {
    const filterItems = useSelector(state => state.filterItems.filterItems)
    const loading = useSelector(state => state.filterItems.loading)
    const history = useHistory()
    const pages = useSelector(state => state.pages.pages)

    const sortByHandler = value=> {
        history.push({
            
        })
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