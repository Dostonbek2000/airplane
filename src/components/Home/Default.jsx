import React, { useRef, useState } from 'react'
import { Container, FullInfoContainer, HomeWrapper, InfoWrapper, LineOfTitle, PlaneImg, SearchText, SearchWrapper, StartSelect, Title } from './style'
import { InfoIcon, TitleContainer ,Title1} from '../Info/style';
import DropdownList from "react-widgets/DropdownList";
import AirPlaneData from '../../data/airports.json'
import Info from '../Info/Info';
import { Maps } from '../Maps/Maps';
import "react-widgets/styles.css";




const Default = () => {
  const [airInfo, setAirInfo] = useState(undefined);
  const SelectRef = useRef()

  function filterLastName(con, value) {
    let lastname = con.country.toLowerCase()
    let search  = value.toLowerCase();
    return lastname.indexOf(search) === 0
  }

  console.log(airInfo);


  function OnSelected(info) {
    setAirInfo(info)
  }

  function SelectStart() {
    SelectRef.current.focus()
  }



  return (
    <Container>
      <HomeWrapper>
          <LineOfTitle>
            <TitleContainer>
                <InfoIcon />
                <Title1>AirCraft info on this route</Title1>
            </TitleContainer>
              <SearchWrapper>
                <SearchText>Search Trip :</SearchText>
                <DropdownList
                  ref={SelectRef}
                  className='dropinput'
                  data={AirPlaneData}
                  defaultValue={AirPlaneData[0].country}
                  textField={'state'}
                  onChange={(e)=>OnSelected(e)}
                  onSearch={()=>console.log('searching...')}
                  filter={filterLastName}
                  renderListItem={({ item }) => (
                    <span>
                      <strong>{item.country.slice(0,10)}</strong>
                      {" " + item.state}
                    </span>
                  )}
                />
              </SearchWrapper>
          </LineOfTitle>
          <InfoWrapper>
              {airInfo !== undefined ? <Info data={airInfo} /> : 
                <FullInfoContainer>
                      <StartSelect onClick={SelectStart}>Select Airplane</StartSelect>
                </FullInfoContainer>
              }
              
          </InfoWrapper>
          <Maps data={airInfo} />
      </HomeWrapper>
    </Container>
  )
}

export default Default