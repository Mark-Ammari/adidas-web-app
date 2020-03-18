import * as actionTypes from '../actions/actionTypes';

const initialState = {
    sizesProduct: {},
    loading: true
}

const sizesProductReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_SIZES_PRODUCT_START:
            return {
                ...state,
                loading: true
            }
        case actionTypes.FETCH_SIZES_PRODUCT_SUCCESS:
            return {
                sizesProduct: action.sizesProduct,
                loading: false
            }
        case actionTypes.FETCH_SIZES_PRODUCT_FAIL:
            return {
                ...state,
                loading: false
            }
        default: return state;
    };
};

export default sizesProductReducer;