import React from 'react';
import classes from './Logo.module.css';
import logo from '../../assets/adidaslogo.svg'

const Logo = (props) => (
<img 
    className={classes.Logo} 
    src={logo} 
    alt="adidas-logo"
    style={{
        width: props.width,
        height: props.height
    }}
    />   
);

export default Logo;