import React from 'react';
import './ReviewPost.css';
import { Typography, makeStyles } from '@material-ui/core';
import { Check } from '@material-ui/icons';
import Ratings from '../../../Ratings/Ratings';

const useStyles = makeStyles({
    root: {
        fontWeight: "bolder"
    },
    uppercase: {
        textTransform: "uppercase"
    }
});

const ReviewPost = (props) => {
    const classes = useStyles()

    return (
        <div className="reviewpost">
            <div className="reviewposttopbar">
                <Ratings {...props} />
                <Typography variant="subtitle2" color="textSecondary" >{props.date}</Typography>
            </div>
            <Typography className={[classes.root, classes.uppercase].join(' ')} gutterBottom variant="h6">{props.title}</Typography>
            <Typography gutterBottom variant="subtitle1">{props.comment}</Typography>
            {props.isRecommended ?
                <Typography gutterBottom variant="subtitle1" color="textSecondary"><Check fontSize="small" />I recommend this product</Typography>
                :
                null
            }
            <Typography className={classes.root} gutterBottom variant="subtitle1">{props.username}</Typography>
        </div>
    );
};

export default ReviewPost;