import React from 'react';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import { NavLink } from 'react-router-dom'
import './NavBreadcrumbs.css'

const NavBreadcrumbs = props => {
  return (
    <Breadcrumbs className="breadcrumbs" aria-label="breadcrumb">
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