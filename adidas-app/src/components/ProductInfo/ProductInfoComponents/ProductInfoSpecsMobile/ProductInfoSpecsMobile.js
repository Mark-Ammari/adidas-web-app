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
import { useSelector } from 'react-redux';

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
    let detailType = null

    const searchProduct = useSelector(state => state.searchProduct.searchProduct)

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    switch (props.type) {
        case "description":
            detailType = (
                searchProduct.hasOwnProperty("product_description") ? <>
                    <div className="productinfospecsmobileimg">
                        <img src={searchProduct["product_description"]["description_assets"]["image_url"]} alt="product_media" />
                    </div>

                    <Typography variant="h4" color="textPrimary">{searchProduct["product_description"].title}</Typography>
                    <Typography variant="subtitle1" color="textPrimary">{searchProduct["product_description"].text}</Typography>
                </> : null
            )
            break;
        case "specifications":
            detailType = (searchProduct.hasOwnProperty("product_description") && searchProduct["product_description"].hasOwnProperty("usps") ?
                <>
                    <ul>
                        {searchProduct["product_description"]["usps"].map((bullet, key) => {
                            return <li key={key}><Typography gutterBottom>{bullet}</Typography></li>
                        })}
                    </ul>
                </> : null)
            break;
        case "hightlights":
            detailType = (searchProduct.hasOwnProperty("product_description") && searchProduct["product_description"].hasOwnProperty("product_highlights") ?
                <>
                    {searchProduct["product_description"]["product_highlights"].map((bullet, key) => {
                        return <div key={key}>
                            <Typography variant="h5" gutterBottom>{bullet.headline}</Typography>
                            <Typography variant="subtitle1" gutterBottom>{bullet.copy}</Typography>
                        </div>
                    })
                    }
                </> : null)
            break;
        default: detailType = null
            break;
    }

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
                {detailType}
            </Dialog>
        </div>
    );
}

export default ProductInfoSpecsMobile;
