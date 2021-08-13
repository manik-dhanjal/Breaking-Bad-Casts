import styled from "styled-components"

export default styled.header`
background:black;
.container{
    display:grid;
    grid-template-columns:1fr 3fr 1fr;
    max-width:1280px;
    margin:0 auto;
    padding:10px 60px;
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
        .button{
            display:block;
        }
        .icon-cont{
            display:none;
        }
    }
}
@media screen and (max-width:720px){
    .container{
        padding:10px 30px;
    }
    .container{
        display:grid;
        grid-template-columns:1fr 1fr;
        grid-template-columns:1fr 1fr;
        grid-row-gap:10px;
    }
    .link-logo{
        grid-column:1/2;
        grid-row:1/2;
    }
    #search-box{
        grid-column:1/3;
        grid-row:2/3;
        max-width:100%!important;
    }
    #resume-btn{
        grid-column:2/3;
        grid-row:1/2;
        .button{
            display:none!important;
        }
        .icon-cont{
            display:block!important;
        }
    }
}

`