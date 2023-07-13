import React, { Component } from "react";
import axios from "axios";

export default class Cinema extends Component {
  constructor() {
    super();

    this.state = {
      cinemas: [],
      keyWord: "",
    };

    axios({
      url: "https://m.maizuo.com/gateway?cityId=110100&ticketFlag=1&k=7406159",
      method: "get",
      headers: {
        "X-Client-Info":
          '{"a":"3000","ch":"1002","v":"5.0.4","e":"16395416565231270166529","bc":"110100"}',

        "X-Host": "mall.film-ticket.cinema.list",
      },
    }).then((res) => {
      // console.log(res.data.data.cinemas);
      this.setState({
        cinemas: res.data.data.cinemas,
      });
    });
  }
  // change = (event) => {
  //   let newCinemas = this.state.backCinemas.filter((item) => {
  //     return (
  //       item.name.toUpperCase().includes(event.target.value.toUpperCase()) ||
  //       item.address.toUpperCase().includes(event.target.value.toUpperCase())
  //     );
  //   });
  //   this.setState({
  //     cinemas: newCinemas,
  //   });
  // };

  change = (event) => {
    this.setState({
      keyWord: event.target.value,
    });
  };

  getCinemasList = () => {
    return this.state.cinemas.filter((item) => {
      return (
        item.name.toUpperCase().includes(this.state.keyWord.toUpperCase()) ||
        item.address.toUpperCase().includes(this.state.keyWord.toUpperCase())
      );
    });
  };

  render() {
    return (
      <div>
        <input type="text" value={this.state.keyWord} onChange={this.change} />
        {this.getCinemasList().map((item) => {
          return (
            <dl key={item.cinemaId}>
              <dt>{item.name}</dt>
              <dd>{item.address}</dd>
            </dl>
          );
        })}
      </div>
    );
  }
}
