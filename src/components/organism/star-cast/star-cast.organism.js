import React from 'react'
import Styles from "./star-cast.styles"
import Title from "../../atom/section-title/section-title.atom"
import CharacterGrid from '../../molecules/character-grid/character-grid.molecules'

const StarCast = () => {
    return (
        <Styles>
            <Title>Star Cast</Title>
            <CharacterGrid/>
        </Styles>
    )
}

export default StarCast
