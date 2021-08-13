import styled from "styled-components";

export default styled.div`
display:flex;
margin:50px auto;
max-width:1024px;
margin-bottom:0px;

@media screen and (max-width:1024px){
    flex-direction:column;
    max-width:500px;
    margin:30px auto;
}
`

export const Image = styled.div`
width:calc( 45% - 60px);
overflow:hidden;
min-height:400px;
max-height:70vh;
margin-right:60px;
background:grey;
img{
    width:100%;
    height:100%;
    object-fit:cover;
    object-position:top;
}
@media screen and (max-width:1024px){
    flex-direction:column;
    width:100%;
    margin-bottom:40px;
    margin-right:0!important;
    min-height:400px;
    max-height:50vh;
}
`

export const Details = styled.div`
width:55%;
.head{
    margin-bottom:40px;
    h2{
        font-size:2.2em;
        margin-bottom:10px;
    }
    hr{
        width:150px;
        color:white;
    }
}

.details-table{
    margin-bottom:30px;
    td{
        padding-bottom:1em;
        font-size:1em;
        
    }
    .key{
        font-weight:600;
        width:240px;
    }
}
.quotes{
    .quote-title{
        font-size:1.5em;
        margin-bottom:20px;
    }
}
@media screen and (max-width:1024px){
    width:100%;
    .head{
        text-align:center;
        display:flex;
        justify-content:Center;
        align-items:center;
        flex-direction:column;
    }
    .details-table{
        .key{
            font-weight:600;
            width:45%;
            padding-right:10px;
        }
    }
}
`

export const Scroller = styled.div`
max-height:200px;
overflow-y:auto;

.content{
    background:#181818;
    padding-left:2.2em;
    font-size:0.85em;
    padding-top:20px;
    padding-bottom:10px;
    li{
        padding-bottom:1.1em;
        line-height:1.3em;
    }
}
@media screen and (max-width:720px){

}

`