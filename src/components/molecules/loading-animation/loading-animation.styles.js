import styled from "styled-components";

export default styled.div`

    margin: 0;
    display: flex;
    flex-direction:column;
    align-items:Center;
    justify-content:center;
    height: calc( 100vh - 55px - 74px - 50px);
    overflow: none;
    .text{
        margin-top:50px;
    }
.loading {
    width: ${({width}) => width};
    height: ${({width}) => width};
    position: relative;
  }
  
  .loading::before, .loading::after {
    content: '';
    display: block;
    width: ${({sWidth}) => sWidth};
    height: ${({sWidth}) => sWidth};
    position: absolute;
    background: #fffa;
    animation: 1.5s infinite;
  }
  
  .loading::before {
    right: 0;
    animation-name: move1;
  }
  
  .loading::after {
    bottom: 0;
    animation-name: move2;
  }
  
  @keyframes move1 {
    50% {
      margin-top: calc(${({width}) => width} - ${({sWidth}) => sWidth});
      margin-right: 0;
      transform: rotate(-.25turn) scale(.5);
    }
    100% {
      margin-top: calc(${({width}) => width} - ${({sWidth}) => sWidth});
      margin-right: calc(${({width}) => width} - ${({sWidth}) => sWidth});
      transform: rotate(-.5turn);
    }
  }
  
  @keyframes move2 {
    50% {
      margin-bottom: calc(${({width}) => width} - ${({sWidth}) => sWidth});
      margin-left: 0;
      transform: rotate(-.25turn) scale(.5);
    }
    100% {
      margin-bottom: calc(${({width}) => width} - ${({sWidth}) => sWidth});
      margin-left: calc(${({width}) => width} - ${({sWidth}) => sWidth});
      transform: rotate(-.5turn);
    }
  }
`