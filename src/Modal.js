import React, { Component } from 'react';

class Modal extends Component {
    render() {
        const { content, btn } = this.props;
        return <div className={this.props.visible === false ? "hide" : "show2"}>
            <p>{content}</p>
            <div >{btn}</div>
        </div>
    }
}

export default Modal;