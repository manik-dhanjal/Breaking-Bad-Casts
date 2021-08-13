import styled from "styled-components"

export default styled.footer`
background:black;
display:block;
.container{
    max-width:1280px;
    margin:0 auto;
    padding:20px 50px;
    color:grey;
    font-size:0.8em;
}
@media screen and (max-width:720px){
    .container{
        padding:20px 30px;
    }
}
`