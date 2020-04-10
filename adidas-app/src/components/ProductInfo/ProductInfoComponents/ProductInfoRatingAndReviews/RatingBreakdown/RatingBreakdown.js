import React from 'react';
import classes from './RatingBreakdown.module.css';
import { Typography } from '@material-ui/core';

const RatingBreakdown = props => {
    return (
        <div className={classes.RatingBreakdown}>
            <div className={classes.Ratings}><Typography variant="subtitle2">{props.rating} Stars</Typography></div>
            <div className={classes.SkillBar}>
                <div style={{ width: props.width }} className={classes.Bar}></div>
            </div>
            <div className={classes.Count}><Typography color="textSecondary" variant="subtitle2" >{props.value}</Typography></div>
        </div>
    );
};

export default RatingBreakdown;