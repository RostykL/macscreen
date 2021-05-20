import styled, { createGlobalStyle }   from 'styled-components';

 
export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Open-Sans, Helvetica, Sans-Serif;
  }
`;

export const Wrapper = styled.div`
    height: 100vh;
    background-color: #C52A25;
    padding-top: 70px;
`
