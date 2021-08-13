import React from 'react'
import Styles from "./loading-animation.styles"

const LoadingAnimation = () => {
    return (
        <Styles width="0px" sWidth="30px" className='loading-animation'>
            <div className='loading'/>
            <div className="text">Loading ...</div>
        </Styles>
    )
}

export default LoadingAnimation
