import React from 'react'
import { Badge, BottomContainer, Container, FullInfoContainer, InfoIcon, InnerRightWrapper, InnerTitle, List, PlaneImg, StrongWord, Title, TitleContainer, TitleNext } from './style'
import PlaneRasm from '../../assets/images/plane3.png'



const Info = ({data,setRender}) => {
  const {
    code,
    city,
    country,
    state,
    name,
    tz,
    runway_length,
    icao,
    woeid
  } = data;

  console.log(data);
  return (
    <Container>
        
        <FullInfoContainer>
            <InnerTitle>
                <TitleNext>
                    {icao === undefined ? 'Info' : icao}{woeid}/ {tz}
                </TitleNext>
                <Badge>Aircraft Info</Badge>
            </InnerTitle>
            <BottomContainer>
                <PlaneImg src={PlaneRasm} />
                <InnerRightWrapper>
                    <List>Range : <StrongWord>{runway_length} km</StrongWord> </List>
                    <List>Icao : <StrongWord>{icao}</StrongWord> </List>
                    <List>Airport Name : <StrongWord>{name}</StrongWord> </List>
                    <List>Woeid : <StrongWord>{woeid}</StrongWord> </List>
                    <List>State : <StrongWord>{state}</StrongWord> </List>
                    <List>City : <StrongWord>{city}</StrongWord> </List>
                </InnerRightWrapper>
            </BottomContainer>
        </FullInfoContainer>
    </Container>
  )
}

export default Info