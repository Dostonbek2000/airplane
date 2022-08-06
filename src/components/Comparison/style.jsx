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


export const FormContainer = styled.div`
    width: 100%;
    height: auto;
    padding-top:15px;
    padding-bottom:15px;
    display: flex;
    margin-top: 50px;
    justify-content: space-between;
    align-items: center;
    @media (max-width:1057px){
        flex-direction:column;   
    }
`
export const InputWrapper = styled.div`
    display: flex;
    @media (max-width:1057px){
        margin-top:30px ;
    }
    @media (max-width:700px){
        flex-direction:column;   
    }
`

export const SearchWrapper = styled.div`
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 300px;
`
export const SearchWrapper1 = styled.div`
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 300px;
    margin-left: 40px;
    @media (max-width:700px){
        margin-left:0px;
        margin-top:20px;

    }
`

export const SearchText = styled.div`
    width: 200px;
    font-weight: 500;
    
`
export const ComparisonText = styled.div`
    width: auto;
    font-size: 22px;
    font-weight: 500;
    @media (max-width:700px){
        font-size:20px;
    }
    
`


export const BigDetailContainer = styled.div`
    width: 100%;
    height: 600px;
    border: 1px solid #d4d4d4;
    margin-top: 20px;
    /* box-shadow: 0px 0px 3px #909090; */
    border-radius: 9px;
    padding: 20px;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
`

export const WrapperOne = styled.div`
    width: 100%;
    height: 47%;
    border: 1px solid #d4d4d4;
    border-radius:5px;
    
`
export const WrapperTwo = styled.div`
    width: 100%;
    height: 47%;
    border: 1px solid #d4d4d4;
    border-radius:5px;
    
`