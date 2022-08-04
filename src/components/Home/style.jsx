import { Button } from "@mui/material";
import styled from "styled-components";
import {mainColor, specialColor} from '../../constants/customStyle';

export const Container = styled.div`
    width: 100%;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    margin-bottom: 100px;
`

export const HomeWrapper = styled.div`
    width: 96%;
    max-width: 1440px;
`

export const LineOfTitle = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 70px;
    width: 100%;
    @media (max-width:700px){
        flex-direction: column;
    }
`

export const Title = styled.div`
    font-size: 25px;
    font-weight: 600px;
    font-style: italic;
    font-family: 'Patua One';
    color: #333333;

`
export const PlaneImg = styled.img`
    width: 100px;
`
export const SearchWrapper = styled.div`
    margin: 15px;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const SearchText = styled.div`
    width: 200px;
    @media (max-width:700px){
        display: none;
    }
`
export const InfoWrapper = styled.div`
    width: 100%;
    margin-top:50px;
`
export const FullInfoContainer = styled.div`
    width: 100%;
    height: 300px;
    border: 1px solid #e6e6e6;
    margin-top: 40px;
    border-radius: 10px;
    box-sizing: border-box;
    padding: 20px;
    font-size: 29px;
    font-weight: 500;
    display: flex;
    justify-content: center;
    align-items: center;
`
export const StartSelect = styled(Button)`
    border-radius: 10px !important;
    border: 1px solid ${specialColor} !important;
    color: ${specialColor} !important;
    font-family: 'Poppins' !important;
    text-transform: capitalize !important;
`