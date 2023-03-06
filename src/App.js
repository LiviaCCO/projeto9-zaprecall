import React from 'react';
import styled from "styled-components";
import logo from './assets/logo.png';
import setaPlay from './assets/seta_play.png';
import setaReturn from './assets/seta_virar.png';
//import Title from './Title.js';
//import Question from './Question.js'

export default function App() {
  return (
    <Container>
      <Title />
      <Question />
      <Concluidos />
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
`


function Title(){
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
function Question(){

return(
<>
  <QuestPergunta>
    <p>O que é JSX?</p>
    <img key="seta" src={setaReturn} alt="seta"/>
  </QuestPergunta>
  <QuestResposta>
    <p>JSX é uma sintaxe para escrever HTML dentro do JS.</p>
    <Botoes>
      <Botao color={"#FF3030"}>Não lembrei</Botao>
      <Botao color={"#FF922E"}>Quase não lembrei</Botao>
      <Botao color={"#2FBE34"}>Zap!</Botao>
    </Botoes>
    
  </QuestResposta>
  <Quest>
    <p>Pergunta 1</p>
    <img key="seta" src={setaPlay} alt="seta"/>
  </Quest>
  <Quest>
    <p>Pergunta 1</p>
    <img key="seta" src={setaPlay} alt="seta"/>
  </Quest>
</>
)
}
const Botoes=styled.div`
  width: 100%;
  display:flex;
  flex-direction: row;
  justify-content: space-between;
`
const Botao=styled.button`
  width: 85.17px;
  height: 37.17px;
  background: ${props => props.color};
  border: none;
  border-radius: 5px;
  font-family: 'Recursive';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  align-items: center;
  text-align: center;
  color: #FFFFFF;
`

const QuestResposta=styled.div`
  width: 80%;
  height: 131px;
  background: #FFFFD5;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 15px;
  margin-bottom: 10px;
  margin-top: 10px;
  p{
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    color: #333333;
  }
`

const QuestPergunta=styled.div`
  width: 80%;
  height: 131px;
  background: #FFFFD5;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 15px;
  margin-bottom: 10px;
  margin-top: 10px;
  position:relative;
  img{
    width: 30px;
    height: 20px;
    position: absolute;
    bottom: 10px;
    right: 15px;
  }
  p{
    text-align: left;
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    color: #333333;
  }
`
const Quest = styled.div`
    width: 80%;
    height: 65px;
    background: #FFFFFF;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    padding: 15px;
    margin: 12px 37px;
  p{
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    color: #333333;
  }
`

function Concluidos(){
  return(
    <Rodape>0/4 CONCLUÍDOS</Rodape>
  )
}

const Rodape=styled.div`
  width: 100%;
  height: 70px;
  background: #FFFFFF;
  box-shadow: 0px -4px 6px rgba(0, 0, 0, 0.05);
  display:flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-top:25px;
  position: fixed;
  bottom: 0px;

  p{
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    color: #333333;
  }
 
`

