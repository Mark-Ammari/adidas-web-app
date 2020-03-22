import React from 'react';
import './TrendingCard.css';
import { Typography } from '@material-ui/core';
import { NavLink } from 'react-router-dom';

const TrendingCard = (props) => {
    return (
        <div className="trendingcard">
            <NavLink to={{
                pathname: `/${props.name}/${props.id}`,
                search: `?model=${props.query}`
            }}>
                <img src={props.img} alt="trending" />
                <Typography variant="subtitle2" color="textSecondary">{props.division}</Typography>
                <div className="margin">
                    <Typography variant="body1" color="textPrimary">{props.name}</Typography>
                    <Typography variant="body2" color="textPrimary">{props.price || ''}</Typography>
                </div>
            </NavLink>
        </div>
    );
};

export default TrendingCard;