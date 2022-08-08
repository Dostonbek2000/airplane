const initialState = {
  info_one: {}
};

const airReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_AIR_INFO_ONE":
      let info_one = state.info_one;
      let info1 = action.payload;
      info_one = info1;
      return info_one;
    default:
      return state;
  }
};

export default airReducer;
