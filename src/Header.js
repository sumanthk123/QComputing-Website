import React from 'react';
import styled from "styled-components";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <StyledHeader>
            TJHSST Quantum Computing Club
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/officers">Officers</Link>
            <Link to="/resources">Resources</Link>
        </StyledHeader>
    )
}

const StyledHeader = styled.div`
    font-size: 30px;
    font-weight: bold;
    text-align: center;
    margin-top: 40px;
    margin-left: 80px;
    margin-right: 80px;
    padding-top: 15px;
    padding-bottom: 15px;
    background: lightskyblue;
`

export default Header;