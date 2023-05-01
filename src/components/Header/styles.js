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

export const ContainerRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: auto;
    padding-bottom: 20px;
  }
`;

export const QuebraLinha = styled.div`
  margin-bottom: 1em;
`;

export const ContainerProj = styled.div`
  width: 700px;
  height: auto;
  margin-left: 75px;
  border-radius: 25px;
  overflow: auto;
  background-color: #1d1f1c;
  border: 3.75px;
  border-style: solid;
  animation: ${pulseBorder} 2s infinite;

  @media (max-width: 768px) {
    margin: 0;
    border-width: 1.875px;
    border-radius: 15px;
    width: 100%;
  }
`;

export const ProjText = styled.p`
  margin: 5px;
  font-size: 35px;

  @media (max-width: 768px) {
    font-size: 35px;
  }
`;

export const ProjLink = styled.a`
  margin: 7px;
  cursor: url("./img/pointer.png"), auto;
  color: ${(props) => (props.$primary ? "#cccccc" : "#8f8f8f")};
  text-decoration: ${(props) => (props.$primary ? "underline" : "none")};

  @media (max-width: 768px) {
    font-size: 50px;
  }
`;
