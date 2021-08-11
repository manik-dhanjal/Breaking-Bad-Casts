import React,{useState} from 'react'
import Styles from './search-box.styles'
import searchGlass from "../../../assets/images/search-glass.svg"

const SearchBox = ({placeholder="Search...",onClick}) => {
    const [text, setText] = useState("");
    return (
        <Styles>
            <input type="text" placeholder={placeholder} name="search" onChange={(e)=> setText(e.target.value)}/>
            <button onClick={()=>onClick(text)}>
                <img src={searchGlass} alt='search button'/>
            </button>
        </Styles>
    )
}

export default SearchBox
