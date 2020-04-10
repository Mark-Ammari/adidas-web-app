import React from 'react';
import './Authorization.css';
import { TextField, Typography, Paper } from '@material-ui/core';
import AdiBtn from '../AdiBtn/AdiBtn';
import { makeStyles, withStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    paper: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "300px",
        margin: 'auto',
        height: "500px",
        padding: "10px"
    },
    font: {
        fontFamily: "AdihausDIN, Helvetica, Arial, sans-serif",
        fontWeight: "bolder"
    }
});

const StyledTextField = withStyles({
    root: {
        marginBottom: "10px",
        width: "275px",
        '& label.Mui-focused': {
          color: 'black',
        },
        '& .MuiInput-underline:after': {
          borderBottomColor: 'black',
        },
        '& .MuiOutlinedInput-root': {
          '&.Mui-focused fieldset': {
            borderColor: 'black',
          },
        },
      },
})(TextField);

const Authorization = () => {
    const classes = useStyles()
    return (
        <div className="authorization">
            <Paper className={classes.paper}>
                <Typography className={classes.font} gutterBottom variant="h4" >LOG IN</Typography>
                <StyledTextField
                    required
                    id="email-address"
                    label="Email Address"
                    variant="outlined"
                />
                <StyledTextField
                    className={classes.select}
                    required
                    id="password"
                    label="Password"
                    variant="outlined"
                />
                <div className={classes.button}><AdiBtn width="255px">LOG IN</AdiBtn></div>
            </Paper>
        </div>
    )
}

export default Authorization;