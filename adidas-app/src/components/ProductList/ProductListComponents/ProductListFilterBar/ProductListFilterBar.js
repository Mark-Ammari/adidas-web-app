import React from 'react';
import './ProductListFilterBar.css';
import ProductListDropdown from '../ProductListDropdown/ProductListDropdown';
import { Typography, Checkbox } from '@material-ui/core';
import { useSelector } from 'react-redux';

const ProductListFilterBar = () => {
    const filterItems = useSelector(state => state.filterItems.filterItems)

    return (
        <div className="productlistfilterbar">
            {Object.keys(filterItems).slice(0, 4).map((filter, index) => {
                return <ProductListDropdown key={index} title={filterItems[filter].category}>
                    {
                        filterItems[filter].filter.map((item, key) => {
                            return <div key={key} className="productlistfilteritem">
                                <Checkbox
                                    color="default"
                                    value={item.value}
                                />
                                <Typography variant="h6">{item.name}</Typography>
                            </div>

                        })}
                </ProductListDropdown>
            })
            }
        </div >
    )
}

export default ProductListFilterBar