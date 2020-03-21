import React from 'react';
import './RatingBreakdown.css';
import { Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
        marginLeft: "5px"
    },
});

const RatingBreakdown = props => {
    const classes = useStyles()
    return (
        <div className="ratingbreakdown">
            <div className="skillbar">
                <div style={{ width: props.width }} className="bar"></div>
            </div>
            <Typography className={classes.root} color="textSecondary" variant="subtitle2" >{props.value}</Typography>
        </div>
    );
};

export default RatingBreakdown;