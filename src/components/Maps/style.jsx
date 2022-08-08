import styled from "styled-components";
import { bgColor } from "../../constants/customStyle";

export const Container = styled.div`
    width: 100%;
    box-sizing: border-box;
    display: flex;
    height: 500px;
    justify-content: center;
    margin-top: 30px;
    border-radius: 10px;
    overflow: hidden;
    background: ${bgColor};
`

export const MapStyle = styled.iframe`
    width: 100%;
    height: 100%    ;
`