import { NavLink } from "react-router-dom";
import styled from "styled-components";
import {mainColor, specialColor} from '../../constants/customStyle';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';

export const Container = styled.div`
    width: 100%;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    height: 80px;
    box-shadow: 0px 0px 3px #909090;
`

export const NavbarWrapper = styled.div`
    width: 96%;
    max-width: 1440px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const LogoWrapper = styled.div`
    width: auto;
    display: flex;
    align-items: center;

`

export const LogoImg = styled.img`
    width: 70px;
    @media (max-width:800px) {
        width: 50px;

    }
`

export const LogoText = styled.div`
    font-size: 30px;
    font-weight: 500;
    margin-left: 15px;
    font-family: 'Russo One';
    font-style:italic;
    color: ${specialColor};
    @media (max-width:800px) {
        font-size: 25px;
    }

`


export const LinkWrapper = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: auto;
`
export const Span = styled.span``

export const Links = styled(NavLink)`
    background: ${specialColor};
    color: white;
    width: 200px;
    height: 35px;
    border-radius: 5px;
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 5px 15px;
    box-shadow: 0px 0px 10px 1px #91caff;
    @media (max-width:800px) {
        width: 45px;
        span{
            display: none;
        }
    }
    &:hover{
        cursor: pointer;
    }
    
`
export const Links1 = styled(NavLink)`
    border: 1px solid ${specialColor};
    color: ${specialColor};
    width: 200px;
    height: 35px;
    border-radius: 5px;
    box-shadow: 0px 0px 10px 1px #91caff;
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 5px 15px;
    @media (max-width:800px) {
        width: 45px;
        span{
            display: none;
        }
    }
    &:hover{
        cursor: pointer;
    }
    
`

export const HomeIcon = styled(HomeRoundedIcon)`
    color: ${specialColor} !important;
    font-size: 20px !important;
    margin-right:6px;
    @media (max-width:800px) {
        margin-right:0px;
    }
`
export const CompareIcon = styled(CompareArrowsIcon)`
    color: white !important;
    font-size: 20px !important;
    margin-right:6px;
    @media (max-width:800px) {
        margin-right:0px;
    }
`