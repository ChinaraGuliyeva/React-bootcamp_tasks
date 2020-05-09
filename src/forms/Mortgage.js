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
        const name = event.target.name;
        console.log(name)
        this.setState({[name]: +event.target.value, monthlyRate: this.state.value2/12/100, commonRate: Math.pow((1+this.state.monthlyRate), this.state.value3*12)});
        //console.log(this.state.value1);
    }
    calculate = () =>{
        this.setState({monthlyPayment: this.state.value1*this.state.monthlyRate*this.state.commonRate/(this.state.commonRate -1)})
    }
    render(){
        return <div className="mortgage">
            <div className="mortgage-input-container">
                <label for="sum">Сумма</label>
                <input type='text' id="sum" name="value1" value={this.state.value1} onChange={this.sumhandler} onBlur={this.calculate}/>$
            </div>
            <div className="mortgage-input-container">
                <label for="sum">Ставка</label>
                <input type='text' id="sum" name="value2" value={this.state.value2} onChange={this.sumhandler} onBlur={this.calculate}/>%
            </div>
            <div className="mortgage-input-container">
                <label for="sum">Срок</label>
                <input className="mortgage-last" name="value3" type='text' id="sum" value={this.state.value3} onChange={this.sumhandler} onBlur={this.calculate}/>лет
            </div>
    <       p>Ежемесячный платеж: {this.state.monthlyPayment}</p>
        </div>
    }
}

export default Mortgage;