import React, { useEffect, useRef, useState } from "react"
import { PageContainer, PageContentContainer } from "./PageContainer"
import styled from "styled-components"

import { Image, Title } from "../components/elements"
import Officers from "./Officers"
import { mobileCheck } from "../util"
import { ReactComponent as RawCard } from "./club_card.svg"

import ClubPhoto from "./club_photo.jpg"
import Feynman from "./feynman.jpg"

const Home = () => {
    const [offset, setOffset] = useState({ x: 0, y: 0 })
    const [dimensions, setDimensions] = useState({}) // card size
    const [size, setSize] = useState({}) // logo size
    const pageRef = useRef(null)
    const cardRef = useRef(null)
    const logoRef = useRef(null)

    useEffect(() => {
        const mouseMove = (e) => {
            setOffset({ x: e.offsetX, y: e.offsetY })
            setDimensions({ width: pageRef.current.clientWidth, height: Math.min(900, window.innerHeight - 60) })
        }
        const mouseLeave = (e) => {
            setOffset({ x: cardRef.current.offsetWidth/2, y: cardRef.current.offsetHeight/2 })
        }
        const windowResize = (e) => {
            if (!mobileCheck()) {
                let ba = logoRef.current.getBoundingClientRect()
                setSize({ width: ba.width, height: ba.height })
                setOffset({ x: pageRef.current.clientWidth/2, y: 500 })
                setDimensions({ width: pageRef.current.clientWidth, height: Math.min(900, window.innerHeight - 60) })
            }
        }

        let b = logoRef.current.getBoundingClientRect()
        setSize({ width: b.width, height: b.height })
        setDimensions({ width: pageRef.current.clientWidth, height: Math.min(900, window.innerHeight - 60) })
        setOffset({ x: pageRef.current.clientWidth/2, y: 500 })

        cardRef.current.addEventListener("mousemove", mouseMove)
        cardRef.current.addEventListener("mouseleave", mouseLeave)
        window.addEventListener("resize", windowResize)

        return () => {
            cardRef.current.removeEventListener("mousemove", mouseMove)
            cardRef.current.removeEventListener("mouseleave", mouseLeave)
            window.removeEventListener("resize", windowResize)
        }
    }, [])

    useEffect(() => {
        let b = logoRef.current.getBoundingClientRect()
        setSize({ width: b.width, height: b.height })
        setDimensions({ width: pageRef.current.clientWidth, height: Math.min(900, window.innerHeight - 60) })
    }, [pageRef.current?.clientWidth])

    return (
        <PageContainer ref={pageRef}>
            {mobileCheck() ?
                <MobileContainer ref={cardRef}>
                    <StyledLogo dimensions={dimensions} ref={logoRef} />
                </MobileContainer>
            :
                <StyledClubCardContainer dimensions={dimensions} size={size} offset={offset} ref={cardRef}>
                    <StyledLogo dimensions={dimensions} ref={logoRef} />
                </StyledClubCardContainer>
            }
            <PageContentContainer>
                <Title>Quantum Computing</Title>
                <StyledSubtitle>A unique blend of physics, math, and computer science.</StyledSubtitle>
                Quantum computing is an extremely intriguing emerging field that comes together at a crux between mathematics, computer science, and physics. The mathematics behind quantum computing is deep (and difficult!), and it describes and leverages physical phenomena on the fringes of our current understanding within grounds of engineering real quantum computers, all for the purpose of one thing: bringing forth a new age of understanding and efficiency in our computational and communication devices.

                <Quote attribution="Richard Feynman">Nature isn't classical, dammit, and if you want to make a simulation of nature, you'd better make it quantum mechanical, and by golly it's a wonderful problem, because it doesn't look so easy.</Quote>

                TJ Quantum Computing Club was made In light of the exponential growth around quantum computing in the past 30 years, initiated 40 years ago by Richard Feynman’s landmark paper, suggesting that there were difficulties with simulating quantum systems on classical computers.
                <ClubImage src={ClubPhoto} />
                Throughout the year, we start out with the basics of quantum computing: linear algebra (vectors, matrices, complex linear algebra) used for quantum computing, then basic quantum information, including multi-qubit systems and gates, before diving into quantum algorithms, such as the Deutsch-Jozsa problem, and Grover’s and Shor’s algorithms which took the world by storm in the 1990s, and QAOA and its relation to hamiltonians.
                <br /><br />
                Furthermore, we explore some protocols, such as superdense coding and quantum teleportation, as well as other communication related procedures such as quantum error correction. Finally, we open up the floor to guest lectures near the end of the year. 
                <Officers />
            </PageContentContainer>
        </PageContainer>
    )
}

