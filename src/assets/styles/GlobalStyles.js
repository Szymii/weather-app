import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  *,*::before,*::after{
    box-sizing: border-box;
    font-family: 'Ubuntu Condensed', sans-serif;
    margin: 0;
    padding: 0;
  }
  
  html{
  font-size: 16px;
  @media (min-width: 2000px) {
    font-size: 20px;
  }
  @media (min-width: 2500px) {
    font-size: 26px;
  }
  @media (min-width: 3000px) {
    font-size: 32px;
  }
  @media (min-width: 3500px) {
    font-size: 36px;
  }
}

`;
