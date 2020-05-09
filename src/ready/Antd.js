import React, { Component } from 'react';
import { Select, Input } from 'antd';
import 'antd/dist/antd.css';

const { Option } = Select;

class Antd extends Component {
    state = {
        value: "Страна",
        italy: ["Рим", "Флоренция", "Неаполь", "Милан", "Турин"
        ],
        france: ["Париж", "Орлеан", "Марсель", "Тулуза"
        ],
        germany: ["Берлин", "Гамбург", "Бремен"],
        spain: ["Мадрид", "Валенсия", "Севилья", "Малага"],
        display: "none",
        display2: "none"
    }
    changeValue = (event, data) => {
        console.log(data.value)
        this.setState({ value: data.value })
    }
    daysRender = () =>{
        this.setState({display: "block"})
    }
    buttonRender = () =>{
        this.setState({display2: "block"})
    }
    valueReader = () => {
        if (this.state.value == "italy") {
            return (<Select defaultValue="Город" className="murashki" onChange={this.daysRender}>
                {this.state.italy.map(element =>{return <Option value={element}>{element}</Option>})}
            </Select>)
        }
        if (this.state.value == "france") {
            return (<Select defaultValue="Город" className="murashki" onChange={this.daysRender}>
                {this.state.france.map(element =>{return <Option value={element}>{element}</Option>})}
            </Select>)
        }
        if (this.state.value == "germany") {
            return (<Select defaultValue="Город" className="murashki" onChange={this.daysRender}>
                {this.state.germany.map(element =>{return <Option  value={element}>{element}</Option>})}
            </Select>)
        }
        if (this.state.value == "spain") {
            return (<Select defaultValue="Город" className="murashki" onChange={this.daysRender()}>
                {this.state.spain.map(element =>{return <Option value={element}>{element}</Option>})}
            </Select>)
        }
        else {
            return (''
            )
        }
    }
    render() {
        return <div>
            <Select className="murashki" defaultValue="Страна" value={this.state.value} onChange={this.changeValue}>
                <Option value="italy">Италия</Option>
                <Option value="france">Франция</Option>
                <Option value="spain">Испания</Option>
                <Option value="germany">Германия</Option>
            </Select>
            {this.valueReader()}
            <div className="antd-days" style={{display: [this.state.display]}}><label for="days">Количество дней</label><Input type="number" id="days" onChange={this.buttonRender} /></div>
            <button className="antdButton" style={{display: [this.state.display2]}}>Отправить заявку</button>
        </div>
    }
}

export default Antd;