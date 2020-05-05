import React, { Component } from 'react';

class Dropdown extends Component {
    state = {
        show: false
    }
    showHandler = () => {
        this.setState({ show: true })
    }
    render() {
        return <div className="dropdown-container">
            <h1>{this.props.title}</h1>
            <button onClick={this.showHandler}>Show more</button>
            <p className={this.state.show == false ? "hide" : "show"}>{this.props.additionalInfo}</p>
        </div >
    }
}

export default Dropdown;