import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import './App.css';
import Header from "./Header.js"

import Home from "./pages/Home"
import About from "./pages/About"
import Members from "./pages/Members"
import Resources from "./pages/Resources"

const App = () => {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={
                    <Home />
                } />

                <Route path="/about" element={
                    <About />
                } />

                <Route path="/officers" element={
                    <Members />
                } />

                <Route path="/resources" element={
                    <Resources />
                } />
            </Routes>
        </Router>
    );
}

export default App;
