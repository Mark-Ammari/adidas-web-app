import React from 'react';
import './Logo.css';
import logo from '../../assets/adidaslogo.svg'

const Logo = (props) => (
<img 
    className="Logo" 
    src={logo} 
    alt="adidas-logo"
    style={{
        width: props.width,
        height: props.height
    }}
    />   
);

export default Logo;