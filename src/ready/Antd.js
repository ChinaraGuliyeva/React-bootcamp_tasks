import React, { Component } from 'react';
import { Select } from 'antd';
import 'antd/dist/antd.css';

const { Option } = Select;

class Antd extends Component {
    state = {
        value: "Италия",
        italy: ["Рим", "Флоренция", "Неаполь", "Милан", "Турин"
        ],
        france: ["Париж", "Орлеан", "Марсель", "Тулуза"
        ],
        germany: ["Берлин", "Гамбург", "Бремен"],
        spain: ["Мадрид", "Валенсия", "Севилья", "Малага"
        ]
    }
    changeValue = (event, data) => {
        console.log(data.value)
        this.setState({ value: data.value })
    }
    valueReader = () => {
        if (this.state.value == "italy") {
            return (<Select className="murashki">
                <Option value={this.state.italy[0]}>{this.state.italy[0]}</Option>
                <Option value={this.state.italy[1]}>{this.state.italy[1]}</Option>
                <Option value={this.state.italy[2]}>{this.state.italy[2]}</Option>
                <Option value={this.state.italy[3]}>{this.state.italy[3]}</Option>
            </Select>)
        }
        if (this.state.value == "france") {
            return (<Select className="murashki">
                <Option value={this.state.france[0]}>{this.state.france[0]}</Option>
                <Option value={this.state.france[1]}>{this.state.france[1]}</Option>
                <Option value={this.state.france[2]}>{this.state.france[2]}</Option>
                <Option value={this.state.france[3]}>{this.state.france[3]}</Option>
            </Select>)
        }
        if (this.state.value == "germany") {
            return (<Select className="murashki">
                <Option value={this.state.germany[0]}>{this.state.germany[0]}</Option>
                <Option value={this.state.germany[1]}>{this.state.germany[1]}</Option>
                <Option value={this.state.germany[2]}>{this.state.germany[2]}</Option>
            </Select>)
        }
        if (this.state.value == "spain") {
            return (<Select className="murashki">
                <Option value={this.state.spain[0]}>{this.state.spain[0]}</Option>
                <Option value={this.state.spain[1]}>{this.state.spain[1]}</Option>
                <Option value={this.state.spain[2]}>{this.state.spain[2]}</Option>
                <Option value={this.state.spain[3]}>{this.state.spain[3]}</Option>
            </Select>)
        }
        else {
            return (''
            )
        }
    }
    render() {
        return <div>
            <Select className="murashki" value={this.state.value} onChange={this.changeValue}>
                <Option value="italy">Италия</Option>
                <Option value="france">Франция</Option>
                <Option value="spain">Испания</Option>
                <Option value="germany">Германия</Option>
            </Select>
            {this.valueReader()}

        </div>
    }
}

export default Antd;