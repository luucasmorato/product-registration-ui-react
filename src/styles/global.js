import { createGlobalStyle } from "styled-components";
import background from "../assets/images/background.svg";
import "react-toastify/dist/ReactToastify.css";

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
  }
  
  body {
    background: #1d1d2d url(${background}) no-repeat center top;
    -webkit-font-smoothing: antialiased !important;
    color: #FFF;
  }
  
  body, input, button {
    font-size: 14px;
  }
  
  #root {
    max-width: 1020px;
    margin: 0 auto;
    padding: 0 20px;
  }
  
  button {
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }

  .btnDefault {
    background: #7159c1;
    border: none;
    border-radius: 4px;
    color: #FFF;
    font-size: 1.1rem;
    min-width: 220px;
    height: 50px;
    margin-top: 25px;

    &:hover {
      font-weight: bold;
      opacity: .8;
      transition: .2s;
    }
  }

`;
