import React,{useState,useEffect} from 'react'
import axios from "axios"
import Character from '../components/organism/charachter/character.organism'
import {useParams} from "react-router-dom"
import ErrorMsg from '../components/molecules/error-message/error-message.molecules'
import styled from 'styled-components'
import LoadingAnimation from '../components/molecules/loading-animation/loading-animation.molecules'
import NotFound from '../components/molecules/not-found/not-found.molecules'



const ErrorStyles = styled.div`
width:100%;
display:flex;
justify-content:Center;
align-items:Center;
min-height: calc( 100vh - 55px - 74px - 100px);
.error-box{
    width:100%;
    max-width:500px;
}
`

const getCaracter = async (char_id,setCharacter) => {

    try{
        if(isNaN(char_id)) return 0;
        setCharacter({
            status:"pending",
            data:{},
            message:""
        })
        const response = await axios.get(`/characters/${char_id}`)
            setCharacter({
                status:"success",
                data:response.data[0],
                message:""
        })
    }
    catch(error){
        console.log(error)
        setCharacter({
            status:"failed",
            data:{},
            message:error.message
        })
    }
}


const AboutCharachter = () => {

    const [character,setCharacter] = useState({
        status:"pending",
        data:{},
        message:""
    });
    let { id } = useParams();
    useEffect(() => {
      getCaracter(id,setCharacter)
    }, [id])

    return (
        <>

            {
                character.status==="pending"?
                    <LoadingAnimation/>
                    :(character.status === "success"?
                        (
                            character.data?
                                <Character data={character.data}/>
                                :
                                <ErrorStyles>
                                    <NotFound/>
                                </ErrorStyles>
                        )
                        :<ErrorStyles>
                            <ErrorMsg message={character.message} handleTryAgain={() =>  getCaracter(id,setCharacter)}/>
                        </ErrorStyles>
                    )
            }
        </>
    )
}

export default AboutCharachter
