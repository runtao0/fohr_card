import {
    CHANGE_QUERY,
    RECEIVE_ERROR
} from '../actions/header_actions';

const QueryReducer = (state = {}, action) => {
    Object.freeze(state);
    const newState = Object.assign({}, state);

    switch (action.type) {
        case CHANGE_QUERY:
            newState.queryString = action.queryString;
            newState.error = null;
            return newState;
        case RECEIVE_ERROR:
            newState.error = action.error;
            return newState;
        default:
            return state;
    }
}

export default QueryReducer;
