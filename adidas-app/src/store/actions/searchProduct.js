import * as actionTypes from './actionTypes';
import base from '../../URL/URL';

export const fetchProductSearchStart = () => {
    return {
        type: actionTypes.FETCH_SEARCH_PRODUCT_START
    };
};

export const fetchProductSearchFail = () => {
    return {
        type: actionTypes.FETCH_SEARCH_PRODUCT_FAIL
    };
};

export const fetchProductSearchSuccess = (searchProduct, getModelNumber) => {
    return {
        type: actionTypes.FETCH_SEARCH_PRODUCT_SUCCESS,
        searchProduct: searchProduct,
        getModelNumber: getModelNumber,
    };
};

export const fetchProductSearch = (searchProduct) => {
    return dispatch => {
        dispatch(fetchProductSearchStart())
        base.get(`/api/productlist/search/${searchProduct}`, )
        .then(res => {
            // console.log(res.data)
            dispatch(fetchProductSearchSuccess(res.data, res.data["model_number"]))
        })
        .catch(err => {
            console.log(err.data)
            dispatch(fetchProductSearchFail())
        })
    }
};