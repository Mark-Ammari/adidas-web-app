import React from 'react';
import './DropdownItem.css';
import { NavLink } from 'react-router-dom'

const dropdownItem = (props) => {
    return (
        <div className="dropdown">
            <NavLink
            className="navlink dropbtn"
            activeStyle={{
            }}
            to={"/" + props.name}>{props.name}</NavLink>
            <div className="dropdown-content">
                {props.children}
            </div>
        </div>
    );
};

export default dropdownItem