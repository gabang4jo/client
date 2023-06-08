import styled from 'styled-components'
import React,{useState} from 'react'
import MainHeader from './MainHeader'

const SearchContainer=styled.div`
    display: flex;
    flex-direction: column;
    width: 1440;
    height: 1024;
`;

const SearchNameBox=styled.div`
  color: white;
  background-color: #3964E5;
  height: 200px;
  text-align: left;
  padding-left: 140px;
  line-height: 270px;
  font-weight: 600;
  font-size: 50px;
`;

function Search({...loginUserProps}) {
 
    return (
      <SearchContainer>
        <MainHeader {...loginUserProps} ></MainHeader>
        <SearchNameBox>청약 검색</SearchNameBox>
      </SearchContainer>
    );
}
    
export default Search;