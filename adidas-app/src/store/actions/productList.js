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

export const fetchProductListSuccess = (productItemList, productList) => {
    return {
        type: actionTypes.FETCH_PRODUCT_SUCCESS,
        productItemList: productItemList,
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
            dispatch(fetchProductListSuccess(res.data.itemList.items, res.data))
        })
        .catch(err => {
            console.log(err)
            dispatch(fetchProductListFail())
        })
    }
};