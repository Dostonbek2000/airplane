import React from 'react'
import { Container, HomeWrapper, LineOfTitle, PlaneImg, SearchText, SearchWrapper, Title } from './style'
import DropdownList from "react-widgets/DropdownList";
import "react-widgets/styles.css";
import PlaneRasm from '../../assets/images/plane2.png';
import AirPlaneData from '../../data/airports.json'

const Default = () => {
  console.log('====================================');
  console.log(AirPlaneData);
  console.log('====================================');

  function filterLastName(con, value) {
    let lastname = con.country.toLowerCase()
    let search  = value.toLowerCase();
    return lastname.indexOf(search) === 0
  }
  return (
    <Container>
      <HomeWrapper>
          <LineOfTitle>
              <Title>Choose your Trip</Title>
              <SearchWrapper>
                <SearchText>Search Trip :</SearchText>
                <DropdownList
                  className='dropinput'
                  data={AirPlaneData}
                  defaultValue={AirPlaneData[0].country}
                  textField={'state'}
                  onChange={(e)=>console.log(e)}
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
      </HomeWrapper>
    </Container>
  )
}

export default Default