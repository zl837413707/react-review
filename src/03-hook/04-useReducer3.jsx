/*
 * @作者: kerwin
 * @公众号: 大前端私房菜
 */
import React, { useEffect, useContext, useReducer } from "react";
import axios from "axios";
import "../02-advance/css/index.css";

const initialState = {
  filmList: [],
  info: "",
};

const reducer = (preState, action) => {
  let newState = { ...preState };
  switch (action.type) {
    case "change":
      newState.filmList = action.payload;
      return newState;
    case "changeinfo":
      newState.info = action.payload;
      return newState;
    default:
      return preState;
  }
};

const GlobalContext = React.createContext(); //创建context对象

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    axios.get(`/test.json`).then((res) => {
      // console.log(res.data.data.films)
      dispatch({
        type: "change",
        payload: res.data.data.films,
      });
      // setfilmList(res.data.data.films);
    });
  }, []);

  return (
    <GlobalContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      <div>
        {/* {this.state.info} */}
        {state.filmList.map((item) => (
          <FilmItem key={item.filmId} {...item}></FilmItem>
        ))}

        <FilmDetail></FilmDetail>
      </div>
    </GlobalContext.Provider>
  );
}

/*受控组件*/

function FilmItem(props) {
  let { name, poster, grade, synopsis } = props;
  const { dispatch } = useContext(GlobalContext);

  // console.log(context)
  return (
    <div
      className="filmitem"
      onClick={() => {
        dispatch({
          type: "changeinfo",
          payload: synopsis,
        });
      }}
    >
      <img src={poster} alt={name} />
      <h4>{name}</h4>
      <div>观众评分：{grade}</div>
    </div>
  );
}

function FilmDetail() {
  const { state } = useContext(GlobalContext);
  return <div className="filmdetail">detail-{state.info}</div>;
}
