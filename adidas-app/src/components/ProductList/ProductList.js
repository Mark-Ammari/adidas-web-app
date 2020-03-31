import React from 'react';
import './ProductList.css';
import { useSelector } from 'react-redux';
import ProductListFilterBar from './ProductListComponents/ProductListFilterBar/ProductListFilterBar';
import ProductListProductCard from './ProductListComponents/ProductListProductCard/ProductListProductCard';
import ProductListProductCardSkeleton from './ProductListComponents/ProductListProductCardSkeleton/ProductListProductCardSkeleton';
import { Typography } from '@material-ui/core';
import ProductListPages from './ProductListComponents/ProductListPages/ProductListPages';

const ProductList = (props) => {
    const productList = useSelector(state => state.productList.productItemList)
    const productItems = useSelector(state => state.productItems.productItems)
    const loading = useSelector(state => state.productList.loading)
    const loadProductItems = useSelector(state => state.productItems.loading)
    let arr = Array.apply(null, Array(48).map(function () { }))

    return (
        <>
            {/* <ProductListFilterBar /> */}
            <ProductListPages />
            <div className="productlist">
                {loadProductItems || loading ? 
                    arr.map((item, key) => {
                        return <ProductListProductCardSkeleton key={key} />
                    })
                    :
                    productList.map((item, key) => {
                        return <ProductListProductCard
                            query={item.modelId}
                            id={item.productId}
                            key={key}
                            img={item.image.src}
                            badge={productItems[key]["attribute_list"]["badge_text"]}
                            name={item.displayName}
                            nameuri={item.displayName.split(' ').join('-').split('/').join('-')}
                            division={item.division}
                            colorvariations={item.colorVariations.length}
                            price={productItems[key]["pricing_information"]["currentPrice"] < productItems[key]['pricing_information']['standard_price'] ?
                                <div className="productlistcurrentprice">
                                    <span>${productItems[key]["pricing_information"]["currentPrice"]}</span>
                                    <span>${productItems[key]['pricing_information']['standard_price']}</span>
                                </div>
                                :
                                <div className="productliststandardprice"><span>${productItems[key]['pricing_information']['standard_price']}</span></div>
                            }
                        />
                    })
                }
            </div>
        </>
    );
};

export default ProductList;