import styled from 'styled-components'
import React,{useState} from 'react'
import MainHeader from './MainHeader'

const RecommendContainer=styled.div`
    display: flex;
    flex-direction: column;
    width: 1440;
    height: 1024;
`;

function Recommend({...loginUserProps}) {
 
    return (
      <RecommendContainer>
        <MainHeader {...loginUserProps} ></MainHeader>
      </RecommendContainer>
    );
}
    
export default Recommend;