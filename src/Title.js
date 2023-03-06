
import logo from './assets/logo.png';
///import {Top} from './style.js';
import styled from "styled-components";

export default function Title(){
  return (
    <Top>
      <img key="logo" src={logo} alt="logo"/>
      <p>ZapRecall</p>
    </Top>
  )
}
const Top = styled.div`
    width: 210px;
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    letter-spacing: -0.012em;
    color: #FFFFFF;
    margin: 40px auto;
  p{
    margin-left: 25px;
    font-family: 'Righteous';
    font-style: normal;
    font-weight: 400;
    font-size: 36px;
    line-height: 45px;
  }
  img{
    width: 52px;
    height: 60px;
  }
  
`
  
