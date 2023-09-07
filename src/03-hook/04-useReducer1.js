import React, { useReducer } from "react";

const reducer = (preState, action) => {
  console.log(preState);
  console.log(action);
  let count = { ...preState };
  switch (action.type) {
    case "INCREMENT":
      count.count++;
      return count;
    case "DECREMENT":
      count.count--;
      return count;
    default:
      return preState;
  }
};

const intialState = {
  count: 0,
};

export default function App() {
  const [state, dispatch] = useReducer(reducer, intialState);

  return (
    <div>
      <button
        onClick={() => {
          dispatch({
            type: "DECREMENT",
          });
        }}
      >
        -
      </button>
      {state.count}
      <button
        onClick={() => {
          dispatch({
            type: "INCREMENT",
          });
        }}
      >
        +
      </button>
    </div>
  );
}
