import React, { useEffect, useState } from 'react';
import './ProductList.css';
import { useSelector, useDispatch } from 'react-redux';
import ProductListFilterBar from './ProductListComponents/ProductListFilterBar/ProductListFilterBar';
import ProductListProductCard from './ProductListComponents/ProductListProductCard/ProductListProductCard';
import * as searchProductAction from '../../store/actions/searchProduct';
import { ContactSupportOutlined } from '@material-ui/icons';
import ProductListProductCardSkeleton from './ProductListComponents/ProductListProductCardSkeleton/ProductListProductCardSkeleton';

const ProductList = (props) => {
    const productList = useSelector(state => state.productList.productList)
    const productItems = useSelector(state => state.productItems.productItems)
    const loading = useSelector(state => state.productList.loading)
    const loadProductItems = useSelector(state => state.productItems.loading)
    let arr = Array.apply(null, Array(48).map(function(){}))

    return (
        <>
            {/* <ProductListFilterBar /> */}
            <div className="productlist">
                {loadProductItems || loading ?
                    arr.map(item => {
                        return <ProductListProductCardSkeleton />
                    })
                    :
                    productList.map((item, key) => {
                        console.log(item)
                        return <ProductListProductCard
                            query={item.modelId}
                            id={item.productId}
                            key={key}
                            img={item.image.src}
                            altimg={item.secondImage ? item.secondImage.src : item.image.src}
                            name={item.displayName}
                            nameuri={item.displayName.split(' ').join('-').split('/').join('-')}
                            division={item.division}
                            colorvariations={item.colorVariations.length}
                            currentprice={productItems[key]["pricing_information"].currentPrice}
                            standardprice={productItems[key]['pricing_information']['standard_price']}
                        />
                    })
                }
            </div>
        </>
    );
};

export default ProductList;