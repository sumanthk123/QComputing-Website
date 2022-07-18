import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import './App.css';
import Header from "./Header.js"
import Footer from "./Footer.js"
import Home from "./pages/Home"
import Resources from "./pages/Resources"

import styled from "styled-components"

const App = () => {
    return (
        <Router>
            <StyledContainer>
                <Header />
                <Routes>
                    <Route path="/" element={
                        <Home />
                    } />

                    <Route path="/resources" element={
                        <Resources />
                    } />
                </Routes>
                <Footer />
            </StyledContainer>
        </Router>
    );
}

const StyledContainer = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
`

export default App;
