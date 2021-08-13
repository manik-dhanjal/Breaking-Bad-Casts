import React from 'react'
import Styles from "./button.styles"
import {Link} from "react-router-dom"
const Button = ({children,onClick,href,target,download},props) => {
    return (
        <Styles className='button'>
            {
                href?
                <Link to={href} {...props} target = {target} download = {download} id='link-btn'>
                    {children}
                </Link>
                :<button onClick={onClick} {...props}>{children}</button> 
            }


        </Styles>
    )
}

export default Button
