import React from 'react'
import Styles  from "./error-message.styles"
import Button from "../../atom/button/button.atom"

const ErrorMsg = ({message,handleTryAgain}) => {
    return (
        <Styles className='error-box'>
            <div className="error-head">Error !!</div>
            <div className = "main-msg">
                Sorry, we are facing trouble to connect ...
            </div>
            {
                message&&
                <div className="sub-msg">
                    {message}
                </div>
            }
            <Button onClick={handleTryAgain}>Try Again</Button>
        </Styles>
    )
}

export default ErrorMsg
