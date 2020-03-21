import React from 'react';
import StarRatingComponent from 'react-star-rating-component'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'inline',
  },
}));

export default function Ratings(props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <StarRatingComponent editing={false} name="ratings" {...props} />
    </div>
  );
}