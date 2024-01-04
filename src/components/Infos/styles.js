import styled from "styled-components";

export const cntRow=styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  overflow: auto;
  margin: 10px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
  
`;

export const cntColun=styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: auto;
  margin: 10px;

  @media (max-width: 768px) {
    margin: 0;
  }
`;