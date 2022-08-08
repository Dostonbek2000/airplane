import React, { useRef, useState } from 'react'
import { Container, FullInfoContainer, HomeWrapper, InfoWrapper, LineOfTitle, PlaneImg, SearchText, SearchWrapper, StartSelect, Title } from './style'
import { InfoIcon, TitleContainer ,Title1} from '../Info/style';
import DropdownList from "react-widgets/DropdownList";
import AirPlaneData from '../../data/airports.json'
import Info from '../Info/Info';
import { Maps } from '../Maps/Maps';
import "react-widgets/styles.css";
import { useDispatch,useSelector } from 'react-redux';




const Default = () => {
  const [airInfo, setAirInfo] = useState(undefined);
  const SelectRef = useRef();
  const dispatch = useDispatch()
  const HomeData = useSelector(state=>state.HomeReducer)


  function filterLastName(con, value) {
    let lastname = con.country.toLowerCase()
    let search  = value.toLowerCase();
    return lastname.indexOf(search) === 0
  }


  function OnSelected(info) {
    setAirInfo(info)
    dispatch({type:'HOME_INFO',payload:info})
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
              {HomeData !== undefined ? <Info data={HomeData} /> : 
                <FullInfoContainer>
                      <StartSelect onClick={SelectStart}>Select Airplane</StartSelect>
                </FullInfoContainer>
              }
              
          </InfoWrapper>
          <Maps data={HomeData} />
      </HomeWrapper>
    </Container>
  )
}

export default Default