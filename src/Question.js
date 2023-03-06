import setaPlay from './assets/seta_play.png';
import certo from './assets/icone_certo.png';
import errado from './assets/icone_erro.png';
import quase from './assets/icone_quase.png';
//import {Quest} from './style.js';
import styled from "styled-components";
import setaReturn from './assets/seta_virar.png';
import cards from './cards.js';
import {useState} from 'react';

const novoCard = Math.floor(Math.random() * (cards.length-3));
    
const novasPerguntas = [cards[novoCard], cards[novoCard+1], cards[novoCard+2], cards[novoCard+3]];

export default function Question({resultado, setResultado}){

  const [displayStart, setDisplayStart] = useState(true);
  const [displayResposta, setDisplayResposta] = useState(true);
  const [displayPergunta, setDisplayPergunta] = useState(true);
  const [fim, setFim] = useState(false);
  const [finalizada, setFinalizada] = useState([]);

  //{resultado, setResultado, displayPergunta, setDisplayPergunta, DisplayResposta, setDisplayResposta}){
  //para embaralhar as questoes:
    

    function abrirPergunta(event){
      console.log(event.target)
      //console.log(novasPerguntas[index])
      setFim(true)
      setDisplayStart(!displayStart)
    }

    function verificar(event){
      const result=event.target.value;

      if (result==="errou"){
        console.log("errou")
        /* return(
          <Errou>
            <p>Pergunta {index+1}</p>
            <img data-test="no-icon" key="erro" src={errado} alt="seta"/>
          </Errou>
        ) */
      }
      else if (result==="quase"){
        console.log("quase")
       /*  return (
          <Quase>
            <p>Pergunta {index+1}</p>
            <img data-test="partial-icon" key="quase" src={quase} alt="seta"/>
          </Quase>
        ) */
      }      
      else{
        if(resultado <=3){
          let maisUm = resultado +1;
          setResultado(maisUm);
          /* return(
            <Certo>
              <p>Pergunta {index+1}</p>
              <img data-test="zap-icon" key="certo" src={certo} alt="seta"/>
            </Certo> )*/
      
        }
      } 
      setDisplayStart(true);
      setDisplayPergunta(true);
      setDisplayResposta(true);
    }

    return(
      <>
      {novasPerguntas.map((card, index)=>(
      <>
        {displayStart ? 
          <Quest data-test="flashcard">
            <p data-test="flashcard-text"  finalizada={fim}>Pergunta {index+1}</p>
            <button data-test="play-btn" value={index} onClick={(card, index)=>abrirPergunta(card, index)}><img key="seta" src={setaPlay} alt="seta"/></button>
          </Quest> :
          (displayPergunta ? 
            <QuestPergunta>
              <p data-test="flashcard-text" >{card.question}</p>
              <button data-test="turn-btn"><img key="seta" onClick={()=>setDisplayPergunta(!displayPergunta)} src={setaReturn} alt="seta"/></button>
            </QuestPergunta> : 
            (displayResposta && 
              <QuestResposta>
                <p data-test="flashcard-text" >{card.answer}</p>
                <Botoes>
                  <Botao data-test="no-btn" value={"errou"} indice={index} onClick = {verificar} color={"#FF3030"}>Não lembrei</Botao>
                  <Botao data-test="partial-btn" value={"quase"} indice={index} onClick = {verificar} color={"#FF922E"}>Quase não lembrei</Botao>
                  <Botao data-test="zap-btn" value={"acertou"} indice={index} onClick = {verificar} color={"#2FBE34"}>Zap!</Botao>
                </Botoes>
              </QuestResposta>))}

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
      width: 70%;
      height: 131px;
      background: #FFFFD5;
      box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
      border-radius: 5px;
      display: "flex"
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
      button{
        border:none;
      }

    `
    const Quest = styled.div`
        width: 70%;
        height: 65px;
        background: #FFFFFF;
        box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
        border-radius: 5px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        text-align: center;
        padding: 15px;
        margin: 12px 37px;
      p{
        text-decoration: ${(props) => props.finalizada ? "line-through":"none"};
        font-family: 'Recursive';
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 19px;
        color: black;
      }
      button{
        border:none;
        background-color: white;
      }

    `
//color: ${(props) => props.finalizada ? color : "#333333"};

const Errou = styled(Quest)`
 p{
  text-decoration: line-through;
  color: #FF3030;
 }
`
const Certo = styled(Quest)`
 p{
  text-decoration: line-through;
  color: #2FBE34;
 }
`
const Quase = styled(Quest)`
 p{
  text-decoration: line-through;
  color: #FF922E;
 }
`