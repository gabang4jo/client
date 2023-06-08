import styled from 'styled-components'
import React,{useState} from 'react'
import MainHeader from './MainHeader'

const IntroductionContainer=styled.div`
    display: flex;
    flex-direction: column;
    width: 1440;
    height: 1024;
`;

function Introduction({...loginUserProps}) {
 
    return (
      <IntroductionContainer>
        <MainHeader {...loginUserProps} ></MainHeader>
      </IntroductionContainer>
    );
}
    
export default Introduction;