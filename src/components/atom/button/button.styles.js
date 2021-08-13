import styled from "styled-components";

export default styled.div`
button,#link-btn{
    border:1px solid black;
    background:white;
    border-radius:0;
    padding:0.4em 1.6em 0.45em 1.6em;
    font-size:1em;
    cursor:pointer;
    transition:0.3s ease;
    color:black;
    display:block;
    &:hover{
        background:#055A36;
        color:white;
    }
}
`