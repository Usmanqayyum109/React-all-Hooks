import React, { useReducer } from "react";

const ACTION = {
  INCREMENT: "increment",
  DICREMENT: "dicrement",
};

const initialState = 0;
const reducer = (state, action) => {
  switch (action.type) {
    case ACTION.INCREMENT:
      return (state = state + 1);

    case ACTION.DICREMENT:
      return (state = state - 1);

    default:
      return state;
  }
};

function UseReducer() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h1>{state}</h1>
      <button onClick={() => dispatch({ type: ACTION.INCREMENT })}>
        Increase
      </button>
      <button onClick={() => dispatch({ type: ACTION.DICREMENT })}>
        Dicrease
      </button>
    </div>
  );
}

export default UseReducer;
