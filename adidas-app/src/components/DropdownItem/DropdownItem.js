import React from 'react';
import './DropdownItem.css';
import { NavLink } from 'react-router-dom'

const dropdownItem = (props) => {
    return (
        <div className="dropdown">
            <NavLink
            className="navlink"
            activeStyle={{
            }}
            to={"/" + props.name} className="dropbtn">{props.name}</NavLink>
            <div className="dropdown-content">
                {props.children}
            </div>
        </div>
    );
};

export default dropdownItem