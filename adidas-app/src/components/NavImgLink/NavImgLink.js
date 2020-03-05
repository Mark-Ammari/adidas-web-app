import React from 'react';
import './NavImgLink.css';
import { NavLink, useHistory } from 'react-router-dom';

const NavImgLink = props => {
    const history = useHistory()
    return (
        <div onClick={() => { history.push(props.to) }} style={{ backgroundImage: `url(${props.img})` }}  className="navimglink">
            <NavLink to={props.to}>
                {props.children}
            </NavLink>
        </div>
    );
};

export default NavImgLink;
