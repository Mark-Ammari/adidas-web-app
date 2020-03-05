import React from 'react';
import './TrendingCard.css';
import { Typography } from '@material-ui/core';

const TrendingCard = (props) => {
    return (
        <div className="trendingcard">
            <img src={props.img} alt="trending" />
            <Typography variant="subtitle2" color="textSecondary">{props.division}</Typography>
            <div className="margin">
                <Typography variant="body1" color="textPrimary">{props.name}</Typography>
                <Typography variant="body2" color="textPrimary">{`$${props.price}`}</Typography>
            </div>
        </div>
    );
};

export default TrendingCard;