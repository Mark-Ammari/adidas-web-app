import React from 'react';
import "./ProductInfoDescription.css";
import { Typography } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import NavBreadcrumbs from '../../../NavBreadcrumbs/NavBreadcrumbs';

const ProductInfoDescription = props => {
    return (
        <div className="productinfodescription">
            <div className="productInfocontainer">
                <NavBreadcrumbs absolutepath={props.search["breadcrumb_list"][0].link.slice(3)} absolutepathtext={props.search["breadcrumb_list"][0].text} relativepath={props.search["breadcrumb_list"][1].link.slice(3)} relativepathtext={props.search["breadcrumb_list"][1].text} />
                <Typography color="textSecondary" variant="h6" component="h6">{props.search["attribute_list"].brand}</Typography>
                <Typography variant="h5" component="h5" gutterBottom>{props.search.name}</Typography>
                <Typography variant="h5" color="textPrimary" component="h5" >Available Colors</Typography>
                <Typography variant="h6" color="textPrimary" component="h5" gutterBottom >{props.search["attribute_list"].color}</Typography>
                <div className="colorvariationlinks">
                    {props.search["product_link_list"].filter(type => type.type === "color-variation").map((colorVariation, key) => {
                        return <NavLink key={key} to={`/${colorVariation.name}/${colorVariation.productId}`}><img src={colorVariation.image} alt="product color" /></NavLink>
                    })}
                </div>
                <Typography variant="subtitle1" gutterBottom>{`$${props.search["pricing_information"].currentPrice}`}</Typography>
            </div>
        </div>
    );
};

export default ProductInfoDescription;