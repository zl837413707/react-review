import React, { useReducer, useContext } from "react";

const initialState = {
  a: "0000",
  b: "0000",
};

const reducer = (state, action) => {
  let newState = { ...state };
  switch (action.type) {
    case "changeA":
      newState.a = action.value;
      return newState;
    case "changeB":
      newState.b = action.value;
      return newState;
    default:
      return state;
  }
};

const GlobalContext = React.createContext();

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      <div>
        <Children1 />
        <Children2 />
        <Children3 />
      </div>
    </GlobalContext.Provider>
  );
}

function Children1() {
  const { dispatch } = useContext(GlobalContext);
  return (
    <div>
      <button
        onClick={() => {
          dispatch({
            type: "changeA",
            value: "11111",
          });
        }}
      >
        改变a组件
      </button>
      <button
        onClick={() => {
          dispatch({
            type: "changeB",
            value: "22222",
          });
        }}
      >
        改变b组件
      </button>
    </div>
  );
}

function Children2() {
  const { state } = useContext(GlobalContext);
  return (
    <div>
      <p>child2{state.a}</p>
    </div>
  );
}

function Children3() {
  const { state } = useContext(GlobalContext);
  return (
    <div>
      <p>child3{state.b}</p>
    </div>
  );
}
