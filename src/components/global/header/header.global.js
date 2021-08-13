import React from 'react'
import Styles from "./header.styles"
import {Link} from "react-router-dom"
import resume from "../../../assets/pdf/resume.pdf"
import logoWhite from "../../../assets/images/logo-white.png"

import SearchBox  from '../../atom/search-box/search-box.atom'
import Button from "../../atom/button/button.atom"

const Header = () => {
    return (
        <Styles>
            <div className="container">
                <Link to="/" className="link-logo">
                    <div className="logo-cont">
                        <img src={logoWhite} alt="breaking bad logo"/>
                    </div>
                </Link>
                <div id="search-box">
                    <SearchBox placeholder="Find your Character..."/>
                </div>
                <div id="resume-btn">
                    <Button href={resume} target="_blank" download={true}>
                        Resume
                    </Button>
                </div>
            </div>
        </Styles>
    )
}

export default Header
