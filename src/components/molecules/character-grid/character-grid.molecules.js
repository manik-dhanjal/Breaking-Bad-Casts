import React,{useEffect,useState} from 'react'
import Styles,{Grid} from "./character-grid.styles"
import axios from "axios"
import CharacterCard from '../character-card/character-card.molecules'
import Pagination from '../../atom/pagination/pagination.atom'

const getCharachters = async (characters,setCharacters) => {
    try{
        const response = await axios.get("/characters");
        console.log(response.data)
        const totalPost = response.data.length
        const totalPage = Math.floor(totalPost/12)+(totalPost%12?1:0)
        setCharacters({
            status:"success",
            data:response.data,
            message:"",
            totalPost:totalPost,
            totalPage:totalPage,
            currentPage:1
        })
    }
    catch(error){
        console.log(error)
        setCharacters({
            status:"failed",
            data:[],
            totalPost:0,
            totalPage:0,
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
    const handlePageChange = (page) => {
        setCharacters({
            ...characters,
            currentPage:page
        })
    }
    useEffect(()=>{
        getCharachters(characters,setCharacters);
    },[])
    console.log(characters.currentPage-1*12,characters.currentPage*12)
    return (
        <Styles>
            {
                characters.status==="pending"?
                    <h3>Loading</h3>
                    :(characters.status==="success"?
                        <>
                        <Grid>
                            {
                                characters.data.slice((characters.currentPage-1)*12,characters.currentPage*12).map(char => <CharacterCard data={char} key={char.char_id}/>)
                            }
                        </Grid>
                        <Pagination totalPage={characters.totalPage} onChange={handlePageChange}/>
                        </>
                        :<h3>failed</h3>
                    )
            }
            
        </Styles>
    )
}

export default CharacterGrid
