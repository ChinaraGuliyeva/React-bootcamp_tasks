import React, { Component } from 'react';

class Mortgage extends Component{
    state = {
        value1: "",
        value2: "",
        value3: "",
        monthlySum: NaN,
        monthlyRate: NaN,
        commonRate: NaN,
        monthlyPayment: NaN
    }
    sumhandler= (event) => {
        this.setState({value1: +event.target.value});
        console.log(this.state.value1);
    }
    rateHandler=(event)=>{
        this.setState({value2: +event.target.value, monthlyRate: this.state.value2/12/100});
        console.log(`Месячная ставка составляет ${this.state.monthlyRate}`);
    }
    termHandler = (event)=> {
        this.setState({value3: +event.target.value, commonRate: Math.pow((1+this.state.monthlyRate), this.state.value3*12)});
        console.log(this.state.value3);
        console.log(`Общая ставка ${this.state.commonRate}`);
    }
    calculate = () =>{
        this.setState({monthlyPayment: this.state.value1*this.state.monthlyRate*this.state.commonRate/(this.state.commonRate -1)})
    }
    render(){
        return <div className="mortgage">
            <div className="mortgage-input-container">
                <label for="sum">Сумма</label>
                <input type='text' id="sum" value={this.state.value1} onChange={this.sumhandler} onBlur={this.calculate}/>$
            </div>
            <div className="mortgage-input-container">
                <label for="sum">Ставка</label>
                <input type='text' id="sum" value={this.state.value2} onChange={this.rateHandler} onBlur={this.calculate}/>%
            </div>
            <div className="mortgage-input-container">
                <label for="sum">Срок</label>
                <input className="mortgage-last" type='text' id="sum" value={this.state.value3} onChange={this.termHandler} onBlur={this.calculate}/>лет
            </div>
    <       p>Ежемесячный платеж: {this.state.monthlyPayment}</p>
        </div>
    }
}

export default Mortgage;