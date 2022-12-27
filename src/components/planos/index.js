import styled from "styled-components";


const StyledPlanos = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    justify-content: center;
    margin-top: 50px;
    background-color: #3a3a39; // #414343;
    padding: 20px 150px;
    
    p{
        font-size: 40px;
        color: red;
        font-weight: 500;
    }
    div{
        display: flex;
        justify-content: space-between;
        margin-top: 50px;
        gap: 40px;
        align-items: center;
    }
    .cardPlanos{
        flex-direction: column;
        background-color: #262228;
        width: 250px;
        height: 500px;
        border: 0.8px solid red;
        border-radius: 10px;
        align-items: center;
        gap: 20px;
        padding: 20px;

        div{
            display: flex;
            flex-direction: column;
            align-items: center;
        }
        
        span{
            color: red;
            font-size: 16px;
        }
        .preco{
            font-size: 20px;
        }
    }
    .cardPlanos:last-child{
        width: 280px;
        height: 530px;
        border: 3px solid red;

        span{
            font-size: 18px;
        }

        .preco{
            font-size: 24px;
            font-weight: bold;
        }
    }
`;



export default function Planos(props) {
    const planos = Object.keys(props.config)
    return(
         <StyledPlanos key={planos}>
             <p>Planos de Musculação</p>
             <div>
                {planos.map((plano) => {
                    const propsPlanos = props.config[plano]
                    const propsPlanosKey = props.config[plano].nome + props.config[plano].forma
                    return(
                        <div className="cardPlanos" key={propsPlanosKey}>
                            <div>
                                <span>{propsPlanos.nome}</span>
                                <span>{propsPlanos.forma}</span>
                            </div>
                            <div>
                                <span className="preco">{propsPlanos.valor}</span>
                            </div>
                                
                        </div>  
                    )            
                })}
            </div>
         </StyledPlanos>
    );
}