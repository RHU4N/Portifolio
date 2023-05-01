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

export const ContainerTech = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 300px;
    height: auto;
    margin-top: -12px;
    margin-left: 50px;
    margin-bottom: 50px;
    border-radius: 25px;
    overflow: auto;
    background-color: #1D1F1C;
    border:3.75px;
    border-style: solid;
    animation: ${pulseBorder} 2s infinite;

`;

export const ColRow=styled.div`
display: grid;
grid-template-columns: repeat(2, auto);
grid-gap: 10px;
width: 100%;
`;



export const Titulo = styled.h1`
  
`;

export const Badge = styled.div`
  display: flex;
  align-items: center;
  background-color: purple;
  color: white;
  border-radius: 10px;
  height: 35px;
  width: auto;
  padding: 5px;
  margin: 4.5px;
`;

export const Image = styled.img`
  height: 100%;
  margin-right: 5px;
`;

export const Text = styled.span`
  font-size: 16px;
  font-weight: bold;
`;


export const QuebraLinha = styled.div`
  margin-bottom: 1.5em;
`;
