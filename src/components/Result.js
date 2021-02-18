import React from 'react';
import styled from '@emotion/styled'

const Message = styled.p`
    background-color: rgb(127,224,237);
    margin-top: 2rem;
    padding: 1rem;
    text-align: center;
`
const CostText = styled.p`
    color: #00838f;
    padding: 1rem;
   text-transform: uppercase;
    font-weight: bold;
    margin:0;
`
const CostContainer = styled.div`
    background-color: rgb(127,224,237);
    border: 1px solid #26c6da;
    padding: .5rem;
    text-align:center;
    margin-top:1rem;
    position: relative;
`

const Result = ({cost}) => {


    return (
        (cost===0) ? <Message>Elegi la marca, año y tipo de seguro</Message> 
        : (
            <CostContainer>
                <CostText> El total es: <strong>${cost}</strong></CostText>
            </CostContainer>
            )
    );
};

export default Result;