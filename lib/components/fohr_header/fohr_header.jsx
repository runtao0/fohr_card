import React from 'react';

class FohrHeader extends React.Component {
    constructor(props) {
        super(props);

        this.placeholder = 'Search for an influencer, list, #hashtag or @handle';
        this.handleQueryChange = this.handleQueryChange.bind(this);
        this.handleQueryFetch = this.handleQueryFetch.bind(this);
    }

    handleQueryChange(event) {
        const { changeQuery } = this.props;
        changeQuery(event.currentTarget.value);
    }

    handleQueryFetch(event) {
        if (event.key !== "Enter") return;
        const { fetchQuery,
            queryString } = this.props;
        if (!queryString || queryString === "") return;
        fetchQuery(queryString);
    }

    render() {
        const { queryString } = this.props;
        return (
            <header id="header">
                <section className="logo">
                    <img src="assets/logo.svg"></img>
                </section>
                <section>
                    <img className="icon" src="assets/icon_search.png"></img>
                    <input placeholder={ this.placeholder }
                        value={ queryString || "" }
                        onChange={ this.handleQueryChange }
                        onKeyPress={ this.handleQueryFetch }></input>
                </section>
            </header>
        )
    }
}

export default FohrHeader;
