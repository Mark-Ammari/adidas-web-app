import * as actionTypes from './actionTypes';
import base from '../../URL/URL';

const fetchRatingsStart = () => {
    return {
        type: actionTypes.FETCH_RATINGS_PRODUCT_START
    }
}

const fetchRatingsSuccess = (ratingsProduct, distributionList) => {
    return {
        type: actionTypes.FETCH_RATINGS_PRODUCT_SUCCESS,
        ratingsProduct: ratingsProduct,
        distributionList: distributionList
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
                dispatch(fetchRatingsSuccess(res.data, res.data.ratingDistribution))
            })
            .catch(err => dispatch(fetchRatingsFail(err)))
    }
}

const fetchReviewsStart = () => {
    return {
        type: actionTypes.FETCH_REVIEWS_PRODUCT_START
    }
}

const fetchReviewsSuccess = (reviewsProduct, reviewList) => {
    return {
        type: actionTypes.FETCH_REVIEWS_PRODUCT_SUCCESS,
        reviewsProduct: reviewsProduct,
        reviewList: reviewList
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
                dispatch(fetchReviewsSuccess(res.data, res.data.reviews))
            })
            .catch(err => {
                dispatch(fetchReviewsFail(err.data))
            })
    }
}

export const setReviewProductNewest = () => {
    return {
        type: actionTypes.SORT_REVIEWS_NEWEST
    }
}

export const setReviewProductHelpful = () => {
    return {
        type: actionTypes.SORT_REVIEWS_HELPFUL
    }
}

export const setReviewProductRelevant = () => {
    return {
        type: actionTypes.SORT_REVIEWS_RELEVANT
    }
}