export const CHANGE_QUERY = "CHANGE_QUERY";
export const RECEIVE_ERROR = "RECEIVE_ERROR";

export const changeQuery = (queryString) => ({
    type: CHANGE_QUERY,
    queryString
})

export const receiveError = (error) => ({
    type: RECEIVE_ERROR,
    error
})
