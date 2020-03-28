import React from 'react';
import './ProductListProductCard.css';
import { Typography } from '@material-ui/core';
import { NavLink } from 'react-router-dom';

const ProductListProductCard = (props) => {
    return (
        <div className="productlistproductcard">
            <NavLink to={{
                pathname: `/${props.nameuri}/${props.id}`,
                search: `?model=${props.query}`
            }}>
                <img id="productListProductCardImg" onMouseOver={(e) => {e.target.src=props.altimg}} onMouseOut={(e) => {e.target.src=props.img}}  src={props.img} alt="product" />
                <div className="productlistproductcardmargin">
                    <Typography variant="subtitle2" color="textSecondary">{props.division}</Typography>
                    <Typography variant="body1" color="textPrimary">{props.name}</Typography>
                    {props.currentPrice < props.standardPrice ?
                        <div>
                            <Typography>${props.currentprice}</Typography>
                            <Typography>${props.standardprice}</Typography>
                        </div>
                        :
                        <Typography>${props.standardprice}</Typography>
                    }
                    <Typography variant="subtitle2" color="textSecondary">{props.colorvariations ? `${props.colorvariations} colors` : ''}</Typography>
                </div>
            </NavLink>
        </div>
    );
};

export default ProductListProductCard;