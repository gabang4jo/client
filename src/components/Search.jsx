import styled from 'styled-components'
import React,{useState} from 'react'
import MainHeader from './MainHeader'

const SearchContainer=styled.div`
    display: flex;
    flex-direction: column;
    width: 1440;
    height: 1024;
`;

function Search({...loginUserProps}) {
 
    return (
      <SearchContainer>
        <MainHeader {...loginUserProps} ></MainHeader>
      </SearchContainer>
    );
}
    
export default Search;