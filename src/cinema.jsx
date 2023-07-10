import React, { Component } from "react";
import "./css/cinema.css";
import Film from "./cinema/Film";
import Cinema from "./cinema/Cinema";
import Center from "./cinema/Center";

export default class App extends Component {
  state = {
    list: [
      {
        id: 1,
        text: "电影",
      },
      {
        id: 2,
        text: "影院",
      },
      {
        id: 3,
        text: "我的",
      },
    ],
    current: 0,
  };

  changeTap = (index) => {
    this.setState({
      current: index,
    });
  };

  watch() {
    switch (this.state.current) {
      case 0:
        return <Film></Film>;
      case 1:
        return <Cinema></Cinema>;
      case 2:
        return <Center></Center>;
      default:
        return null;
    }
  }

  render() {
    return (
      <div>
        {this.watch()}

        <ul>
          {this.state.list.map((item, index) => {
            return (
              <li
                className={this.state.current === index ? "active" : ""}
                key={item.id}
                onClick={() => {
                  this.changeTap(index);
                }}
              >
                {item.text}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
