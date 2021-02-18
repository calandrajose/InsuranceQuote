import React, {useState} from 'react';
import styled from '@emotion/styled'
import {showError, getYearDif, getBrandCost, getContractTypeCost} from '../utility'

const Field = styled.div`
    display: flex;
    margin-bottom: 1rem;
    align-items:center;
`
const Label = styled.label`
    flex: 0 0 100px;
`
const Select = styled.select`
    display:block;
    width:100%;
    padding:1rem;
    border: 1px solid #e1e1e1;
    border-radius:2px;
    background-color: #f4f4f4;
    -webkit-appearance:none;
`
const InputRadio = styled.input`
    margin:0 1rem;
`
const Button = styled.button`
    background-color: #00838f;
    font-size:18px;
    font-weight: bold;
    width:100%;
    color:#fff;
    text-transform: uppercase;
    padding:1rem;
    border: none;
    border-radius:3px;
    transition: background-color .3s ease;
    margin-top: 2rem;
    &:hover{
        background-color: #26cda2;
        cursor:pointer;
    }
`
const Error = styled.div`
    background-color:red;
    color:white;
    padding:1rem;
    width: 100%auto;
    text-align: center;
    margin-bottom:2rem;

`
const Form = ({setDataResume}) => {
    const [data, setData] = useState({
        brand:'',
        year:'',
        contractType:''
    })
    const [error, setError] = useState(false)

    const {brand, year, contractType} = data;

    const getData = (e)=>{
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }

    const onSubmitFormHandler=(e)=>{
        e.preventDefault()
        if(brand.trim()==='' || year.trim()==='' || contractType.trim()===''){
            showError(setError)
            return;
        }
        const yearDif = getYearDif(year)
        let cost = 2000 //initial cost 2000
        cost -= (yearDif * 3) * cost / 100 // 3% cheaper per year
        cost += cost * getBrandCost(brand) // brand origin changes cost
        cost = parseFloat(cost * getContractTypeCost(contractType) + cost).toFixed(2)
        setDataResume({data:{brand, year, contractType}, cost})
    }

    return (
        <form
            onSubmit={onSubmitFormHandler}
        >
            {error ? <Error>Todos los cambios son obligatorios</Error> : null}
            <Field>
                <Label>Marca</Label>
                <Select
                    brand={brand}
                    onChange={getData}
                    name='brand'
                    >
                    <option value="">-- Seleccione --</option>
                    <option value="american">-- Americano --</option>
                    <option value="european">-- Europeo --</option>
                    <option value="asian">-- Asiatico --</option>
                </Select>
            </Field>
            <Field>
                <Label>Año</Label>
                <Select
                    year={year}
                    onChange={getData}
                    name='year'
                >
                    <option value="">-- Seleccione --</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                    <option value="2018">2018</option>
                    <option value="2017">2017</option>
                    <option value="2016">2016</option>
                    <option value="2015">2015</option>
                    <option value="2014">2014</option>
                    <option value="2013">2013</option>
                    <option value="2012">2012</option>
                </Select>
            </Field>
            <Field>
                <Label>Plan</Label>
                <InputRadio
                    type="radio"
                    name="contractType"
                    value="basic"
                    checked={contractType==='basic'}
                    onChange={getData}/>Basic
                <InputRadio
                    type="radio"
                    name="contractType"
                    value="full"
                    checked={contractType==='full'}
                    onChange={getData}/>Full
            </Field>
            <Button type="submit">Cotizar</Button>
        </form>
    );
};

export default Form;