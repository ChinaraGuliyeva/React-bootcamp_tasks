import React, { Component } from 'react';
import {NavLink} from "react-router-dom";

class ClassWork extends Component{
    render(){
        return <nav>
            <NavLink className="nav-button" to="/cards">Cards</NavLink>
            <NavLink className="nav-button" to="/management">Managers</NavLink>
            <NavLink className="nav-button" to="/Brotherhood">LoR</NavLink>
        </nav>
    }
}

export default ClassWork;