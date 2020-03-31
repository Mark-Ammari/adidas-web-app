import * as actionTypes from './actionTypes';

export const goBackPage = () => {
    return {
        type: actionTypes.GO_BACK_PAGE
    }
};

export const goForwardPage = () => {
    return {
        type: actionTypes.GO_FORWARD_PAGE
    }
};

export const resetPageToZero = () => {
    return {
        type: actionTypes.RESET_TO_FIRST_PAGE
    }
};