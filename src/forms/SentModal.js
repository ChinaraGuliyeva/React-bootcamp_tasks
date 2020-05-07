import React, { Component } from 'react';

class SentModal extends Component {
    render() {
        return <div className={this.props.visible === false ? "hide" : "show3"}>
            Сообщение успешно отправлено
        </div>
    }
}

export default SentModal;