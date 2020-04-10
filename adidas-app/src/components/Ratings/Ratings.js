import React from 'react';
import Rating from '@material-ui/lab/Rating';
import { makeStyles, withStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'inline',
  },
}));

const StyledRating = withStyles({
  iconFilled: {
    color: '#000',
  },
  
})(Rating);

export default function Ratings(props) {
  const styles = useStyles();
  return (
    <div className={styles.root}>
      <StyledRating size="small" readOnly name="rating" defaultValue={props.value} />
    </div>
  );
}