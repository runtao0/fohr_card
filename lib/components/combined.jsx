import React from 'react';
import FohrHeader from './fohr_header/fohr_header';
import SearchResults from './search_results/search_results';

const Combined = ({ queryString,
    data = {},
    changeQuery,
    fetchQuery }) => {
    return (
        <div>
            <FohrHeader
                queryString={ queryString }
                changeQuery={ changeQuery }
                fetchQuery={ fetchQuery }/>
            <SearchResults
                queryString={ queryString }
                data={ data }/>
        </div>
    )
}

export default Combined;
