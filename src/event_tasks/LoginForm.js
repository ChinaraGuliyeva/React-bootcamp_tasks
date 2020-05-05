import React, { Component } from 'react';

class LoginForm extends Component {
    state = {
        show: false
    }
    showHandler = () => {
        this.setState({ show: true })
    }

    blurHandler = () =>{
        this.setState({ show: false })
    }

    render() {
        return <div className="mail-container">
            <label htmlFor={this.props.name}>{this.props.name}</label>
            <input onFocus={this.showHandler} onBlur={this.blurHandler} type="text" id={this.props.name}></input>
            <div className={this.state.show == false ? "hide" : "show1"}>{this.props.text}</div>
        </div>
    }

}

export default LoginForm;