import React from 'react';
import './DropdownItem.css';
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux';

const DropdownItem = (props) => {

    const pages = useSelector(state => state.pages.pages)

    return (
        <div className="dropdown">
            <NavLink
            className="navlink dropbtn"
            to={{ 
                pathname: "/" + props.name,
                search: "?start=0"
            }}>{props.name}</NavLink>
            <div className="dropdown-content">
                {props.children}
            </div>
        </div>
    );
};

export default DropdownItem