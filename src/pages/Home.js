import React, { useEffect, useRef, useState } from "react"
import { PageContainer, PageContentContainer } from "./PageContainer"
import styled from "styled-components"

import { mobileCheck } from "../util"
import { ReactComponent as RawCard } from "./club_card.svg"

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
            setDimensions({ width: pageRef.current.clientWidth, height: 1000 })
        }
        const mouseLeave = (e) => {
            setOffset({ x: cardRef.current.offsetWidth/2, y: cardRef.current.offsetHeight/2 })
        }
        const windowResize = (e) => {
            let ba = logoRef.current.getBoundingClientRect()
            setSize({ width: ba.width, height: ba.height })
            setOffset({ x: pageRef.current.clientWidth/2, y: 500 })
            setDimensions({ width: pageRef.current.clientWidth, height: 1000 })
        }

        let b = logoRef.current.getBoundingClientRect()
        setSize({ width: b.width, height: b.height })
        setDimensions({ width: pageRef.current.clientWidth, height: 1000 })
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
        setDimensions({ width: pageRef.current.clientWidth, height: 1000 })
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
                The home page! 
            </PageContentContainer>
        </PageContainer>
    )
}

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
        "height": (window.innerWidth < 500 || window.innerHeight < 500 ? window.innerHeight : 1000) - ((props.dimensions.height - props.size.height)/2 + (props.dimensions.height/2 - props.offset.y)/10)
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