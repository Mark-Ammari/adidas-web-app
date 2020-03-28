import * as actionTypes from '../actions/actionTypes';

const initialState = {
    productItems: {},
    loading: true
};

const productItemsReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_PRODUCT_ITEMS_START:
            return {
                ...state,
                loading: true,
            }
        case actionTypes.FETCH_PRODUCT_ITEMS_SUCCESS:
            return {
                productItems: action.productItems,
                loading: false,
            }
        case actionTypes.FETCH_PRODUCT_ITEMS_FAIL:
            return {
                ...state,
                loading: false,
            }
        default: return state;
    }
};

export default productItemsReducer;