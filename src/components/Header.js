import styled from "styled-components";
import config from "../../config.json"


const StyledBanner =  styled.div`
    background: url(${config.links.bg}) center;
    background-size: cover;
    min-height: 230px;
    height: 65vh;
`;

export default function Header(){
    return(
        <StyledBanner />
    );
}