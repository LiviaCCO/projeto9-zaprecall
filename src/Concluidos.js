import styled from "styled-components";


export default function Concluidos({resultado}){
    return(
      <Rodape data-test="footer">{resultado}/4 CONCLUÍDOS</Rodape>
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
  