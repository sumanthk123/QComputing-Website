import React from "react"
import styled from "styled-components"

import { Title } from "../components/elements"
import { PageContainer, PageContentContainer } from "./PageContainer"
import lectureData from "./lectures.json"
import { mobileCheck } from "../util"

import { ReactComponent as RawNewTab } from "./new_tab.svg"

const Resources = () => {
    return (
        <PageContainer>
            <PageContentContainer>
                <Title>Resources</Title>
                {lectureData.beginner ? (
                    <>
                        <SectionTitle>Beginner Lectures</SectionTitle>
                        <Lectures lectures={lectureData.beginner} />
                    </>
                ) : null}
                {lectureData.advanced ? (
                    <>
                        <SectionTitle>Advanced Lectures</SectionTitle>
                        <Lectures lectures={lectureData.advanced} color="#ff1c5c" />
                    </>
                ) : null}

                <SectionTitle>Good Resources</SectionTitle>
                <Lecture href="https://cs.uwaterloo.ca/~watrous/QC-notes/" big color="#f5a925">John Watrous' Lecture Notes</Lecture>
                <Lecture href="https://homepages.cwi.nl/~rdewolf/qcnotes.pdf" big color="#f5a925">Ronald de Wolf's Lecture Notes</Lecture>
                <Lecture href="https://qiskit.org/textbook/" big color="#f5a925">The Qiskit Textbook</Lecture>
            </PageContentContainer>
        </PageContainer>
    )
}

const SectionTitle = styled.div`
    ${mobileCheck() ?
        `width: 100%`
    :
        `width: 80%`
    };
    font-weight: bold;
    font-family: Poppins;
`

const Lectures = ({ lectures, color }) => {
    return (
        <StyledLecturesContainer>
            {lectures.map(lecture => {
                return (
                    <Lecture color={color} key={lecture.file} href={"/" + lecture.file}>{lecture.name}</Lecture>
                )
            })}
        </StyledLecturesContainer>
    )
}

const StyledLecturesContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin-bottom: 2em;
`

const Lecture = ({ href, children, color, big }) => {
    return (
        <StyledLectureContainer color={color} big={big}>
            {children}
            <NewTab href={href} />
        </StyledLectureContainer>
    )
}

const StyledLectureContainer = styled.div`
    --left-border: 15px;

    display: flex;
    justify-content: space-between;
    align-items: center;
    ${mobileCheck() ?
        `width: calc(100% - 1.5em - var(--left-border))`
    :
        `width: calc(80% - 1.5em - var(--left-border))`
    };
    ${props => props.big ? `
        padding-top: 0.5em;
        padding-bottom: 0.5em;
        padding-left: 1em;
        padding-right: 0.75em;
    ` : `
        padding-top: 0.25em;
        padding-bottom: 0.25em;
        padding-left: 1em;
        padding-right: 0.75em;
    `}
    margin-top: 0.5em;

    border-left: var(--left-border) ${props => props.color ?? `#cea3e3`} solid;
    border-top: 2px solid black;
    border-bottom: 2px solid black;
    border-right: 3px solid black;
    border-radius: 5px;

    :hover {
        opacity: 0.8;
        background: #f5f5f5;
        transition: 0.2s;
    }
`

const NewTab = ({ href }) => {
    return (
        <a href={href} target="_blank" rel="noreferrer">
            <StyledNewTab />
        </a>
    )
}

const StyledNewTab = styled(RawNewTab)`
    width: 0.75em;
    height: 0.75em;
    padding-left: 1em;
`

export default Resources