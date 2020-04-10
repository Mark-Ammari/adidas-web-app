import React from 'react';
import classes from './TrendingBar.module.css';
import { useSelector } from 'react-redux';
import { Typography } from '@material-ui/core';
import ProductListProductCard from '../ProductList/ProductListComponents/ProductListProductCard/ProductListProductCard';

const TrendingBar = () => {
    const trendingList = useSelector(state => state.trendingList.trendingList)
    const loading = useSelector(state => state.trendingList.loading)
    return (
        <>
            <div className={classes.TrendingTitle}>
                <Typography variant="h4"><strong>What's Trending</strong></Typography>
            </div>
            <div className={classes.TrendingBar}>
                {loading ? null :
                    trendingList.items.map((item, key) => {
                        return <ProductListProductCard
                            query={item.model}
                            id={item.article}
                            key={key}
                            img={item["image-url"]}
                            // badge={productItems[key]["attribute_list"]["badge_text"]}
                            name={item.name}
                            nameuri={item.name.split(' ').join('-').split('/').join('-')}
                            division={item.division}
                            // colorvariations={item.colorVariations.length}
                            price={item["current-price"] < item["original-price"] ?
                                <div className={classes.ProductListCurrentPrice}>
                                    <span>${item["current-price"]}</span>
                                    <span>${item["original-price"]}</span>
                                </div>
                                :
                                <div className={classes.ProductListStandardPrice}><span>${item["current-price"]}</span></div>
                            }
                        />
                    })
                }
            </div>
        </>
    );
};

export default TrendingBar;