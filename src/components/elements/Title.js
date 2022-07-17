import styled from "styled-components"
import { mobileCheck } from "../../util"

const StyledTitle = styled.div`
    margin-bottom: 10px;
    font-family: Poppins;
    font-size: ${props => mobileCheck() ? "45px" : "min(4vw, 60px)"};
    font-weight: bold;
    text-align: center;
`

export default StyledTitle