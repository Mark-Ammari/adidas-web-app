import React from 'react';
import Rating from '@material-ui/lab/Rating';
import { makeStyles } from '@material-ui/core/styles';
import { NavLink } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    paddingTop: "5px",
    alignItems: "center",
    justifyContent: "space-between",
    maxWidth: "155px",
    flexDirection: 'row',
    '& > * + *': {
    },
    color: {
      color: "black"
    }
  },
}));

export default function Ratings() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Rating size="small" name="half-rating-read" defaultValue={4.6} precision={0.5} readOnly />
      <NavLink style={{color: "#000"}} to='#reviews'>Reviews</NavLink>
    </div>
  );
}