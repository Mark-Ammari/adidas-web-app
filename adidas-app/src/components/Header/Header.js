import React from 'react';
import './Header.css';
import Logo from '../Logo/Logo';
import DropdownItem from '../DropdownItem/DropdownItem';
import Navbar from '../Navbar/Navbar';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <header className="header">
            <NavLink className="navlink" to="/"><Logo width="70px" height="auto" /></NavLink>
            <Navbar />
        </header>
    );
};

export default Header;