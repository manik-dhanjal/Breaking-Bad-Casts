import styled from "styled-components";

export default styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    margin-top:40px;
    ul{
        list-style-type:none;
        display:flex;
        li{
            padding:5px 8px;
            margin:0 3px;
            cursor:pointer;
        }
        .active{
            background:#055A36;
        }
    }
    .arrow{
        display:flex;
        justify-content:center;
        align-items:Center;
        cursor:pointer;
    }
    .left-arr{
        margin-right:20px;
    }
    .right-arr{
        margin-left:20px;
    }
`