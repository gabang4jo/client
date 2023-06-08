import styled from 'styled-components'
import React,{useState} from 'react'
import MainHeader from './MainHeader'

const MapContainer=styled.div`
    display: flex;
    flex-direction: column;
    width: 1440;
    height: 1024;
`;

function Map({...loginUserProps}) {
 
    return (
      <MapContainer>
        <MainHeader {...loginUserProps} ></MainHeader>
      </MapContainer>
    );
}
    
export default Map;