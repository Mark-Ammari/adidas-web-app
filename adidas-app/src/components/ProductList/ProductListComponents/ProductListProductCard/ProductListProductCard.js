import React from 'react';
import classes from './ProductListProductCard.module.css';
import { Typography } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import ProductBadge from '../../../ProductBadge/ProductBadge';

const ProductListProductCard = (props) => {
    return (
        <div className={classes.ProductListProductCard}>
            <NavLink to={{
                pathname: `/${props.nameuri}/${props.id}`,
                search: `?model=${props.query}`
            }}>
                <div
                    className={classes.ProductListProductCardImg}
                    style={{ backgroundImage: `url(${props.img})` }}
                >
                </div>
                <div className={classes.ProductListProductCardMargin}>
                    <Typography variant="subtitle2" color="textSecondary">{props.division}</Typography>
                    <Typography variant="body1" color="textPrimary">{props.name}</Typography>
                    {props.price}
                    <Typography variant="subtitle2" color="textSecondary">{props.colorvariations ? `${props.colorvariations} colors` : ''}</Typography>
                </div>
            </NavLink>
            <ProductBadge badge={props.badge} />
        </div>
    );
};

export default ProductListProductCard;