import React from 'react';

const Influencer = ({ influencer }) => {
    const {
        firstName,
        lastName,
        location,
        name,
        overall_followers,
        profile_image,
        url
    } = influencer;
    const newLink = getDisplayLink(url);
    const newLocation = getDisplayLocation(location)
    return (
        <li className="influencer">
            <img src={ profile_image }></img>
            <h2>{name}</h2>
            <h3>{`by ${firstName}  ${lastName}`}</h3>
            <p>
                <a href={ url }>{newLink}</a> <br/>
                { newLocation } <br/>
            { overall_followers.toLocaleString('en-US') } total followers
            </p>
        </li>
    )
}

const getDisplayLink = (link) => {
    const splitLink = link.split(".");
    const length = splitLink.length;
    if (length > 2) {
        return splitLink[length - 2] + "." + splitLink[length - 1];
    } else {
        return link.replace('//', '').split(":")[1]
    }
}

const getDisplayLocation = (loc) => {
    const splitLoc = loc.split(", ");
    let stateIndex = 0;
    for (let x = 0; x < splitLoc.length; x++) {
        if (splitLoc[x].length === 2) stateIndex = x;
    }
    return splitLoc[stateIndex - 1] + ", " + splitLoc[stateIndex];
}

export default Influencer;
