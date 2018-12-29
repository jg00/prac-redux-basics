import * as actionTypes from "./actions"; // actionTypes is now a JavaScript object

const initialState = {
  counter: 0,
  results: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.INCREMENT:
      return {
        ...state,
        counter: state.counter + 1
      };

    case actionTypes.DECREMENT:
      return {
        ...state,
        counter: state.counter - 1
      };

    case actionTypes.ADD:
      return {
        ...state,
        counter: state.counter + action.val
      };

    case actionTypes.SUBTRACT:
      return {
        ...state,
        counter: state.counter - action.val
      };
    case actionTypes.STORE_RESULT:
      return {
        ...state,
        results: state.results.concat({ id: new Date(), value: state.counter })
      };
    case actionTypes.DELETE_RESULT:
      // One way if you are just removing an object from an array
      // const id = 2;
      // const newArray = [...state.results];
      // newArray.splice(id, 1);

      const newArray = state.results.filter(
        result => result.id !== action.resultElId
      );

      return {
        ...state,
        results: newArray
      };
  }
  return state;
};

export default reducer;
