import React, { Component } from 'react';

class Send extends Component {
    render() {
        return <div className="mortgage">
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
                <button type="submit">Отправить</button>
            </form>
        </div>
    }
}

export default Send;