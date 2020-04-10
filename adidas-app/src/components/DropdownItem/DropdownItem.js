import React from 'react';
import classes from './DropdownItem.module.css';
import { NavLink } from 'react-router-dom'

const DropdownItem = (props) => {
    return (
        <div className={classes.Dropdown}>
            <NavLink
            className={classes.NavlinkDropbtn}
            to={{ 
                pathname: "/" + props.name,
                search: "?start=0"
            }}>{props.name}</NavLink>
            <div className={classes.DropdownContent}>
                {props.children}
            </div>
        </div>
    );
};

export default DropdownItem