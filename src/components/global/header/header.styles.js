import styled from "styled-components"

export default styled.header`
background:black;

.container{
    display:grid;
    grid-template-columns:1fr 3fr 1fr;
    max-width:1280px;
    margin:0 auto;
    padding:10px 30px;
    .link-logo{
        width:max-content;
    }
    .logo-cont{
        width:50px;
        img{
            width:100%;
            height:100%;
            object-fit:contain;
            object-position:center;
        }
    }
    #search-box{
        justify-self:center;
        align-self:center;
        max-width:350px;
        width:100%;
    }
    #resume-btn{
        justify-self:end;
        align-self:center;
    }
}

`