import React, { useState } from "react";
import { useRef } from "react";
import {
  BigDetailContainer,
  ComparisonText,
  Container,
  FormContainer,
  HomeWrapper,
  InputWrapper,
  SearchText,
  SearchWrapper,
  SearchWrapper1,
  WrapperOne,
  WrapperTwo,
} from "./style";
import AirPlaneData from "../../data/airports.json";
import DropdownList from "react-widgets/DropdownList";
import Detail from "./Detail/Detail";

const Comparison = () => {
  const [airInfo1, setAirInfo1] = useState(undefined);
  const [airInfo2, setAirInfo2] = useState(undefined);
  const SelectRef = useRef();

  function filterLastName(con, value) {
    let lastname = con.country.toLowerCase();
    let search = value.toLowerCase();
    return lastname.indexOf(search) === 0;
  }

  console.log(airInfo1);
  console.log(airInfo2);

  function OnSelectedFrom(info) {
    setAirInfo1(info);
  }
  function OnSelectedTo(info) {
    setAirInfo2(info);
  }

  function SelectStart() {
    SelectRef.current.focus();
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
      </HomeWrapper>
    </Container>
  );
};

export default Comparison;
