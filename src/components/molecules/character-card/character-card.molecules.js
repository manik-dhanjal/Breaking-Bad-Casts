import React from 'react'
import Styles,{Details} from "./character-card.styles"
import {Link} from "react-router-dom"

const CharacterCard = ({data}) => {
    const {name,img,portrayed,birthday,occupation,status,char_id} = data;
    return (
        <Styles>
            <Link to={`/character/${char_id}`}>
                <div className="image-cont">
                    <img src={img} alt={name}/>
                </div>
                <div className="details">
                    <div className="background"/>
                    <div className="content">
                        <div className="name">
                            {name}
                        </div>
                        <div className="protrayed">
                            {portrayed}
                        </div>
                        <ul className="hidden-details">
                            <li>
                                <span className="head">Date of Birth:</span>
                                <span className = "value">{birthday}</span>
                            </li>
                            <li>
                                <span className="head">Status:</span>
                                <span className = "value">{status}</span>
                            </li>
                            <li id="occupation">
                                <span className="head">Occupation:</span>
                                <span className = "value">{occupation.toString()}</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </Link>
        </Styles>
    )
}

export default CharacterCard
