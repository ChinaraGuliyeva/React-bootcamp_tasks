import React, { Component } from 'react';

class BankCard extends Component {
    state = {
        display: "none",
        value1: " ",
        value2: " ",
        value3: " "


    }
    nameHandler=(event)=>{
        this.setState({value1: event.target.value});
    }
    numberHandler = (event)=>{
        this.setState({value2: event.target.value});
    }
    dateHandler = (event)=>{
        this.setState({value3: event.target.value});
    }
    cvvHandler =()=>{
        if(this.state.value1!==" " && this.state.value2!==" "&& this.state.value3!==" "){
            this.setState({display: "block"});
        }
        else {
            alert("Заполните форму")
        }
    }
    render() {
        return <form className="mortgage">
            <div className='mortgage-input-container send-input-container'>
                <label HTMLfor="name">Имя</label>
                <input type="text" id="name" require value={this.state.value1} onChange={this.nameHandler}></input>
            </div>
            <div className='mortgage-input-container send-input-container'>
                <label HTMLfor="name">Номер карты</label>
                <input type="number" id="name" require className="numberInput" value={this.state.value2} onChange={this.numberHandler}></input>
            </div>
            <div className='mortgage-input-container send-input-container'>
                <label HTMLfor="name">Дата закрытия</label>
                <input type="date" id="name" require className="datInput" value={this.state.value3} onChange={this.dateHandler} onBlur={this.cvvHandler}></input>
            </div>
            <div className='mortgage-input-container send-input-container' style={{display: this.state.display}}>
                <label HTMLfor="cvv">CVV</label>
                <input type="number" id="cvv" require></input>
            </div>
        </form>
    }
}

export default BankCard;