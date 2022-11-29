import styled from "styled-components";
import { CSSReset } from "../src/components/CSSReset"
import Header from "../src/components/Header"
import SearchBar from "../src/components/Search-Bar"
import exercicios from "../exercicios.json";
import Timeline from "../src/components/Timeline";

const StyledPage = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const StyledMainPage = styled.div`
    height: 100vh;
`;


function HomePage() {
    return(
        <>
            <CSSReset/>
            <StyledPage>
                <StyledMainPage>
                    <Header/>
                    <SearchBar />
                    <Timeline exercicios={exercicios}/>
                </StyledMainPage>
                
            </StyledPage>
        </>  
    )
}

export default HomePage