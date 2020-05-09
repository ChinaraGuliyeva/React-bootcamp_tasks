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
                {this.state.italy.map(element =>{return <Option value={element}>{element}</Option>})}
            </Select>)
        }
        if (this.state.value == "france") {
            return (<Select className="murashki">
                {this.state.france.map(element =>{return <Option value={element}>{element}</Option>})}
            </Select>)
        }
        if (this.state.value == "germany") {
            return (<Select className="murashki">
                {this.state.germany.map(element =>{return <Option value={element}>{element}</Option>})}
            </Select>)
        }
        if (this.state.value == "spain") {
            return (<Select className="murashki">
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