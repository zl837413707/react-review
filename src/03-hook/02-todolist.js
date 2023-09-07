import React, { useState } from "react";

export default function APP() {
  const [text, setText] = useState("");
  const [todoList, setTodo] = useState([]);

  const change = (e) => {
    setText(e.target.value);
  };

  const add = () => {
    console.log(text);

    setTodo([...todoList, text]);

    setText("");
  };

  const del = (index) => {
    console.log(index);
    const newTodoList = [...todoList];
    newTodoList.splice(index, 1);
    setTodo([...newTodoList]);
  };

  return (
    <div>
      <input type="text" onChange={change} value={text} />
      <button onClick={add}>追加</button>
      <ul>
        {todoList.map((item, index) => {
          return (
            <li key={item}>
              {item} <button onClick={() => del(index)}>del</button>{" "}
            </li>
          );
        })}
      </ul>
      {!todoList.length && <div>暂无内容</div>}
    </div>
  );
}
