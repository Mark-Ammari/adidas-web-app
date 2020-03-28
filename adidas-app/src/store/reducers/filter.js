import * as actionTypes from '../actions/actionTypes';

const initialState = {
    filterItems: {},
    loading: true
}

const filterReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_FILTER_LINKS_START:
            return {
                ...state,
                loading: true
            }
        case actionTypes.FETCH_FILTER_LINKS_SUCCESS:
            return {
                filterItems: action.filterItems,
                loading: false
            }
        case actionTypes.FETCH_FILTER_LINKS_FAIL:
            return {
                ...state,
                loading: false
            }
        default: return state
    }
}

export default filterReducer;