import React from 'react';
import './TrendingCard.css';
import { Typography } from '@material-ui/core';
import { NavLink, useHistory } from 'react-router-dom';

const TrendingCard = (props) => {
    const history = useHistory()
    const handleClick = e => e.stopPropagation()
    return (
        <div className="trendingcard">
            <NavLink onClick={handleClick} to={`/${props.name}/${props.id}`}>
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