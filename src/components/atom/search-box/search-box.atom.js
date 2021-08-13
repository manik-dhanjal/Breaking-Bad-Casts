import React,{useState} from 'react'
import Styles from './search-box.styles'
import searchGlass from "../../../assets/images/search-glass.svg"
import { withRouter } from 'react-router'

const SearchBox = ({placeholder="Search...",history}) => {
    const [text, setText] = useState("");
    const handleSubmit = () => {
        if(!text) return 0;
        history.push(`/?search=${text.replace(/\s/g,"+")}`)
        setText("");
    }
    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            handleSubmit()
        }
      }
     
    return (
        <Styles>
            <input type="text" placeholder={placeholder} name="search" value={text} onChange={(e)=> setText(e.target.value)} onKeyDown={handleKeyDown}/>
            <button onClick={handleSubmit}>
                <img src={searchGlass} alt='search button'/>
            </button>
        </Styles>
    )
}

export default withRouter(SearchBox)
