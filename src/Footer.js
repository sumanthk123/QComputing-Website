import React from "react"
import styled from "styled-components"

import { mobileCheck } from "./util"
import { Image } from "./components/elements"

import Facebook from "./fb_logo.png"

const Footer = () => {
    return (
        <StyledFooter>
            TJQuantumComputing@gmail.com
            <StyledImage src={Facebook} onClick={() => {
                window.open("https://www.facebook.com/groups/402090081220809")
            }} />
        </StyledFooter>
    )
}

const StyledImage = styled(Image)`
    height: 1.35em;
    width: 1.35em;
    margin:  1em 0 1em 1em;
    float: right;
    cursor: pointer;
    box-shadow: none;

    :hover {
        opacity: 0.7;
    }
`

const StyledFooter = styled.div`
    display: flex;
    justify-content: ${mobileCheck() ? "space-between" : "center"};
    align-items: center;
    width: calc(100% - 2em);
    height: 3em;
    bottom: 0;
    padding: 0 1em;
    margin-top: auto;

    background: #5d4796;
    color: white;

    font-family: Ubuntu;
    font-size: 18px;
    font-weight: 300;
`

export default Footer