const ClubImage = styled(Image)`
    width: ${mobileCheck() ? "100%" : "70%"};
`

const StyledSubtitle = styled.div`
    margin-bottom: 1.5em;

    font-family: Open Sans;
    font-size: ${props => mobileCheck() ? "23px" : "min(2.5vw, 30px)"};
    font-style: italic;
`

const Quote = ({ attribution, children, ...props }) => {
    return (
        <StyledQuoteContainer styles={props.styles}>
            <StyledQuote>
                <StyledQuoteImage src={Feynman} />
                "{children}"
            </StyledQuote>
            <StyledAttribution>
                {attribution}
            </StyledAttribution>
        </StyledQuoteContainer>
    )
}

const StyledQuoteImage = styled.img`
    width: 6em;
    height: 8em;

    float: right;
    border-radius: 2em;
    margin-left: 0.75em;
    margin-bottom: 0.5em;
    object-fit: cover;
    box-shadow: 1px 4px 6px gray;
`

const StyledQuote = styled.div`
    padding-left: 0.5em;
    margin-left: 0.5em;

    font-family: Poppins;
    font-size: ${props => mobileCheck() ? "21px" : "min(2vw, 25px)"};
    font-weight: 300;
`

const StyledAttribution = styled.div`
    margin-top: 0.5em;
    margin-left: 5em;

    font-style: italic;
    font-family: Lato;
    font-size: ${props => mobileCheck() ? "18px" : "min(1.5vw, 20px)"};
    font-weight: 300;
`

const StyledQuoteContainer = styled.div`
    margin-top: 35px;
    margin-bottom: 35px;
    border-top: 2px solid lightgray;
    border-bottom: 2px solid lightgray;
    padding-top: 1em;
    padding-bottom: 1em;
`

const MobileContainer = styled.div`
    display: flex;
    height: ${props => window.innerHeight - 68}px;
    background: #19083d;
    background: linear-gradient(180deg, rgba(25,8,61,1) 0%, rgba(103,78,167,1) 100%);
    align-items: center;
    justify-content: center;
`

const StyledLogo = styled(RawCard).attrs(props => ({
    style: {
        "width": props.dimensions.width * 0.8
    }
}))`
    display: absolute;
    max-width: 80em;
    pointer-events: none;
`

const StyledClubCardContainer = styled.div.attrs(props => ({
    style: {
        "paddingLeft": ((props.dimensions.width - props.size.width)/2 + (props.dimensions.width/2 - props.offset.x)/10),
        "paddingTop": ((props.dimensions.height - props.size.height)/2 + (props.dimensions.height/2 - props.offset.y)/10),
        "height": (window.innerWidth < 500 || window.innerHeight < 500 ? window.innerHeight : Math.min(900, window.innerHeight - 60)) - ((props.dimensions.height - props.size.height)/2 + (props.dimensions.height/2 - props.offset.y)/10)
    },
}))`
    max-height: 1000px;
    background: #19083d;
    background: linear-gradient(135deg, rgba(25,8,61,1) 0%, rgba(103,78,167,1) 100%);

    transition: 0.4s;
    &:hover {
        transition: 0.2s;
    }
`

export default Home