import styled from "styled-components";
import {mainColor, specialColor} from '../../constants/customStyle';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';

export const Container = styled.div`
    width: 100%;
    box-sizing: border-box;
`
export const TitleContainer = styled.div`
    display: flex;
    align-items: center;
    
`

export const InfoIcon = styled(TravelExploreIcon)`
    font-size: 35px !important;
    color: ${specialColor};
`
export const Title1 = styled.div`
    font-size: 25px;
    font-weight: 500;
    margin-left: 20px;
    @media (max-width:500px){
        font-size: 20px;
    }
`
export const FullInfoContainer = styled.div`
    width: 100%;
    height: 300px;
    border: 1px solid #e6e6e6;
    margin-top: 40px;
    border-radius: 10px;
    box-sizing: border-box;
    padding: 20px;
    @media (max-width:724px){
        height: auto;
    }
`

export const InnerTitle = styled.div`
    display: flex;
    width: 100%;
    box-sizing: border-box;
    justify-content: space-between;
    border-bottom: 1px solid #e6e6e6;
    padding-bottom: 10px;
`

export const TitleNext = styled.div`
    font-size: 25px;
    font-weight: 400 !important;
    font-family: 'Chivo';
    color: #242424;
    @media (max-width:724px){
        font-size: 20px;
    }

`
export const Badge = styled.div`
    width: 200px;
    height: 30px;
    border-radius: 15px;
    text-align: center;
    font-size: 500;
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${specialColor};
    color: #ffffff;
    @media (max-width:650px){
        display: none;
    }
`

export const BottomContainer = styled.div`
    display: flex;
    width: 100%;
    margin-top: 15px;
    height: 200px;
    justify-content: space-between;
    align-items: center;
    @media (max-width:724px){
        flex-direction: column;
        height: auto;
    }

`

export const PlaneImg = styled.img`
    width: 300px;
    
`

export const InnerRightWrapper = styled.div`
    width: 70%;
    display: flex;
    flex-wrap: wrap;
    @media (max-width:724px){
        width: 100%;
    }
`

export const List = styled.li`
    font-size: 19px;
    padding: 4px;
    margin-left: 10px;
`
export const StrongWord = styled.span`
    font-weight: 600;
    color: ${specialColor};
`