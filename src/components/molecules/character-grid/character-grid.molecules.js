import React,{useEffect,useState} from 'react'
import Styles,{Grid} from "./character-grid.styles"
import axios from "axios"

import CharachterCard from '../character-card/character-card.molecules'
import CharacterCard from '../character-card/character-card.molecules'

const getCharachters = async (characters,setCharacters) => {
    try{
        const response = await axios.get("/characters");
        console.log(response.data)
        setCharacters({
            status:"success",
            data:response.data,
            message:""
        })
    }
    catch(error){
        console.log(error)
        setCharacters({
            status:"failed",
            data:[],
            message:error.message
        })
    }
}

const CharacterGrid = () => {
    const [characters,setCharacters] = useState({
        status:"pending",
        data:[],
        message:""
    })
    useEffect(()=>{
        getCharachters(characters,setCharacters);
    },[])

    return (
        <Styles>
            {
                characters.status==="pending"?
                    <h3>Loading</h3>
                    :(characters.status==="success"?
                        <Grid>
                            {
                                characters.data.slice(0,9).map(char => <CharacterCard data={char} key={char.char_id}/>)
                            }
                        </Grid>
                        :<h3>failed</h3>
                    )
            }
        </Styles>
    )
}

export default CharacterGrid
