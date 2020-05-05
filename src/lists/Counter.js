import React, { Component } from 'react';

class Counter extends Component {
    state = {
        counter: 0,
        results: []
    }
    remove = (i) => {
        console.log("remove", i);
        const filteredResults = this.state.results.filter((element, id) =>
            { console.log("id " + id);
              console.log("i " + i);
                return id !== i} );
            this.setState({results: filteredResults})
    };
    buttonAdder = (parameter) => {
        this.setState({ counter: this.state.counter + parameter });
        this.state.results.push(this.state.counter + parameter);
        //не менять массив, перезаписывать state каждый раз
        console.log(this.state.results[0]);
    };
    render() {
        const buttons = [-5, -2, -1, +1, +2, +3];
        return <div>
            <h1>Текущее значение счетчика {this.state.counter}</h1>
            <hr />
            <div className="counter-buttons">
                {buttons.map((element) => { return <button key={element.toString()} onClick={() => { this.buttonAdder(element) }}>{element}</button> })}
            </div>
            <p>История изменений счетчика</p>
            <div>{this.state.results.map((element, index) => { return <p key={element[index]}>{element}<button onClick={() =>{ this.remove(index) }} >Удалить</button></p> })} </div>
        </div>
    }
}

export default Counter;