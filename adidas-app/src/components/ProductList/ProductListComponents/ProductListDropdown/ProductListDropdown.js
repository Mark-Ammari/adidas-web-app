import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Popover from '@material-ui/core/Popover';
import Button from '@material-ui/core/Button';
import {KeyboardArrowUpRounded, KeyboardArrowDownRounded} from '@material-ui/icons';

const useStyles = makeStyles(theme => ({
    paper: {
        display: "flex",
        flexDirection: "column",
        justifyContents: "space-around",
        minWidth: "200px",
        fontFamily: "AdineuePRO,Helvetica,Arial,sans-serif"
    },
    btnMargin: {
        marginLeft: "15px"
    }
}));

const ProductListDropdown = (props) => {
    const styles = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = event => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    return (
        <div >
            <Button className={styles.btnMargin} aria-describedby={id} variant="text" onClick={handleClick}>
                <strong>{props.title}</strong>
                {open ? <KeyboardArrowDownRounded /> : <KeyboardArrowUpRounded />}
            </Button>
            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
            >
                <div className={styles.paper}>
                    {props.children}
                </div>
            </Popover>
        </div>
    );
}

export default ProductListDropdown