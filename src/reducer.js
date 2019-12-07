const initialState = {
  copyMe: "Remember to copy me!",
  counter: 0,
  time: 60,
  reset: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        counter: state.counter + 5 //copy all of the old state, and only manipulate the part we want to manipulate.
      };
    case "DECREMENT":
      return {
        ...state,
        time: state.time - 1
      };
    case "RESET":
      return {
        ...state,
        time: 15,
        reset: true
      };
    default:
      return state;
  }
};

export default reducer;
