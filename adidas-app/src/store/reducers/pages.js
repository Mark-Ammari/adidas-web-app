import * as actionTypes from '../actions/actionTypes';

const initialState = {
    pages: 0
}

const pagesReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GO_BACK_PAGE:
            return {
                pages: state.pages - 48
            }
        case actionTypes.GO_FORWARD_PAGE:
            return {
                pages: state.pages + 48
            }
        case actionTypes.RESET_TO_FIRST_PAGE:
            return {
                pages: 0
            }
        default: return state;
    }
}

export default pagesReducer;