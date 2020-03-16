import React from 'react';
import './Navbar.css';
import DropdownItem from '../DropdownItem/DropdownItem';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const menData = useSelector(state => state.linksData.menData)
    const loading = useSelector(state => state.linksData.loading)
    const womenData = useSelector(state => state.linksData.womenData)
    const kidsData = useSelector(state => state.linksData.kidsData)

    return (
        <nav className="navbar">
            <DropdownItem name="men">
                <nav className="navlinks">
                    <ul>
                        {loading ? null : menData.shoes.map((shoes, key) => {
                            return <li key={key}><NavLink to={shoes.path}>{shoes.name}</NavLink></li>
                        })}
                    </ul>
                    <ul>
                        {loading ? null : menData.clothing.map((clothing, key) => {
                            return <li key={key}><NavLink to={clothing.path}>{clothing.name}</NavLink></li>
                        })}
                    </ul>
                    <ul>
                        {loading ? null : menData.accessories.map((accessories, key) => {
                            return <li key={key}><NavLink to={accessories.path}>{accessories.name}</NavLink></li>
                        })}
                    </ul>
                </nav>
            </DropdownItem>
            <DropdownItem name="women">
                <nav className="navlinks">
                    <ul>
                        {loading ? null : womenData.shoes.map((shoes, key) => {
                            return <li key={key}><NavLink to={shoes.path}>{shoes.name}</NavLink></li>
                        })}
                    </ul>
                    <ul>
                        {loading ? null : womenData.clothing.map((clothing, key) => {
                            return <li key={key}><NavLink to={clothing.path}>{clothing.name}</NavLink></li>
                        })}
                    </ul>
                    <ul>
                        {loading ? null : womenData.accessories.map((accessories, key) => {
                            return <li key={key}><NavLink to={accessories.path}>{accessories.name}</NavLink></li>
                        })}
                    </ul>
                </nav>
            </DropdownItem>
            <DropdownItem name="kids">
                <nav className="navlinks">
                    <ul>
                        {loading ? null : kidsData.youth.map((youth, key) => {
                            return <li key={key}><NavLink to={youth.path}>{youth.name}</NavLink></li>
                        })}
                    </ul>
                    <ul>
                        {loading ? null : kidsData.children.map((children, key) => {
                            return <li key={key}><NavLink to={children.path}>{children.name}</NavLink></li>
                        })}
                    </ul>
                    <ul>
                        {loading ? null : kidsData.babies.map((babies, key) => {
                            return <li key={key}><NavLink to={babies.path}>{babies.name}</NavLink></li>
                        })}
                    </ul>
                </nav>
            </DropdownItem>
        </nav>
    );
};

export default Navbar