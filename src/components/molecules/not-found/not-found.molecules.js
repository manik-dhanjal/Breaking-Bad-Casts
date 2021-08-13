import React from 'react'
import Styles from "./not-found.styles"
import Button from '../../atom/button/button.atom'

const NotFound = () => {
    return (
        <Styles>
            <h1>404</h1>
            <p>Oops! Something is wrong.</p>
            <Button  href="/"> Go back in initial page, is better.</Button>
        </Styles>
    )
}

export default NotFound
