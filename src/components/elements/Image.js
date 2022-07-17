import styled from "styled-components"
import { mobileCheck } from "../../util"

const StyledImage = styled.img`
    margin-top: ${mobileCheck() ? "1em" : "2em"};
    margin-bottom: ${mobileCheck() ? "1em" : "2em"};
    width: ${mobileCheck() ? "80%" : "70%"};
    height: 100%;
    border-radius: 1em;
    object-fit: cover;
    box-shadow: 2px 5px 10px gray;
`

export default StyledImage