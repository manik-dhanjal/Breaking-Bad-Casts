import React from 'react'
import Styles from "./button.styles"

const Button = ({children,onClick}) => {
    return (
        <Styles>
            <button onClick={onClick}>{children}</button>
        </Styles>
    )
}

export default Button
