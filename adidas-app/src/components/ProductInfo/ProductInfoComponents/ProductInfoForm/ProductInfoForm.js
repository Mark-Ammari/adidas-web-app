import React, { useState } from 'react';
import "./ProductInfoForm.css";
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { makeStyles } from '@material-ui/core/styles';
import AdiBtn from '../../../AdiBtn/AdiBtn';
import { Typography } from '@material-ui/core';
import { useSelector } from 'react-redux';

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
    const searchProduct = useSelector(state => state.searchProduct.searchProduct)
    const sizesProduct = useSelector(state => state.sizesProduct.sizesProduct)
    const loading = useSelector(state => state.sizesProduct.loading)
    
    let [size, setSize] = useState('')
    let [quantity, setQuantity] = useState(1)

    return (
        < div className="productinfoform" >
            {loading ? null : <>
                <div className="productinfoformcontrol">
                    <FormControl className={classes.formControl}>
                        <InputLabel style={{ color: "#767677" }} htmlFor="age-native-simple">Select Size</InputLabel>
                        <Select
                            className={classes.select}
                            native
                            onChange={(e) => {setSize(e.target.value)}}
                            value={size}
                        >
                            <option value="" />
                            {console.log(sizesProduct["variation_list"])}
                            {sizesProduct["variation_list"].map((size, key) => {
                                if (size["availability_status"] === "IN_STOCK") {
                                    return <option key={key} value={size.size}>{size.size}</option>
                                } else {
                                    return null
                                }
                            })}
                        </Select>
                    </FormControl>
                    <FormControl className={classes.formControl}>
                        <InputLabel style={{ color: "#767677" }} htmlFor="quantity-native-simple">Quantity</InputLabel>
                        <Select
                            className={classes.select}
                            native
                            onChange={(e) => {setQuantity(e.target.value)}}
                            value={quantity}
                        >
                            <option value={1}>1</option>
                            <option value={2}>2</option>
                            <option value={3}>3</option>
                            <option value={4}>4</option>
                            <option value={5}>5</option>
                        </Select>
                    </FormControl>
                </div>
                <AdiBtn width="calc(100% - 30px)">Add to Bag</AdiBtn>
                <Typography className={classes.margin} variant="subtitle1" component="h5" gutterBottom color="textSecondary">{searchProduct["product_description"].text}</Typography>
            </>
            }
        </div >
    );
};

export default ProductInfoForm;