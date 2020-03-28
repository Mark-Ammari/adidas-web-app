import * as actionTypes from './actionTypes';
import base from '../../URL/URL';

const fetchFilterStart = () => {
    return {
        type: actionTypes.FETCH_FILTER_LINKS_START
    }
}

const fetchFilterSuccess = (filterItems) => {
    return {
        type: actionTypes.FETCH_FILTER_LINKS_SUCCESS,
        filterItems: filterItems
    }
}

const fetchFilterFail = () => {
    return {
        type: actionTypes.FETCH_FILTER_LINKS_FAIL
    }
}

export const fetchFilter = () => {
    return dispatch => {
        dispatch(fetchFilterStart())
        base.get('/api/adidas/filteritem')
        .then(res => dispatch(fetchFilterSuccess(res.data[0])))
        .catch(err => {
            console.log(err)
            dispatch(fetchFilterFail())
        })
    }
}