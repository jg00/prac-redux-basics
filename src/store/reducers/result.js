import * as actionTypes from "../actions"; // actionTypes is now a JavaScript object

const initialState = {
  results: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.STORE_RESULT:
      return {
        ...state,
        results: state.results.concat({ id: new Date(), value: action.result })
        // so here we changed to exprect to get a "result" from our property action
        // to receive that we need to adjust our Counter.js file (Container > Counter > Counter.js)
        // where onStoreResult() is executed we need to get the result

        // results: state.results.concat({ id: new Date(), value: state.counter })
        // after multiple reducers this reducer does not have access to the global state value "counter"
        // we should simply get is action payload
        // generally reducers work like this - old state + action + optionally action data and return a new state
      };
    case actionTypes.DELETE_RESULT:
      // One way if you are just removing an object from an array
      // const id = 2;
      // const newArray = [...state.results];
      // newArray.splice(id, 1);

      const updatedArray = state.results.filter(
        result => result.id !== action.resultElId
      );

      return {
        ...state,
        results: updatedArray
      };
  }
  return state;
};

export default reducer;
