import React, { useState } from 'react';
import styled from "styled-components";
import { Row } from "./components/containers"

import { ReactComponent as RawX } from "./x.svg"
import { ReactComponent as RawHamburger } from "./hamburger.svg"

const StyledLink = styled.a`
    text-decoration: none !important;
    font-size: 1.5em;
    font-weight: normal;
    font-family: Nunito;
    color: #dbc5ed;
    text-shadow: 0 0 2px #ffffff;
`

const Link = ({ to, ...props }) => {
    return (
        <div {...props} style={{ listStyleType: "none", ...props.styles }}>
            <StyledLink href={to}>{props.children}</StyledLink>
        </div>
    )
}

const Header = () => {
    return (
        <StyledHeader>
            <StyledTitle>
                TJ QC Club
            </StyledTitle>
            {window.innerHeight < 500 || window.innerWidth < 500 ?
                <Dropdown />
            :
                <Row>
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/officers">Officers</Link>
                    <Link to="/resources">Resources</Link>
                </Row>
            }
        </StyledHeader>
    )
}

const Dropdown = () => {
    const [open, setOpen] = useState(false)

    return (
        <StyledDropdownContainer>
            {open ? (
                <StyledX onClick={() => {
                    setOpen(!open)
                }} />
            ) : (
                <StyledHamburger onClick={() => {
                    setOpen(!open)
                }} />
            )}
            <StyledDropdownContent open={open}>
                <Link styles={{ display: "flex", "justify-content": "right" }} to="/">Home</Link>
                <Link styles={{ display: "flex", "justify-content": "right" }} to="/about">About</Link>
                <Link styles={{ display: "flex", "justify-content": "right" }} to="/officers">Officers</Link>
                <Link styles={{ display: "flex", "justify-content": "right" }} to="/resources">Resources</Link>
            </StyledDropdownContent>
        </StyledDropdownContainer>
    )
}

const StyledDropdownContent = styled.div`
    display: ${props => props.open ? "flex" : "none"};
    flex-direction: column;
    justify-content: right;
    position: absolute;
    border-radius: 10px;
    padding: 0.5em 1em 0.5em 1em;
    top: 3.5em;
    right: 0em;
    background: #321b63;
`

const StyledDropdownContainer = styled.div`
    display: flex;
    align-items: center;
    margin-left: auto;
    margin-right: 1.75em;
`

const StyledX = styled(RawX)`
    width: 1.75em;
    height: 1.75em;
    fill: white;
`

const StyledHamburger = styled(RawHamburger)`
    fill: white;
    width: 2em;
    height: 2em;
`

const StyledTitle = styled.div`
    color: white;
    white-space: nowrap;
    font-size: 2em;
    margin-left: 1em;
    margin-right: 1em;
    text-shadow: 0 0 2px #ffffff;
`

const StyledHeader = styled.div`
    display: flex;
    align-items: center;

    text-decoration: none !important;

    font-weight: bold;
    text-align: center;
    padding-top: 15px;
    padding-bottom: 15px;
    background: #19083d;
    color: white;
`

export default Header;