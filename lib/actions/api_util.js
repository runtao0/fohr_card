export function fetchSearchResults(queryString) {
    return $.ajax({
        method: "GET",
        url: `https://www.fohrcard.com/front-end-data-test/${queryString}`
    })
}
