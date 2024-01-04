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

export const ContainerEdu = styled.div`
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
    max-width: 100%;
  word-wrap: break-word;
`;

export const Titulo = styled.h1`

`;

export const ListUl = styled.ul` 
 margin-right: -8.5px;
 margin-left: 10px;
`;

export const list = styled.li`
  text-align: center;
  margin-bottom: 5px;
  font-size: 16px;
  font-weight: bold;
  text-align: start;
  word-break: break-all;
`;

export const QuebraLinha = styled.div`
  margin-bottom: 1.5em;
`;
