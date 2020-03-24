import * as actionTypes from '../actions/actionTypes';

const initialState = {
    ratingsProduct: {},
    reviewsProduct: {},
    reviewList: [],
    distributionList: [],
    loading: true,
}

const ratingsAndReviewsReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_RATINGS_PRODUCT_START:
            return {
                ...state,
                loading: true,
            }
        case actionTypes.FETCH_RATINGS_PRODUCT_SUCCESS:
            return {
                ...state,
                loading: false,
                ratingsProduct: action.ratingsProduct,
                distributionList: action.distributionList
            }
        case actionTypes.FETCH_RATINGS_PRODUCT_FAIL:
            return {
                ...state,
                loading: false,
            }
        case actionTypes.FETCH_REVIEWS_PRODUCT_START:
            return {
                ...state,
                loading: true,
            }
        case actionTypes.FETCH_REVIEWS_PRODUCT_SUCCESS:
            return {
                ...state,
                loading: false,
                reviewsProduct: action.reviewsProduct,
                reviewList: action.reviewList
            }
        case actionTypes.FETCH_REVIEWS_PRODUCT_FAIL:
            return {
                ...state,
                loading: false,
            }
        default: return state;
    }
}

export default ratingsAndReviewsReducer;