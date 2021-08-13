import React from 'react'
import Styles from "./button.styles"
import {Link} from "react-router-dom"
const Button = ({children,onClick,href}) => {
    return (
        <Styles className='button'>
            {
                href?
                <Link to={href} id='link-btn'>
                    {children}
                </Link>
                :<button onClick={onClick}>{children}</button> 
            }


        </Styles>
    )
}

export default Button
