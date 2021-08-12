import React from 'react'
import Styles from "./section-title.styles"


const Title = ({children}) => {
    return (
        <Styles>
            <h2>{children}</h2>
            <hr/>
        </Styles>
    )
}

export default Title
