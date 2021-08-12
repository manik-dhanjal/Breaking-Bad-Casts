import styled from "styled-components"

export default styled.div`
background:#181818;
padding:20px;
max-width:900px;
margin:0 auto;
`

export const Grid = styled.div`
    display:grid;
    grid-template-columns:1fr 1fr 1fr;
    grid-row-gap:40px;
    grid-column-gap:30px;
    max-width:100%;
    &>div{
        justify-self:center;
        height:400px;
        width:100%;
    }
`