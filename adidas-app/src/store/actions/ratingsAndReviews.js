import * as actionTypes from './actionTypes';
import base from '../../URL/URL';

const fetchRatingsStart = () => {
    return {
        type: actionTypes.FETCH_RATINGS_PRODUCT_START
    }
}

const fetchRatingsSuccess = (ratingsProduct) => {
    return {
        type: actionTypes.FETCH_RATINGS_PRODUCT_SUCCESS,
        ratingsProduct: ratingsProduct
    }
}

const fetchRatingsFail = () => {
    return {
        type: actionTypes.FETCH_RATINGS_PRODUCT_FAIL
    }
}

export const fetchRatings = (id) => {
    return dispatch => {
        dispatch(fetchRatingsStart());
        base.get(`/api/models/ratings/${id}`)
            .then(res => {
                dispatch(fetchRatingsSuccess(res.data))
            })
            .catch(err => dispatch(fetchRatingsFail(err)))
    }
}

const fetchReviewsStart = () => {
    return {
        type: actionTypes.FETCH_REVIEWS_PRODUCT_START
    }
}

const fetchReviewsSuccess = (reviewsProduct) => {
    return {
        type: actionTypes.FETCH_REVIEWS_PRODUCT_SUCCESS,
        reviewsProduct: reviewsProduct,
    }
}

const fetchReviewsFail = () => {
    return {
        type: actionTypes.FETCH_REVIEWS_PRODUCT_FAIL
    }
}

export const fetchReviews = (id, limit = 2, offset = 0, sort = "newest", ) => {
    return dispatch => {
        dispatch(fetchReviewsStart());
        base.get(`/api/models/reviews/${id}`, {
            params: {
                limit: limit,
                offset: offset,
                sort: sort,
            }
        })
            .then(res => {
                dispatch(fetchReviewsSuccess(res.data))
            })
            .catch(err => {
                dispatch(fetchReviewsFail(err.data))
            })
    }
}

const addFive = () => {
    return {
        type: actionTypes.ADD_FIVE
    }
}

export const addFiveMore = () => {
    return dispatch => {
        dispatch(addFive())
    }
}