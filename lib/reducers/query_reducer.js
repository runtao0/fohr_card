import {
    CHANGE_QUERY,
    RECEIVE_ERROR,
    RECEIVE_RESULTS
} from '../actions/actions';

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
        case RECEIVE_RESULTS:
            newState.displayQuery = newState.queryString;
            newState.data = {};
            action.data.forEach((datum) => {
                newState.data[datum.url] = datum;
            })
            return newState;
        default:
            return state;
    }
}

export default QueryReducer;
