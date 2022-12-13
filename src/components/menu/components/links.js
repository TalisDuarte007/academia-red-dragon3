import styled from "styled-components";
import produtos from "../../../../pages/Produtos";

const StyledLinks = styled.div`
.span-links{
    color: red;
    margin-left: 50px;
    padding: 5px;
}
.span-links:hover{
    border-bottom: solid 2px red ;
    font-weight: bolder;
    font-size: 105%;
}

`;

export default function Links(props){
    const links = Object.keys(props.links);
    return(
        <StyledLinks key={links}>
            {links.map((link) => {
                return(
                    // <button onClick={produtos()}>
                    //     <span className="span-links">{link}</span>
                    // </button>
                    <a href="{props.links[link]}" key={link}>
                        <span className="span-links">{link}</span>
                    </a>
                )
            })}                
        </StyledLinks>
    )
}