import React, { Component } from 'react';

class Counter extends Component{
    state = {
        counter: 0,
        results: []
    }
    render(){
        const buttons = [-5, -2, -1, +1, +2, +3];
        //сделать обработчик, который будет положен внутрь анонимной функции, которая сразу же и вызывается
        //создавать новый массив через фильтр а не сплайс
        return <div>
            <h1>Текущее значение счетчика {this.state.counter}</h1>
            <hr />
            <div className="counter-buttons">
                {buttons.map((element) =>{ return <button onClick={() =>{this.setState({counter: this.state.counter+element })}}>{element}</button>} )}
            </div>
            <p>История изменений счетчика</p>
            <div>{this.state.results.map((element) => {return <p key={element}>{element}<button onClick={() => {this.state.results.splice(element, 1)}}>Удалить</button></p>})} </div>
        </div>
    }
    componentDidUpdate(){
        //убрать полностью
        this.state.results.push(this.state.counter);
        console.log(this.state.results);
    }
}

export default Counter;