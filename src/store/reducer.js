const initialState = {
    age: 23,
    history: []
  };
  
  const reducer = (state = initialState, action) => {
    const newState = { ...state };
    // if (action.type === "AGE_UP") {
    //   newState.age++;
    // }
    // if (action.type === "AGE_DOWN") {
    //   newState.age--;
    // }
    switch (action.type) {
      case "AGE_UP":
        return {
          ...state,
          age: state.age + action.value,
          history: state.history.concat({
            id: Math.random(),
            age: state.age + action.value
          })
        };
        break;
  
      case "AGE_DOWN":
        return {
          ...state,
          age: state.age - action.value,
          history: state.history.concat({
            id: Math.random(),
            age: state.age - action.value
          })
        };
        break;
      case "DELETE_ITEM":
        return {
          ...state,
          history: state.history.filter(el => el.id !== action.key)
        };
        break;
      default:
    }
    return newState;
  };
  
  export default reducer;
  