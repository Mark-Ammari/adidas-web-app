import React from 'react';
import "./ProductInfoSpecsMobile.css";
import {
    makeStyles,
    Dialog,
    AppBar,
    Toolbar,
    IconButton,
    Typography,
    Slide
} from '@material-ui/core';
import { ChevronLeftRounded, ArrowRightAltRounded } from '@material-ui/icons';

const useStyles = makeStyles(theme => ({
    appBar: {
        position: 'relative',
        backgroundColor: "#FFF",
        color: "black"
    },
    title: {
        marginLeft: theme.spacing(2),
        flex: 1,
    },
    root: {
        backgroundColor: "#ebedee",
        overflowX: "hidden",
        overflowY: "auto"
    }
}));

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="left" ref={ref} {...props} />;
});

const ProductInfoSpecsMobile = (props) => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div className="productinfospecsmobile">
            <div className="productinfospecsmobilebtn" onClick={handleClickOpen}>
                <span>{props.children}</span>
                <span><ArrowRightAltRounded /></span>
            </div>
            <Dialog classes={{ paper: classes.root }} fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
                <AppBar className={classes.appBar}>
                    <Toolbar>
                        <IconButton edge="start" onClick={handleClose} aria-label="close">
                            <ChevronLeftRounded color="action" />
                        </IconButton>
                        <Typography variant="h6" color="textPrimary" className={classes.title}>{props.children}</Typography>
                    </Toolbar>
                </AppBar>

                {props.children === "Description" ?
                    <div className="productinfospecsmobileimg">
                        <img src={props.src} alt="product_media" />
                    </div>
                    :
                    null
                }
                <Typography variant="h4" color="textPrimary">{props.producttitle}</Typography>
                <Typography variant="subtitle1" color="textPrimary">{props.text}</Typography>
                <ul>
                    {props.specs}
                </ul>
                {props.highlights}
            </Dialog>
        </div>
    );
}

export default ProductInfoSpecsMobile;
