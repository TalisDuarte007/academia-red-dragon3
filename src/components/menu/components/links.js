import styled from "styled-components";
import produtos from "../../../../pages/Produtos";

const StyledLinks = styled.div`

.span-links{
    font-size: 18px;
    color: red;
    margin-left: 50px;
    border: solid 2px transparent ;
    padding: 5px;
}
.span-links:hover{
    border-bottom: solid 3px red ;
    color: red;
    text-decoration: none;
}

`;

export default function Links(props){
    const links = Object.keys(props.links);
    return(
        <StyledLinks key={links}>
            {links.map((link) => {
                return(
                    <a href="{props.links[link]}" key={link}>
                        <span className="span-links">{link}</span>
                    </a>
                )
            })}                
        </StyledLinks>
    )
}