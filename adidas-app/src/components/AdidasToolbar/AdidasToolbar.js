import React from 'react';
import classes from './AdidasToolbar.module.css';
import { IconButton, Badge, withStyles } from '@material-ui/core';
import { FavoriteRounded, LocalMallRounded, PersonRounded } from '@material-ui/icons';

const StyledBadge = withStyles((theme) => ({
    badge: {
        background: "#000",
        color: "#FFF"
    },
}))(Badge);

const AdidasToolbar = () => {
    return (
        <div className={classes.AdidasToolbarContainer}>
            <IconButton>
                <StyledBadge badgeContent={1} >
                    <FavoriteRounded color="disabled" />
                </StyledBadge>
            </IconButton>
            <IconButton>
                <StyledBadge badgeContent={1}>
                    <LocalMallRounded color="disabled" />
                </StyledBadge>
            </IconButton>
            <IconButton>
                <PersonRounded color="disabled" />
            </IconButton>
        </div>
    )
}

export default AdidasToolbar;