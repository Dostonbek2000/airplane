import styled from "styled-components";
import {mainColor, specialColor} from '../../constants/customStyle';

export const Container = styled.div`
    width: 100%;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
`

export const HomeWrapper = styled.div`
    width: 96%;
    max-width: 1440px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const LineOfTitle = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 70px;
    width: 100%;
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
`