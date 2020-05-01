import React, { Component } from 'react';

class Cards extends Component {
    state = {
        display: "none",
        text: "Подробнее"
    }
    clickHandler = () => {
        if(this.state.text ==="Подробнее"){
        this.setState({ display: "block", text: "Скрыть" })}
        else {
            this.setState({ display: "none", text: "Подробнее" })
        }
    }
    render() {
        return (<div className="cards">
            <h1>John</h1>
            <p>30 лет</p>
            <p>Премиум</p>
            <div style={{ display: this.state.display }}>
                <p>347905905</p>
                <p>300 AZN</p>
                <p>21.06.2020</p>
            </div>
            <a onClick={this.clickHandler} className="aaa" href="#">{this.state.text}</a>
        </div>)
    }
}

export default Cards;