import * as actionTypes from './actionTypes';
import base from '../../URL/URL';

export const fetchProductSizesStart = () => {
    return {
        type: actionTypes.FETCH_SIZES_PRODUCT_START
    };
};

export const fetchProductSizesFail = () => {
    return {
        type: actionTypes.FETCH_SIZES_PRODUCT_FAIL
    };
};

export const fetchProductSizesSuccess = (sizesProduct) => {
    return {
        type: actionTypes.FETCH_SIZES_PRODUCT_SUCCESS,
        sizesProduct: sizesProduct
    };
};

export const fetchProductSizes = (sizesProduct) => {
    return dispatch => {
        dispatch(fetchProductSizesStart())
        base.get(`/api/productlist/sizes/${sizesProduct}`)
        .then(res => {
            // console.log(res.data)
            dispatch(fetchProductSizesSuccess(res.data))
        })
        .catch(err => {
            console.log(err)
            dispatch(fetchProductSizesFail())
        })
    }
};