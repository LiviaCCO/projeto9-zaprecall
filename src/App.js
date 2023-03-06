import React from 'react';
import styled from "styled-components";
//import logo from './assets/logo.png';
//import setaPlay from './assets/seta_play.png';
//import setaReturn from './assets/seta_virar.png';
import Title from './Title.js';
import Question from './Question.js'
import Concluidos from './Concluidos.js'
import {useState} from 'react'

export default function App() {
  const[resultado, setResultado] = useState(0);
  const [display, setDisplay] = useState(true);
  const [displayResposta, setDisplayResposta] = useState(false);
  const [displayPergunta, setDisplayPergunta] = useState(false);
  
  return (
    <Container>
      <Title />
      <Question 
      display = {display}
      setDisplay = {setDisplay}
      displayPergunta = {displayPergunta}
      setDisplayPergunta = {setDisplayPergunta}
      displayResposta = {displayResposta}
      setDisplayPergunta = {setDisplayPergunta}
      resultado={resultado} 
      setResultado={setResultado}/>
      <Concluidos resultado={resultado}/>
    </Container>
  );
}

const Container=styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  background: #FB6B6B;
  border: 1px solid #DBDBDB;
  display: flex;
  flex-direction: column;
  align-items: center;
  justif-content: center;
  text-align: center;
  padding-bottom: 150px;
`

