import React from 'react';
import "./ProductInfoForm.css";
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { makeStyles } from '@material-ui/core/styles';
import AdiBtn from '../../../AdiBtn/AdiBtn';
import { Typography } from '@material-ui/core';


const useStyles = makeStyles(theme => ({
    formControl: {
        margin: theme.spacing(1),
        width: "50%",
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
    select: {
        '&:before': {
            borderColor: "#000",
        },
        '&:after': {
            borderColor: "#767677",
        }
    },
    margin: {
        margin: "5px"
    }
}));

const ProductInfoForm = props => {
    const classes = useStyles();

    return (
        <div className="productinfoform">
            <div className="productinfoformcontrol">
            <FormControl className={classes.formControl}>
                    <InputLabel style={{ color: "#767677" }} htmlFor="age-native-simple">Select Size</InputLabel>
                    <Select
                        className={classes.select}
                        native
                        value="test"
                        inputProps={{
                            name: 'age',
                            id: 'age-native-simple',
                        }}
                    >
                        <option value="" />
                        <option value={10}>Ten</option>
                        <option value={20}>Twenty</option>
                        <option value={30}>Thirty</option>
                    </Select>
                </FormControl>
                <FormControl className={classes.formControl}>
                    <InputLabel style={{ color: "#767677" }} htmlFor="quantity-native-simple">Quantity</InputLabel>
                    <Select
                        className={classes.select}
                        native
                        value="test"
                        inputProps={{
                            name: 'age',
                            id: 'age-native-simple',
                        }}
                    >
                        <option value="" />
                        <option value={10}>Ten</option>
                        <option value={20}>Twenty</option>
                        <option value={30}>Thirty</option>
                    </Select>
                </FormControl>
            </div>
            <AdiBtn width="calc(100% - 30px)">Add to Bag</AdiBtn>
            <Typography className={classes.margin} variant="subtitle1" component="h5" gutterBottom color="textSecondary">{props.search["product_description"].text}</Typography>
        </div>
    );
};

export default ProductInfoForm;