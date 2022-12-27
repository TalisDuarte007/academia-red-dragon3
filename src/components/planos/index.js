import styled from "styled-components";


// const StyledMenu = styled.div`
//     display: flex;
//     flex-direction: row;
//     justify-content: space-between;
//     align-items: baseline;
//     background-color: #3a3a39; // #414343;
//     padding: 20px 150px;
// `;

export default function Planos(props) {
    const planos = Object.keys(props.config)
    return(
        <div key={planos}>
            {planos.map((plano) => {
                const valores = props.config[plano]
                const pagamentos = Object.keys(valores)
                return(
                    <div key={pagamentos}>
                        {plano}
                        {pagamentos.map((pagamento) => {
                            return(
                                <>
                                    {valores[pagamento]}
                                </>
                            )
                        })}
                    </div>  
                )            
            })}
        </div>
    );
}