const initialState = {
    info_two: {}
  };
  
  const airReducer2 = (state = initialState, action) => {
    switch (action.type) {
      case "SET_AIR_INFO_TWO":
        let info_two = state.info_two;
        let info2 = action.payload;
        info_two = info2;
        return info_two;
  
      default:
        return state;
    }
  };
  
  export default airReducer2;