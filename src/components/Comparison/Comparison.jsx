import React, { useState } from "react";
import { useRef } from "react";
import {
  ArrowIcon,
  BigDetailContainer,
  BigDetailContainer2,
  ComparisonText,
  Container,
  DisContainer,
  DistanceResult,
  DistanceTitle,
  FormContainer,
  HomeWrapper,
  InputWrapper,
  NameAirPort,
  SearchText,
  SearchWrapper,
  SearchWrapper1,
  TimeResult,
  WrapperOne,
  WrapperThree,
  WrapperTwo,
} from "./style";
import AirPlaneData from "../../data/airports.json";
import DropdownList from "react-widgets/DropdownList";
import Detail from "./Detail/Detail";
import { CircularProgress } from "@mui/material";

const Comparison = () => {
  const [airInfo1, setAirInfo1] = useState(undefined);
  const [airInfo2, setAirInfo2] = useState(undefined);
  const [distance, setdistance] = useState(undefined);
  const [hours, sethours] = useState(undefined);
  const SelectRef = useRef();

  function filterLastName(con, value) {
    let lastname = con.country.toLowerCase();
    let search = value.toLowerCase();
    return lastname.indexOf(search) === 0;
  }

  console.log(airInfo1);
  console.log(airInfo2);

  function getDistanceFromLatLonInKm(lat1,lon1,lat2,lon2) {
    console.log(lat1,lon1,lat2,lon2);
    var R = 6371; // Radius of the earth in km
    var dLat = deg2rad(lat2*1-lat1*1);  // deg2rad below
    var dLon = deg2rad(lon2*1-lon1*1); 
    var a = 
      Math.sin(dLat/2) * Math.sin(dLat/2) +
      Math.cos(deg2rad(lat1*1)) * Math.cos(deg2rad(lat2*1)) * 
      Math.sin(dLon/2) * Math.sin(dLon/2)
      ; 
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
    var d = R * c; // Distance in km
    setdistance(Math.floor(d))
    sethours(Math.floor(d/900))
  }
  
  function deg2rad(deg) {
    return deg * (Math.PI/180)
  }

  
  function OnSelectedFrom(info) {
    setAirInfo1(info);
    OnDisUpdate()

  }
  
  
  function OnSelectedTo(info) {
    setAirInfo2(info);
    OnDisUpdate()
    
  }
  
  
  function OnDisUpdate(params) {
    getDistanceFromLatLonInKm(airInfo1?.lat*1,airInfo1?.lon*1,airInfo2?.lat*1,airInfo2?.lon*1)
    console.log(distance);
  }


  return (
    <Container>
      <HomeWrapper>
        <FormContainer>
          <ComparisonText>Comparison between airports</ComparisonText>
          <InputWrapper>
            <SearchWrapper>
              <SearchText>From:</SearchText>
              <DropdownList
                ref={SelectRef}
                className="dropinput"
                data={AirPlaneData}
                defaultValue={AirPlaneData[0].country}
                textField={"state"}
                onChange={(e) => OnSelectedFrom(e)}
                onSearch={() => console.log("searching...")}
                filter={filterLastName}
                renderListItem={({ item }) => (
                  <span>
                    <strong>{item.country.slice(0, 10)}</strong>
                    {" " + item.state}
                  </span>
                )}
              />
            </SearchWrapper>
            <SearchWrapper1>
              <SearchText>To:</SearchText>
              <DropdownList
                ref={SelectRef}
                className="dropinput"
                data={AirPlaneData}
                defaultValue={AirPlaneData[0].country}
                textField={"state"}
                onChange={(e) => OnSelectedTo(e)}
                onSearch={() => console.log("searching...")}
                filter={filterLastName}
                renderListItem={({ item }) => (
                  <span>
                    <strong>{item.country.slice(0, 10)}</strong>
                    {" " + item.state}
                  </span>
                )}
              />
            </SearchWrapper1>
          </InputWrapper>
        </FormContainer>
        <BigDetailContainer>
          <WrapperOne>
              <Detail data={airInfo1} title={'From'} />
          </WrapperOne>
          <WrapperTwo>
              <Detail data={airInfo2} title={'To'} />
          </WrapperTwo>
        </BigDetailContainer>
        <BigDetailContainer2>
          <WrapperThree>
              <DistanceTitle>
                  The distance between these airports
              </DistanceTitle>
              <DisContainer>
                  <NameAirPort>
                     From: {airInfo1 !==undefined ? airInfo1?.name : 'Airport'}
                  </NameAirPort>
                  <ArrowIcon />
                  <NameAirPort>
                    To: {airInfo2 !==undefined ? airInfo2?.name : 'Airport'}
                  </NameAirPort>
              </DisContainer>
              <DistanceResult>
                Distance: {distance === undefined ? 'Choose your State': isNaN(distance) ? 'Error with Lat and Long Please choose another state' : `${distance}km` }
              </DistanceResult>
              <TimeResult>
                Duration: {hours === undefined ? <CircularProgress size={10} color="success" /> : isNaN(hours) ? 'Error with Lat and Long Please choose another state' : `${hours}hours`}
              </TimeResult>
          </WrapperThree>
        </BigDetailContainer2>
      </HomeWrapper>
    </Container>
  );
};

export default Comparison;
