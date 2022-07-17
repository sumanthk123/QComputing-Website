import styled from "styled-components"
import { mobileCheck } from "../util"

const PageContentContainer = styled.div`
    padding-top: 2em;
    padding-bottom: 2em;

    ${props => mobileCheck() ? `
        margin-left: 7%;
        margin-right: 7%;
    ` : `
        margin-left: auto;
        margin-right: auto;
        max-width: min(50em, 70vw);
    `}

    display: flex;
    flex-direction: column;
    align-items: center;

    font-family: Open Sans;
    font-weight: 300;
    font-size: ${props => mobileCheck() ? "20px" : "min(1.75vw, 24px)"};
`

const PageContainer = styled.div`
    background: white;
`

export { PageContainer, PageContentContainer }