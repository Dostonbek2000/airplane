const initialState = {
    info_home: {},
  };
  
  const homeReducer = (state = initialState, action) => {
    switch (action.type) {
      case "HOME_INFO":
        let info_home = state.info_home;
        let info = action.payload;
        info_home = info;
        return info_home;
      default:
        return state;
    }
  };
  
  export default homeReducer;