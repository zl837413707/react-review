import React, { Component } from "react";
import { nanoid } from "nanoid";

export default class App extends Component {
  myref = React.createRef();

  state = {
    list: [
      {
        id: 1,
        mytext: "aaa",
      },
      {
        id: 2,
        mytext: "bbb",
      },
      {
        id: 3,
        mytext: "ccc",
      },
    ],
  };

  add = () => {
    const list = this.state.list;
    const value = this.myref.current.value;
    const newContent = { id: nanoid(), mytext: value };
    const newList = [...list, newContent];
    this.setState({ list: newList });
    this.myref.current.value = "";
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

  render() {
    return (
      <div>
        <input type="text" ref={this.myref} />
        <button onClick={this.add}>点击添加</button>
        <ul>
          {this.state.list.map((item, index) => {
            return (
              <li key={item.id}>
                id:{item.id}--text:{item.mytext}
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
