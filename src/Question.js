import setaPlay from './assets/seta_play.png';
//import {Quest} from './style.js';
import styled from "styled-components";
import setaReturn from './assets/seta_virar.png';
import cards from './cards.js';
import {useState} from 'react';



export default function Question({resultado, setResultado}){

  const [display, setDisplay] = useState(true);
  const [displayResposta, setDisplayResposta] = useState(false);
  const [displayPergunta, setDisplayPergunta] = useState(false);

  //{resultado, setResultado, displayPergunta, setDisplayPergunta, DisplayResposta, setDisplayResposta}){
  //para embaralhar as questoes:
    const novoCard = Math.floor(Math.random() * (cards.length-3));
    
    const novasPerguntas = [cards[novoCard], cards[novoCard+1], cards[novoCard+2], cards[novoCard+3]];

    function pergunta(event){
      setDisplay(false);
      setDisplayResposta(true);
      console.log("display", display)
      console.log("pergunta", displayPergunta)
      console.log("Resposta", displayResposta)
    }

    function verificar(event){
      const result=event.target.value;
      if (result==="errou"){
        console.log("errou")
      }
      else if (result==="quase"){
        console.log("quase")
      }      
      else{
        let maisUm = resultado +1;
        setResultado(maisUm);
      }
    }

    return(
      <>
      {novasPerguntas.map((card, index)=>(
      <>
        <Quest onClick={(e)=>pergunta(e)} value={display}>
          <p>Pergunta {index+1}</p>
          <img key="seta" src={setaPlay} alt="seta"/>
        </Quest>

        <QuestPergunta value={!display}>
          <p>{card.question}</p>
          <img key="seta" src={setaReturn} alt="seta"/>
        </QuestPergunta>

        <QuestResposta value={displayResposta}>
          <p>{card.answer}</p>
          <Botoes>
            <Botao value={"errou"} onClick = {verificar} color={"#FF3030"}>Não lembrei</Botao>
            <Botao value={"quase"} onClick = {verificar} color={"#FF922E"}>Quase não lembrei</Botao>
            <Botao value={"acertou"} onClick = {verificar} color={"#2FBE34"}>Zap!</Botao>
          </Botoes>
        </QuestResposta>
      </>
      ))}
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
      width: 70%;
      height: 131px;
      background: #FFFFD5;
      box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
      border-radius: 5px;
      display: ${(props) => props.value ? "flex" : "none"}
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
      width: 70%;
      height: 131px;
      background: #FFFFD5;
      box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
      border-radius: 5px;
      display: ${(props) => props.value ? "none" : "flex"}
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
        width: 70%;
        height: 65px;
        background: #FFFFFF;
        box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
        border-radius: 5px;
        display:  ${(props) => props.value ? "flex" : "none"};
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        text-align: center;
        padding: 15px;
        margin: 12px 37px;
      p{
        text-decoration: ${(props) => props.finalizada ? "line-through" : "none"};
        font-family: 'Recursive';
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 19px;
        color: black;
        
      }
    `
//color: ${(props) => props.finalizada ? color : "#333333"};