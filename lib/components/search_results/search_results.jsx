import React from 'react';
import Influencer from './influencer';

class SearchResults extends React.Component {
    constructor(props) {
        super(props);

        this.makeInfluencers = this.makeInfluencers.bind(this);
    }

    makeInfluencers() {
        const { data } = this.props;
        const elements = [];
        const influencers = Object.keys(data);
        influencers.forEach((influencer) => {
            elements.push(<Influencer influencer={ data[influencer] }
                key={ influencer }/>)
        })
        return elements;
    }

    render() {
        const { queryString,
            displayQuery,
            data
        } = this.props
        if ((Object.keys(data).length > 0) && (displayQuery !== "")) {
            return (
                <div id="results">
                    <h1>Influencers matching "<strong>{displayQuery}</strong>"</h1>
                    <ul id="influencer-table">
                        { this.makeInfluencers() }
                    </ul>
                </div>
            )
        } else {
            return (
                <div id="results">
                    <h1>Press Enter to search</h1>
                </div>
            )
        }
    }
}

export default SearchResults;
