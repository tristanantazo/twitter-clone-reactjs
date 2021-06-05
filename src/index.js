import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle `
  html {
    font-size: 62.5%;
  }
  :root{
    --primary: #1da1f2;
    --secondary: #14171A;
    --darkgray: #657786;
    --lightgray: #AAB8C2;
    --extra-lightgray: #E1E8ED;
    --extra-extra-lightgray: #F5F8FA;
  }
  *, *::before, *::after {
    box-sizing: border-box;
  }
  body{
    background-color: black;
    color: var(--extra-extra-lightgray)
  }
  body, h1, h2, h3, p {
    margin: 0;
  }
  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
      <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
