import React from 'react';
import { Provider } from 'react-redux';
import Container from './container';

const Root = ({ store }) => {
    return (
        <Provider store={ store }>
            <Container/>
        </Provider>
    )
}

export default Root;
