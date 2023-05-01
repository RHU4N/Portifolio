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

export const QuebraLinha = styled.div`
  margin-bottom: 0.5em;
`;

export const ContainerRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  overflow: auto;
`;

export const ContainerCont = styled.div`
display: flex;
  flex-direction: column;
  align-items: center;
width: 300px;
    height: auto;
    margin-top: 10px;
    margin-left: 50px;
    margin-bottom: 50px;
    border-radius: 25px;
    overflow: auto;
    background-color: #1D1F1C;
    border:3.75px;
    border-style: solid;
    animation: ${pulseBorder} 2s infinite;
`;
