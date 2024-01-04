import styled, { keyframes } from "styled-components";

const pulseBorder = keyframes`
0% {
      border-color: blueviolet;
    }
    50% {
      border-color: purple;
    }
    100% {
      border-color: #78327D;
    }
`;

export const ContainerPerfil = styled.div`
 width: 300px;
    height: auto;
    margin-top: 50px;
    margin-left: 50px;
    margin-bottom: 25px;
    border-radius: 25px;
    overflow: auto;
    background-color: #1D1F1C;
    border:3.75px;
    border-style: solid;
    animation: ${pulseBorder} 2s infinite;

`;

export const icon = styled.img`
    margin-top: 20px;
    margin-left: 75px;
    max-width: 100%;
    max-height: 100%;
    border-radius: 80%; /* Correção: alterei para 50% para obter uma borda circular */
    width: 150px;
    height: 150px;
    border: 2.5px;
    border-style: solid;
    animation: ${pulseBorder} 2s infinite;
    
    /* Adicionando propriedades para centralizar a imagem */
    display: block;
    margin-left: auto;
    margin-right: auto;
`;


export const Nome =styled.h1`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align:center ;
    font-size: 37px;
    text-decoration: none;
    color:#CCCCCC;
`;

export const Idade = styled.h3`
display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    text-decoration: none;
    color:#CCCCCC;
`;

export const Espec = styled.span`
  display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    text-transform: capitalize;
    font-size: 20px;
    font-weight: 600;
    color:#DEDEDE;
`;

export const QuebraLinha = styled.div`
  margin-bottom: 1.5em;
`;
