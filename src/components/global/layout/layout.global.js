import React from 'react'
import Styles from "./layout.styles"

import Header from '../header/header.global'
import Footer from '../footer/footer.global'
const Layout = ({children}) => {
    return (
        <Styles>
            <Header/>
            <main>
                {children}
            </main>
            <Footer/>
        </Styles>
    )
}

export default Layout
