import React, { Component } from 'react';
import SentModal from "./SentModal";

class Send extends Component {
    state = {
        isVisible: false
    }
    visibilityHandler =(event)=>{
        event.preventDefault();
        this.setState({ isVisible: true})
    }
    render() {
        return <div className="mortgage">
            <SentModal visible={this.state.isVisible} />
            <form>
                <div className='mortgage-input-container send-input-container'>
                    <label HTMLfor="name">Имя</label>
                    <input type="text" id="name" require></input>
                </div>
                <div className='mortgage-input-container send-input-container'>
                    <label HTMLfor="surname">Фамилия</label>
                    <input type="text" id="surname" require></input>
                </div>
                <div className='mortgage-input-container send-input-container'>
                    <label HTMLfor="phone">Телефон</label>
                    <input type="text" id="phone" require></input>
                </div>
                <div className='mortgage-input-container send-input-container'>
                    <label HTMLfor="mail">Email</label>
                    <input type="text" id="mail" require></input>
                </div>
                <button type="submit" onClick={this.visibilityHandler}>Отправить</button>
            </form>
        </div>
    }
}

export default Send;