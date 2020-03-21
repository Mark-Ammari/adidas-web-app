import * as actionTypes from './actionTypes';
import base from '../../URL/URL';

export const fetchRatingsStart = () => {
    return {
        type: actionTypes.FETCH_RATINGS_PRODUCT_START
    }
}

export const fetchRatingsSuccess = (ratingsProduct) => {
    return {
        type: actionTypes.FETCH_RATINGS_PRODUCT_SUCCESS,
        ratingsProduct: ratingsProduct
    }
}

export const fetchRatingsFail = () => {
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
        .catch(err => console.log(err.data))
    }
}

export const fetchReviewsStart = () => {
    return {
        type: actionTypes.FETCH_REVIEWS_PRODUCT_START
    }
}

export const fetchReviewsSuccess = (reviewsProduct) => {
    return {
        type: actionTypes.FETCH_REVIEWS_PRODUCT_SUCCESS,
        reviewsProduct: reviewsProduct,
    }
}

export const fetchReviewsFail = () => {
    return {
        type: actionTypes.FETCH_REVIEWS_PRODUCT_FAIL
    }
}

export const fetchReviews = (id, sort, offset, limit) => {
    return dispatch => {
        dispatch(fetchReviewsStart());
        base.get(`/api/models/reviews/${id}`, { params: {
            sort: sort="newest",
            offset: offset=0,
            limit: limit=5
        }})
        .then(res => {
            dispatch(fetchReviewsSuccess(res.data))
        })
        .catch(err => {
            dispatch(fetchReviewsFail(err.data))
        })
    }
}