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
        german: ["Берлин", "Гамбург", "Бремен"],
        spain: ["Мадрид", "Валенсия", "Севилья", "Малага"
        ]
    }
    changeValue = (event) =>{
        this.setState({value: event.target.value})
    }
    valueReader = () =>{
        console.log(this.state.value)
    }
    render() {
        return <div>
                <Select className="murashki" value={this.state.value} onChange={this.changeValue}>
                    <Option value="Italy">Италия</Option>
                    <Option value="France">Франция</Option>
                    <Option value="Spain">Испания</Option>
                    <Option value="Germany">Германия</Option>
                </Select>
                {this.valueReader()}
                <Select className="murashki" defaultValue="" >
                    <Option value=""></Option>
                    <Option value=""></Option>
                    <Option value=""></Option>
                    <Option value=""></Option>
                </Select>
                </div>
    }
}

export default Antd;