export const CHANGE_QUERY = "CHANGE_QUERY";
export const RECEIVE_RESULTS = "RECEIVE_RESULTS";
export const RECEIVE_ERROR = "RECEIVE_ERROR";

export const changeQuery = (queryString) => ({
    type: CHANGE_QUERY,
    queryString
})

export const receiveError = (error) => ({
    type: RECEIVE_ERROR,
    error
})

export const receiveSearchResults = (result) => ({
    type: RECEIVE_RESULTS,
    data: result.data
})


export const fetchQuery = (queryString) => {
    return (dispatch) => {
        return $.ajax({
            method: "GET",
            url: `https://www.fohrcard.com/front-end-data-test/${queryString}`
        }).then(results => dispatch(receiveSearchResults(results)))
        .fail(error => dispatch(receiveError))
    }
}
