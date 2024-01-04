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

export const Container = styled.div`
  max-width: auto;
  display: flex;
  justify-content: center;
  margin-top: 30px;
  align-items: center;
  align-self: center;
  margin-left: 75px;
  border-radius: 25px;
  border:3.75px;
  border-style: solid;
  animation: ${pulseBorder} 2s infinite;
  overflow: hidden;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const ScrollView = styled.div`
  max-height: 1035px;
  overflow: auto;

  /* Customize the scrollbar */
  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background-color: #0A0909;
  }

  ::-webkit-scrollbar-thumb {
    background-color: blueviolet;
    border-radius: 10px;
    border: 3px solid #0A0909;
  }

  scrollbar-color: transparent transparent;
  scrollbar-width: thin;

  /* Animate the scrollbar border */
  &::-webkit-scrollbar-thumb {
    border-right: 3px solid transparent;
    animation: ${pulseBorder} 2s infinite;
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 20px;
`;

export const Card = styled.div`
  width: 250px;
  height: auto;
  padding: 10px;
  background-color: #1D1F1C;
  color: white;
  margin:20px;
  border-radius: 25px;
  font-size: 14px;
  overflow: hidden;
  text-align: start;
  border-radius: 25px;
  border:1px;
  border-style: solid;
  animation: ${pulseBorder} 2s infinite;
  
`;

export const desc = styled.p`
  margin-top: 10px;
  margin-bottom: 10px;
  font-size:17.5px;

`;

export const Título= styled.h2`

`;

export const link=styled.a`
 text-decoration: none;
 color: #66665C;
 font-size: 20px;
 font-weight: 900;
 cursor: url('./img/pointer.png'), auto;
`;
