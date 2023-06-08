import styled from 'styled-components'
import React,{useState} from 'react'
import Header1 from './Header1'
import first_main from '../assets/first_main.png'

const MainContainer=styled.div`
    display: flex;
    flex-direction: column;
    width: 1440;
    height: 1024;
`;

const Slide=styled.div`
    display: flex;
    flex-direction: column;
    height:880px;
`;

const BigText=styled.div`
  font-family:'Inter';
  font-size: 40px;
  font-weight: 700;
  line-height: 61px;
  letter-spacing: 0em;
  text-align: center;
  color: white;
`;

const SmallText=styled.div`
  font-family: 'Inter';
  font-size: 28px;
  font-weight: 550;
  line-height: 48px;
  letter-spacing: 0em;
  text-align: center;
  color: white;
`;

function SlideImg(props){
  const imgstyle={
    "height":"700px",
    "padding":"0",
    "margin":"0",
    "filter":props.imgInfo.filter
  };
  return <img src={props.imgInfo.src} alt="" style={imgstyle}></img>
}

function SlideText(props){
  
  const textboxstyle={
    "display": "flex",
    "height":"200px",
    "flexDirection": "column",
    "justifyContent" : "center",
    "backgroundColor": "#EDCB98"
  }
  return <div style={textboxstyle}>
    <BigText>{props.textInfo.t1}</BigText>
    <br></br>
    <SmallText>{props.textInfo.t2}</SmallText>
  </div>
}

function Main({...loginUserProps}) {

  const imgInfo=[
    {id:0,src:first_main, filter:"brightness(100%)"},
  ]

  const textInfo=[
    {id:0,t1:'청약 알리미',t2:'내 집 마련의 첫걸음! 청약 알리미가 도와드립니다!'},
  ]

  const [id,setId]=useState(0);

  return (
    <MainContainer>
      <Header1 {...loginUserProps} ></Header1>
      <Slide>
        <SlideImg imgInfo={imgInfo[id]}></SlideImg>
        <SlideText textInfo={textInfo[id]}></SlideText>
    </Slide>
    </MainContainer>
  );
}
    
export default Main;