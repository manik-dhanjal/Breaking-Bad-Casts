import React,{useEffect,useState} from 'react'
import Styles,{Grid} from "./character-grid.styles"
import axios from "axios"
import CharacterCard from '../character-card/character-card.molecules'
import Pagination from '../../atom/pagination/pagination.atom'
import { withRouter } from 'react-router'
import NotFound from '../not-found/not-found.molecules'
import LoadingAnimation from "../loading-animation/loading-animation.molecules"
import ErrorMsg from '../error-message/error-message.molecules'

const getCharachters = async (characters,setCharacters,query) => {
    try{

        setCharacters({
            status:"pending",
            data:[],
            message:"",
            totalPost:0,
            totalPage:0,
            currentPage:0
        })
        const response = await axios.get(`/characters${query?'?name='+query:""}`);
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

const CharacterGrid = ({history}) => {
    const [characters,setCharacters] = useState({
        status:"pending",
        data:[],
        message:"",
        totalPost:0,
        totalPage:0,
        currentPage:0
    })
    const handlePageChange = (page) => {
        setCharacters({
            ...characters,
            currentPage:page
        })
    }
    const getCaracterWithQuery = () => {
        let query = new URLSearchParams(history.location.search);
        getCharachters(characters,setCharacters,query.get('search'));
    }
    useEffect(()=>{
        getCaracterWithQuery()
    },[history.location.search])

    return (
        <Styles>
            {
                characters.status==="pending"?
                    <LoadingAnimation/>
                    :(characters.status==="success"?
                        <>
                        {
                            characters.data.length?
                                <Grid>
                                    {
                                        characters.data.slice((characters.currentPage-1)*12,characters.currentPage*12).map(char => <CharacterCard data={char} key={char.char_id}/>)
                                    }
                                </Grid>
                                :<NotFound/>
                        }
                        
                        {
                            characters.totalPage>1?
                                <Pagination totalPage={characters.totalPage} onChange={handlePageChange}/>
                                :null
                        }
                        
                        </>
                        :<ErrorMsg message = {characters.message} handleTryAgain={() => getCaracterWithQuery()}/>
                    )
            }
            
        </Styles>
    )
}

export default withRouter(CharacterGrid)
