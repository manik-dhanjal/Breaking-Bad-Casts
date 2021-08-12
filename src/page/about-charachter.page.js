import React,{useState,useEffect} from 'react'
import axios from "axios"
import Character from '../components/organism/charachter/character.organism'
import {useParams} from "react-router-dom"

const getCaracter = async (char_id,character,setCharacter) => {

    try{
        if(isNaN(char_id)) return 0;
        const response = await axios.get(`/characters/${char_id}`)
        console.log(response.data)
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
      getCaracter(id,character,setCharacter)
    }, [])

    return (
        <>

            {
                character.status==="pending"?
                    <div>Loading...</div>
                    :(character.status === "success"?
                        <Character data={character.data}/>   
                        :<div className="error">not found</div>
                    )
            }
        </>
    )
}

export default AboutCharachter
