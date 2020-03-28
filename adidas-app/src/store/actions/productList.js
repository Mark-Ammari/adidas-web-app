import * as actionTypes from './actionTypes';
import base from '../../URL/URL';

export const fetchProductListStart = () => {
    return {
        type: actionTypes.FETCH_PRODUCT_START
    };
};

export const fetchProductListFail = () => {
    return {
        type: actionTypes.FETCH_PRODUCT_FAIL
    };
};

export const fetchProductListSuccess = (productList) => {
    return {
        type: actionTypes.FETCH_PRODUCT_SUCCESS,
        productList: productList,
    };
};

export const fetchProductList = (sitePath="us", query, start, sort) => {
    return dispatch => {
        dispatch(fetchProductListStart())
        base.get(`/api/productlist`, { params: {
            sitePath: sitePath,
            query: query,
            start: start,
            sort: sort
        }})
        .then(res => {
            dispatch(fetchProductListSuccess(res.data.itemList.items))
        })
        .catch(err => {
            console.log(err)
            dispatch(fetchProductListFail())
        })
    }
};