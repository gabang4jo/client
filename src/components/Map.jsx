import styled from 'styled-components'
import React from 'react'
import MainHeader from './MainHeader'

const MapContainer=styled.div`
    display: flex;
    flex-direction: column;
    width: 1440;
    height: 1024;
`;

function Map() {
 
    return (
      <MapContainer>
        <MainHeader></MainHeader>
      </MapContainer>
    );
}
    
export default Map;