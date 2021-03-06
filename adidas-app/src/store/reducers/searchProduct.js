import * as actionTypes from '../actions/actionTypes';

const initialState = {
    searchProduct: {},
    getModelNumber: "",
    loading: true
}

const searchProductReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_SEARCH_PRODUCT_START:
            return {
                ...state,
                loading: true
            }
        case actionTypes.FETCH_SEARCH_PRODUCT_SUCCESS:
            return {
                searchProduct: action.searchProduct,
                getModelNumber: action.getModelNumber,
                loading: false
            }
        case actionTypes.FETCH_SEARCH_PRODUCT_FAIL:
            return {
                ...state,
                loading: false
            }
        default: return state;
    };
};

export default searchProductReducer;