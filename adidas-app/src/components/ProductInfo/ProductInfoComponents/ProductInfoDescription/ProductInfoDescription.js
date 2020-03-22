import React from 'react';
import "./ProductInfoDescription.css";
import { Typography } from '@material-ui/core';
import { NavLink, useHistory } from 'react-router-dom';
import NavBreadcrumbs from '../../../NavBreadcrumbs/NavBreadcrumbs';
import { useSelector } from 'react-redux';
import Ratings from '../../../Ratings/Ratings';

const ProductInfoDescription = props => {
    const searchProduct = useSelector(state => state.searchProduct.searchProduct)
    const history = useHistory()
    let sale = null
    if (searchProduct["pricing_information"]["standard_price"] > searchProduct["pricing_information"].currentPrice) {
        sale = <div className="saleprice">
            <span style={{
                color: "red",
                marginRight: "20px"
            }}>{`$${searchProduct["pricing_information"].currentPrice}`}</span>
            <span style={{
                textDecoration: "line-through"
            }}>{`$${searchProduct["pricing_information"]["standard_price"]}`}</span>
        </div>
    } else {
        sale = <span className="standardprice">{`$${searchProduct["pricing_information"]["standard_price"]}`}</span>
    }

    return (
        <div className="productinfodescription">
            <div className="productInfocontainer">
                <NavBreadcrumbs
                    absolutepath={searchProduct["breadcrumb_list"][0].link.slice(3)}
                    absolutepathtext={searchProduct["breadcrumb_list"][0].text}
                    relativepath={searchProduct["breadcrumb_list"][1].link.slice(3)}
                    relativepathtext={searchProduct["breadcrumb_list"][1].text} />
                <Ratings />
                <Typography color="textSecondary" variant="h6" component="h6">{searchProduct["attribute_list"].brand}</Typography>
                <Typography variant="h5" component="h5" gutterBottom>{searchProduct.name}</Typography>
                <Typography variant="h5" color="textPrimary" component="h5" >Available Colors</Typography>
                <Typography variant="h6" color="textPrimary" component="h5" gutterBottom >{searchProduct["attribute_list"].color}</Typography>

                <div className="colorvariationlinks">
                    {searchProduct["product_link_list"].filter(type => type.type === "color-variation").map((colorVariation, key) => {
                        return <NavLink key={key} to={{
                            pathname: `/${colorVariation.name}/${colorVariation.productId}`,
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