import styled from "styled-components";
import {mainColor, specialColor} from '../../constants/customStyle';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

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
    height: auto;
    min-height: 600px;
    /* border: 1px solid #d4d4d4; */
    margin-top: 20px;
    box-shadow: 0px 0px 19px #f0f0f0;
    border-radius: 9px;
    padding: 20px;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    @media (max-width:1111px){
        height:auto;
    }
`
export const BigDetailContainer2 = styled.div`
    width: 100%;
    height: auto;
    min-height: 300px;
    /* border: 1px solid #d4d4d4; */
    margin-top: 20px;
    box-shadow: 0px 0px 19px #f0f0f0;
    border-radius: 9px;
    padding: 20px;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    @media (max-width:1111px){
        height:auto;
    }
`

export const WrapperOne = styled.div`
    width: 100%;
    height: 47%;
    /* border: 1px solid #d4d4d4; */
    border-radius:5px;
    @media (max-width:1111px){
        height:auto;
        padding-top:20px;
        padding-bottom:20px;
    }
    
`
export const WrapperTwo = styled.div`
    width: 100%;
    height: 47%;
    /* border: 1px solid #d4d4d4; */
    border-radius:5px;
    @media (max-width:1111px){
        height:auto;
        padding-top:20px;
        padding-bottom:20px;
        margin-top: 20px;
    }
    
`
export const WrapperThree = styled.div`
    width: 100%;
    height: 47%;
    /* border: 1px solid #d4d4d4; */
    border-radius:5px;
    padding: 15px;
    box-sizing: border-box;
    @media (max-width:1111px){
        height:auto;
        padding-top:20px;
        padding-bottom:20px;
    }
    
`

export const DistanceTitle = styled.div`
    width: 100%;
    font-size: 23px;
    font-weight: 500;
    margin-bottom: 15px;
    border-left:7px solid orange ;
    height: 28px;
    display: flex;
    align-items: center;
    padding-left: 10px;
    /* background-color: #ebfaff; */
    border-radius: 3px;
    @media (max-width:500px){
        font-size: 18px;
    }
`

export const DisContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;
    background-color: aqua;
    padding: 10px;
    border-radius: 5px;
    color: #2f2f2f;
`

export const NameAirPort = styled.div`
    font-size: 20px;
    font-weight: 500px;

`

export const ArrowIcon = styled(ArrowRightAltIcon)`
    color: #4c4c4c !important;
`

export const DistanceResult = styled.li`
    margin-top: 15px;
    
`
export const TimeResult = styled.li`
    

`