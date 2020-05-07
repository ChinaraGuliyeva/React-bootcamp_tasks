import React, { Component } from 'react';
import {NavLink} from "react-router-dom";


class Navigation extends Component{
    render(){
        return <nav>
            <NavLink className="nav-button" to="/main">Главная</NavLink>
            <NavLink className="nav-button" to="/state_tasks/task">Dise</NavLink>
            <NavLink className="nav-button" to="/event_tasks/menu">Menu</NavLink>
            <NavLink className="nav-button" to="/login">Login</NavLink>
            <NavLink className="nav-button" to="/name">Name</NavLink>
            <NavLink className="nav-button" to="/drop">Drop</NavLink>
            <NavLink className="nav-button" to="/modal">Modal</NavLink>
            <NavLink className="nav-button" to="/counter">Counter</NavLink>
            <NavLink className="nav-button" to="/Brotherhood">LoR</NavLink>
            <NavLink className="nav-button" to="/mortgage">Mortgage</NavLink>
            <NavLink className="nav-button" to="/send">Send</NavLink>
            <NavLink className="nav-button" to="/styled">Styled</NavLink>
            <NavLink className="nav-button" to="/antd">Antd</NavLink>
        </nav>
    }
}

export default Navigation;