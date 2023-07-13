import React, { Component } from "react";
import { nanoid } from "nanoid";

export default class App extends Component {
  state = {
    keyWord: "",
    list: [
      {
        id: 1,
        mytext: "aaa",
        isChecked: false,
      },
      {
        id: 2,
        mytext: "bbb",
        isChecked: false,
      },
      {
        id: 3,
        mytext: "ccc",
        isChecked: true,
      },
    ],
  };

  add = () => {
    const list = this.state.list;
    const value = this.state.keyWord;
    const newContent = { id: nanoid(), mytext: value };
    const newList = [...list, newContent];
    this.setState({ list: newList, keyWord: "" });
  };

  del = (index) => {
    const list = this.state.list;
    let newList = [...list];
    newList.splice(index, 1);

    this.setState({
      list: newList,
    });

    // console.log(index);
  };

  checkChange = (index) => {
    const list = this.state.list;
    let newList = [...list];
    newList[index].isChecked = !newList[index].isChecked;
    this.setState({
      list: newList,
    });
  };

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.keyWord}
          onChange={(event) => {
            this.setState({
              keyWord: event.target.value,
            });
          }}
        />
        <button onClick={this.add}>点击添加</button>
        <ul>
          {this.state.list.map((item, index) => {
            return (
              <li key={item.id}>
                <input
                  type="checkbox"
                  checked={item.isChecked}
                  onChange={() => {
                    this.checkChange(index);
                  }}
                />
                <span
                  style={{
                    textDecoration: item.isChecked ? "line-through" : "",
                  }}
                >
                  text:
                </span>
                {item.mytext}
                {item.isChecked ? "完成" : "未完成"}
                <button
                  onClick={() => {
                    this.del(index);
                  }}
                >
                  del
                </button>
              </li>
            );
          })}
        </ul>
        {this.state.list.length === 0 ? <div>暂无待办事项</div> : null}
      </div>
    );
  }
}
