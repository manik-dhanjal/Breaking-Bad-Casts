import React from 'react'
import styled from 'styled-components'
import NotFoundCont from '../components/molecules/not-found/not-found.molecules'

const Styles = styled.div`
display:flex;
justify-content:center;
align-items:Center;
min-height:calc( 100vh - 55px - 73px - 100px);
`
const NotFound = () => {
    return (
        <Styles>
            <NotFoundCont/>
        </Styles>
    )
}

export default NotFound
