import { createGlobalStyle } from "styled-components";
import { keyframes } from "styled-components";

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

const Global = createGlobalStyle`

@font-face {
  font-family: 'Azonix';
  src: url('/fonts/Azonix.otf') format('opentype');
}


    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        cursor: url('./img/cursor.png'), auto;
    }
 

    body{
        color: #DEDEDE;
        background-color: #0A0909;
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
}
`;


export default Global;