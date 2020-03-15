import * as actionTypes from '../actions/actionTypes';

const initialState = {
    productList: {},
    loading: true
};

const productListReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_PRODUCT_START:
            return {
                ...state,
                loading: true,
            }
        case actionTypes.FETCH_PRODUCT_SUCCESS:
            return {
                productList: action.productList,
                loading: false,
            }
        case actionTypes.FETCH_PRODUCT_FAIL:
            return {
                ...state,
                loading: false,
            }
        default: return state;
    }
};

export default productListReducer;