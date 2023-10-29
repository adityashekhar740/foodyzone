import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createGlobalStyle } from "styled-components";
const GlobalStyles = createGlobalStyle`
*{
  box-sizing: border-box;
   margin: 0;
  padding:0;
  body{
    background-color: #323343;
    color: white;
    background-image: url("../public/bg.png");
    background-size:cover ;
  }
 }
`
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyles />
    <App />
  </React.StrictMode>,
)
