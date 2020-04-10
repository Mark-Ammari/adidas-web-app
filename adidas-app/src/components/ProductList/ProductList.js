import React from 'react';
import classes from './ProductList.module.css';
import { useSelector } from 'react-redux';
import ProductListProductCard from './ProductListComponents/ProductListProductCard/ProductListProductCard';
import ProductListProductCardSkeleton from './ProductListComponents/ProductListProductCardSkeleton/ProductListProductCardSkeleton';
import ProductListPages from './ProductListComponents/ProductListPages/ProductListPages';

const ProductList = () => {
    const productList = useSelector(state => state.productList.productItemList)
    const productItems = useSelector(state => state.productItems.productItems)
    const loading = useSelector(state => state.productList.loading)
    const loadProductItems = useSelector(state => state.productItems.loading)
    let arr = Array.apply(null, Array(48).map(function () { }))

    return (
        <>
            <ProductListPages />
            <div className={classes.ProductList}>
                {loadProductItems || loading ?
                    arr.map((item, key) => {
                        return <ProductListProductCardSkeleton key={key} />
                    })
                    :
                    productList.map((item, key) => {
                        if (productItems[key]) {
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
                                    <div className={classes.ProductListCurrentPrice}>
                                        <span>${productItems[key]["pricing_information"]["currentPrice"]}</span>
                                        <span>${productItems[key]['pricing_information']['standard_price']}</span>
                                    </div>
                                    :
                                    <div className={classes.ProductListStandardPrice}><span>${productItems[key]['pricing_information']['standard_price']}</span></div>
                                }
                            />
                        } else {
                            return;
                        }
                    })
                }
            </div>
            <ProductListPages />
        </>
    );
};

export default ProductList;