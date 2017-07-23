import React from 'react';
import { Provider } from 'react-redux';
import FohrHeaderContainer from './fohr_header/fohr_header_container';

const Root = ({ store }) => {
    return (
        <Provider store={ store }>
            <FohrHeaderContainer/>
        </Provider>
    )
}

// <SearchResultsContainer/>
export default Root;
