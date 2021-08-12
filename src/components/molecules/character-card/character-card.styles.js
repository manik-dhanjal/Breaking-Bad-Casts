import styled from "styled-components";

export default styled.div`
    
    position:relative;
    overflow:hidden;
    .image-cont{
        width:100%;
        height:100%;
        overflow:hidden;
        background:grey;
        img{
            width:100%;
            height:100%;
            object-fit:cover;
            object-position:top;
        }
    }
    &:hover{
        .details{
            transform:translateY(-100px);
        }
    }
    .details{
        position:absolute;
        height:240px;
        width:100%;
        bottom:-155px;
        color:black;
        transition:0.2s ease;
    
        .background{
                background:white;
                position:absolute;
                width:100%;
                transform:skewY(-8deg);
                height:calc( 100% + 40px );
                margin-top:-20px;
        }
        .content{
            position:relative;
            z-index:2;
            color:black;
            padding:20px 20px;
            .name{
                font-size:1.3em;
                margin-bottom:5px;
            }
            .protrayed{
                color:#055A36;
                font-size:1em;
                margin-bottom:25px;
            }
            .hidden-details{
                font-size:0.85em;
                list-style-type:none;
                li{
                    display:flex;
                    margin-bottom:10px;
                }
                .head{
                    font-weight:600;
                    margin-right:10px;
                }
                #occupation{
                    // flex-direction:column;
                    // .head{
                    //     margin-bottom:5px;
                    // }
                    .value{
                        white-space: nowrap;
                        overflow: hidden;
                        text-overflow: ellipsis;
                    }
                }
            }
        }
    }
`

