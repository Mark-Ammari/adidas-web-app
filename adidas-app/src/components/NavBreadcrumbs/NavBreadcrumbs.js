import React from 'react';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import { NavLink } from 'react-router-dom';
import classes from './NavBreadcrumbs.module.css';

const NavBreadcrumbs = props => {
  return (
    <Breadcrumbs className={classes.Breadcrumbs} aria-label="breadcrumb">
      <NavLink to="/">
        Home
      </NavLink>
      <NavLink to={props.absolutepath}>
        {props.absolutepathtext}
      </NavLink>
      <NavLink to={props.relativepath}>
        {props.relativepathtext}
      </NavLink>
    </Breadcrumbs>
  );
};

export default NavBreadcrumbs;