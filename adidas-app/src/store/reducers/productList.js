import * as actionTypes from '../actions/actionTypes';

const initialState = {
    productList: {},
    productItemList: {},
    productListSortRules: [],
    sortBy: 'top-sellers',
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
                ...state, 
                productList: action.productList,
                productItemList: action.productItemList,
                productListSortRules: action.productListSortRules,
                loading: false,
            }
        case actionTypes.FETCH_PRODUCT_FAIL:
            return {
                ...state,
                loading: false,
            }
        case actionTypes.SORT_PRODUCTLIST_NEWEST:
            return {
                ...state,
                sortBy: 'newest-to-oldest'
            }
        case actionTypes.SORT_PRODUCTLIST_LOW_TO_HIGH:
            return {
                ...state,
                sortBy: 'price-low-to-high'
            }
        case actionTypes.SORT_PRODUCTLIST_HIGH_TO_LOW:
            return {
                ...state,
                sortBy: 'price-high-to-low'
            }
        case actionTypes.SORT_PRODUCTLIST_TOP_SELLERS:
            return {
                ...state,
                sortBy: 'top-sellers'
            }

        default: return state;
    }
};

export default productListReducer;