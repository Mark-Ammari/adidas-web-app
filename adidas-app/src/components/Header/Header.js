import React from 'react';
import classes from './Header.module.css';
import Logo from '../Logo/Logo';
import Navbar from '../Navbar/Navbar';
import { NavLink } from 'react-router-dom';
import AdidasToolbar from '../AdidasToolbar/AdidasToolbar';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Drawer from '../Drawer/Drawer';

const Header = () => {
    const matches = useMediaQuery('(min-width:767px)');
    return (
        <header className={classes.Header}>
            <nav className={classes.HeaderNav}>
                <div className={classes.HeaderNavItems}>
                    {matches ?
                        <>
                            <NavLink className="navlink" to="/"><Logo width="70px" height="auto" /></NavLink>
                            <Navbar />
                        </>
                        :
                        <>
                            <Drawer />
                            <NavLink className="navlink" to="/"><Logo width="70px" height="auto" /></NavLink>
                        </>
                    }
                </div>
                <AdidasToolbar />
            </nav>
        </header>
    );
};

export default Header;