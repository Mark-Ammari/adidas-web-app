import React from 'react';
import classes from './Collapsibles.module.css';
import Collapsible from '../Collapsible';
import { List } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Collapsibles = () => {
    const menData = useSelector(state => state.linksData.menData)
    const loading = useSelector(state => state.linksData.loading)
    const womenData = useSelector(state => state.linksData.womenData)
    const kidsData = useSelector(state => state.linksData.kidsData)

    return (
        <List className={classes.Collapsibles}>
            <Collapsible index={0} title="MEN">
                <Collapsible index={1} title="SHOES">
                    <ul>
                        {loading ? null : menData.shoes.map((shoes, key) => {
                            return <li><NavLink to={{
                                pathname: shoes.path,
                                search: `?start=0`
                            }}>{shoes.name}</NavLink></li>
                        })}
                    </ul>
                </Collapsible>
                <Collapsible index={2} title="APPAREL">
                    <ul>
                        {loading ? null : menData.clothing.map((clothing, key) => {
                            return <li><NavLink to={{
                                pathname: clothing.path,
                                search: `?start=0`
                            }}>{clothing.name}</NavLink></li>
                        })}
                    </ul>
                </Collapsible>
                <Collapsible index={3} title="ACCESSORIES">
                    <ul>
                        {loading ? null : menData.accessories.map((accessories, key) => {
                            return <li><NavLink to={{
                                pathname: accessories.path,
                                search: `?start=0`
                            }}>{accessories.name}</NavLink></li>
                        })}
                    </ul>
                </Collapsible>
            </Collapsible>
            <Collapsible index={4} title="WOMEN">
                <Collapsible index={5} title="SHOES">
                    <ul>
                        {loading ? null : womenData.shoes.map((shoes, key) => {
                            return <li><NavLink to={{
                                pathname: shoes.path,
                                search: `?start=0`
                            }}>{shoes.name}</NavLink></li>
                        })}
                    </ul>
                </Collapsible>
                <Collapsible index={6} title="APPAREL">
                    <ul>
                        {loading ? null : womenData.clothing.map((clothing, key) => {
                            return <li><NavLink to={{
                                pathname: clothing.path,
                                search: `?start=0`
                            }}>{clothing.name}</NavLink></li>
                        })}
                    </ul>
                </Collapsible>
                <Collapsible index={7} title="ACCESSORIES">
                    <ul>
                        {loading ? null : womenData.accessories.map((accessories, key) => {
                            return <li><NavLink to={{
                                pathname: accessories.path,
                                search: `?start=0`
                            }}>{accessories.name}</NavLink></li>
                        })}
                    </ul>
                </Collapsible>
            </Collapsible>
            <Collapsible index={8} title="KIDS">
                <Collapsible index={9} title="YOUTH (AGE 8 - 14)">
                    <ul>
                        {loading ? null : kidsData.youth.map((youth, key) => {
                            return <li><NavLink to={{
                                pathname: youth.path,
                                search: `?start=0`
                            }}>{youth.name}</NavLink></li>
                        })}
                    </ul>
                </Collapsible>
                <Collapsible index={10} title="CHILDREN (AGE 4 - 8)">
                    <ul>
                        {loading ? null : kidsData.children.map((children, key) => {
                            return <li><NavLink to={{
                                pathname: children.path,
                                search: `?start=0`
                            }}>{children.name}</NavLink></li>
                        })}
                    </ul>
                </Collapsible>
                <Collapsible index={11} title="BABY &amp; TODDLER (AGE 0 - 4)">
                    <ul>
                        {loading ? null : kidsData.babies.map((babies, key) => {
                            return <li><NavLink to={{
                                pathname: babies.path,
                                search: `?start=0`
                            }}>{babies.name}</NavLink></li>
                        })}
                    </ul>
                </Collapsible>
            </Collapsible>
        </List>
    );
};

export default Collapsibles