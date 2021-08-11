import styled from "styled-components";

export default styled.div`
display:flex;
justify-content:center;
align-items:center;
width:100%;
input{
    border:none;
    border-radius:0;
    font-size:1em;
    padding:0.5em 1em;
    background:white;
    width:100%;
    &:focus{
        outline:none;
    }
}
button{
    border:none;
    background:white;
    border-radius:0;
    height:100%;
    padding:0.435em 1em;
    display:flex;
    justify-content:center;
    align-items:center;
    cursor:pointer;
    img{
        height:1.8em;
    }
}
`