import React from 'react';
import './ProductListProductCard.css';
import { Typography, IconButton } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import ProductBadge from '../../../ProductBadge/ProductBadge';
const ProductListProductCard = (props) => {
    return (
        <div className="productlistproductcard">
            <NavLink to={{
                pathname: `/${props.nameuri}/${props.id}`,
                search: `?model=${props.query}`
            }}>
                <div
                    className="productListProductCardImg"
                    style={{ backgroundImage: `url(${props.img})` }}
                >

                </div>
                <div className="productlistproductcardmargin">
                    <Typography variant="subtitle2" color="textSecondary">{props.division}</Typography>
                    <Typography variant="body1" color="textPrimary">{props.name}</Typography>
                    {props.price}
                    <Typography variant="subtitle2" color="textSecondary">{props.colorvariations ? `${props.colorvariations} colors` : ''}</Typography>
                </div>
            </NavLink>
            <ProductBadge badge={props.badge}/>
        </div>
    );
};

export default ProductListProductCard;