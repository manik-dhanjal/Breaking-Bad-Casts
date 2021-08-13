import styled from "styled-components"

export default styled.div`
    background:#181818;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:Center;
    padding:15px;
    &>div{
        margin-bottom:15px;
    }
    .error-head{
        color:red;
        font-weight:600;
        font-size:1.1em;

    }
`