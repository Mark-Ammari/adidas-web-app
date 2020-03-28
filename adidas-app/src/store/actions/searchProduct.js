import * as actionTypes from './actionTypes';
import base from '../../URL/URL';

const fetchProductSearchStart = () => {
    return {
        type: actionTypes.FETCH_SEARCH_PRODUCT_START
    };
};

const fetchProductSearchFail = () => {
    return {
        type: actionTypes.FETCH_SEARCH_PRODUCT_FAIL
    };
};

const fetchProductSearchSuccess = (searchProduct, getModelNumber) => {
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