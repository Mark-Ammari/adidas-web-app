import * as actionTypes from './actionTypes';
import base from '../../URL/URL';

export const fetchProductItemsStart = () => {
    return {
        type: actionTypes.FETCH_PRODUCT_ITEMS_START
    };
};

export const fetchProductItemsFail = () => {
    return {
        type: actionTypes.FETCH_PRODUCT_ITEMS_FAIL
    };
};

export const fetchProductItemsSuccess = (productItems) => {
    return {
        type: actionTypes.FETCH_PRODUCT_ITEMS_SUCCESS,
        productItems: productItems,
    };
};

export const fetchProductItems = (sitePath="us", query, start, sort) => {
    return dispatch => {
        dispatch(fetchProductItemsStart())
        base.get(`/api/productlist/productlistsearch`, { params: {
            sitePath: sitePath,
            query: query,
            start: start,
            sort: sort
        }})
        .then(res => {
            dispatch(fetchProductItemsSuccess(res.data))
        })
        .catch(err => {
            console.log(err)
            dispatch(fetchProductItemsFail())
        })
    }
};