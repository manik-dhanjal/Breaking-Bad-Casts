import styled from "styled-components";

export default styled.div`
    main{
        width:100%;
        max-width:1280px;
        padding:0 60px;
        margin:50px auto;
        min-height: calc( 100vh - 55px - 74px - 100px);
    }
    @media screen and (max-width:720px){
        main{
            padding:0 30px;
            margin:30px auto;
        }
    }
`