import React from 'react'
import GlobalStyle from '../components/GlobalStyle';
import Map from '../components/Map';
const MapPage = ({...hookProps}) => {
    return (
        <div>
            <GlobalStyle />
            <Map {...hookProps} />
        </div>
    )
}

export default MapPage;