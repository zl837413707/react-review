import React, { Component } from 'react'

export default class Navbar extends Component {

  centerChange = () => {

  }
  render() {
    return (
      <div style={{ background: 'yellow', display: 'flex', justifyContent: 'space-between' }}>
        <button>BACK</button>
        <button onClick={() => {
          this.props.navbarChange()
        }}>Center</button>
      </div>
    )
  }
}
