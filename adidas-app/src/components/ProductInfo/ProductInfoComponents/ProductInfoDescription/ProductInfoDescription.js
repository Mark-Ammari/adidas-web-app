import React from 'react';
import classes from "./ProductInfoDescription.module.css";
import { Typography } from '@material-ui/core';
import { NavLink, useHistory } from 'react-router-dom';
import NavBreadcrumbs from '../../../NavBreadcrumbs/NavBreadcrumbs';
import { useSelector } from 'react-redux';
import Ratings from '../../../Ratings/Ratings';

const ProductInfoDescription = props => {
    const searchProduct = useSelector(state => state.searchProduct.searchProduct)
    const history = useHistory()
    const getRatings = useSelector(state => state.ratingsAndReviews.ratingsProduct)
    let sale = null
    if (searchProduct["pricing_information"]["standard_price"] > searchProduct["pricing_information"].currentPrice) {
        sale = <div className={classes.SalesPrice}>
            <span style={{
                color: "red",
                marginRight: "20px"
            }}>{`$${searchProduct["pricing_information"].currentPrice}`}</span>
            <span style={{
                textDecoration: "line-through"
            }}>{`$${searchProduct["pricing_information"]["standard_price"]}`}</span>
        </div>
    } else {
        sale = <span className={classes.StandardPrice}>{`$${searchProduct["pricing_information"]["standard_price"]}`}</span>
    }

    return (
        <div className={classes.ProductInfoDescription}>
            <div className={classes.ProductInfoContainer}>
                <NavBreadcrumbs
                    absolutepath={searchProduct["breadcrumb_list"][0].link.slice(3)}
                    absolutepathtext={searchProduct["breadcrumb_list"][0].text}
                    relativepath={searchProduct["breadcrumb_list"][1].link.slice(3)}
                    relativepathtext={searchProduct["breadcrumb_list"][1].text} />
                {Object.keys(getRatings).length > 0 ?
                    <div className={classes.JumpToReviews}>
                        <Ratings value={getRatings.overallRating} />
                        <a href="#reviews">Read All {getRatings.reviewCount} Reviews</a>
                    </div>
                    : null
                }

                <Typography color="textSecondary" variant="h6" component="h6">{searchProduct["attribute_list"].brand}</Typography>
                <Typography variant="h5" component="h5" gutterBottom>{searchProduct.name}</Typography>
                <Typography variant="h5" color="textPrimary" component="h5" >Available Colors</Typography>
                <Typography variant="h6" color="textPrimary" component="h5" gutterBottom >{searchProduct["attribute_list"].color}</Typography>

                <div className={classes.ColorVariationLinks}>
                    {searchProduct["product_link_list"].filter(type => type.type === "color-variation").map((colorVariation, key) => {
                        return <NavLink key={key} to={{
                            pathname: `/${colorVariation.name.split(' ').join('-').split('/').join('-')}/${colorVariation.productId}`,
                            search: `${history.location.search}`
                        }}><img src={colorVariation.image} alt="product color" /></NavLink>
                    })}
                </div>
                {sale}
            </div>
        </div>
    );
};

export default ProductInfoDescription;