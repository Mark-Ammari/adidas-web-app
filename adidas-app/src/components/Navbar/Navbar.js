import React from 'react';
import classes from './Navbar.module.css';
import DropdownItem from '../DropdownItem/DropdownItem';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const menData = useSelector(state => state.linksData.menData)
    const loading = useSelector(state => state.linksData.loading)
    const womenData = useSelector(state => state.linksData.womenData)
    const kidsData = useSelector(state => state.linksData.kidsData)

    return (
        <nav className={classes.NavbarNavlinks}>
            <DropdownItem name="men">
                <nav className={classes.Navlinks}>
                    <ul>
                        {loading ? null : menData.shoes.map((shoes, key) => {
                            return <li key={key}><NavLink to={{
                                pathname: shoes.path,
                                search: `?start=0`
                            }}>{shoes.name}</NavLink></li>
                        })}
                    </ul>
                    <ul>
                        {loading ? null : menData.clothing.map((clothing, key) => {
                            return <li key={key}><NavLink to={{
                                pathname: clothing.path,
                                search: `?start=0`
                            }}>{clothing.name}</NavLink></li>
                        })}
                    </ul>
                    <ul>
                        {loading ? null : menData.accessories.map((accessories, key) => {
                            return <li key={key}><NavLink to={{ 
                                pathname: accessories.path,
                                search: `?start=0`
                            }}>{accessories.name}</NavLink></li>
                        })}
                    </ul>
                </nav>
            </DropdownItem>
            <DropdownItem name="women">
                <nav className={classes.Navlinks}>
                    <ul>
                        {loading ? null : womenData.shoes.map((shoes, key) => {
                            return <li key={key}><NavLink to={{
                                pathname: shoes.path,
                                search: `?start=0`
                            }}>{shoes.name}</NavLink></li>
                        })}
                    </ul>
                    <ul>
                        {loading ? null : womenData.clothing.map((clothing, key) => {
                            return <li key={key}><NavLink to={{
                                pathname: clothing.path,
                                search: `?start=0`
                            }}>{clothing.name}</NavLink></li>
                        })}
                    </ul>
                    <ul>
                        {loading ? null : womenData.accessories.map((accessories, key) => {
                            return <li key={key}><NavLink to={{ 
                                pathname: accessories.path,
                                search: `?start=0`
                            }}>{accessories.name}</NavLink></li>
                        })}
                    </ul>
                </nav>
            </DropdownItem>
            <DropdownItem name="kids">
                <nav className={classes.Navlinks}>
                    <ul>
                        {loading ? null : kidsData.youth.map((youth, key) => {
                            return <li key={key}><NavLink to={{ 
                                pathname: youth.path,
                                search: `?start=0`
                            }}>{youth.name}</NavLink></li>
                        })}
                    </ul>
                    <ul>
                        {loading ? null : kidsData.children.map((children, key) => {
                            return <li key={key}><NavLink to={{
                                pathname: children.path,
                                search: `?start=0`
                            }}>{children.name}</NavLink></li>
                        })}
                    </ul>
                    <ul>
                        {loading ? null : kidsData.babies.map((babies, key) => {
                            return <li key={key}><NavLink to={{ 
                                pathname: babies.path,
                                search: `?start=0`
                            }}>{babies.name}</NavLink></li>
                        })}
                    </ul>
                </nav>
            </DropdownItem>
        </nav>
    );
};

export default Navbar