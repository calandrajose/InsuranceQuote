import React from 'react';
import styled from '@emotion/styled'
import { capitalize } from '../utility';
import PropTypes from 'prop-types'

const ResumeContainer = styled.div`
padding:1rem;
text-align: center;
background-color:#00838F;
color:#fff;
margin-top:1rem;
`


const Resume = ({data}) => {
    
    const {brand, year, contractType} = data
    if(brand.trim()===''||year.trim()===''||contractType.trim()==='') return null
    
    return (
        <ResumeContainer>
            <h2>Resumen de cotizacion</h2>
            <ul>
                <li>Marca: {capitalize(brand)}</li>
                <li>Año: {year}</li>
                <li>Plan: {capitalize(contractType)}</li>
            </ul>
        </ResumeContainer>
    );
};

Resume.propTypes = {
    data: PropTypes.object.isRequired,
} 


export default Resume;