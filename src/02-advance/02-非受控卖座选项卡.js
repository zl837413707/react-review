/*
 * @作者: kerwin
 * @公众号: 大前端私房菜
 */
import React, { Component } from 'react'
import './css/02-maizuo.css'
import Film from './maizuocomponent/Film'
import Cinema from './maizuocomponent/Cinema'
import Center from './maizuocomponent/Center'
import Tabbar from './maizuocomponent/Tabbar'
import Navbar from './maizuocomponent/Navbar'

export default class App extends Component {
    state = {
        current: 0
    }

    which() {
        // return "2222"

        switch (this.state.current) {
            case 0:
                return <Film></Film>
            case 1:
                return <Cinema></Cinema>
            case 2:
                return <Center></Center>

            default:
                return null
        }
    }

    render() {
        return (
            <div>
                <Navbar navbarChange={() => {
                    this.setState({
                        current: 2
                    })
                }}></Navbar>
                {
                    //表达式--支持函数表达式
                    this.which()
                }
                <Tabbar tabbarChange={(index) => {
                    this.setState({
                        current: index
                    })
                }}></Tabbar>
            </div>)
    }


}
