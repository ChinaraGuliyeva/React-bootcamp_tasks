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
        console.log(event.target);
        //this.setState({value: event.target.value})
        console.log(1)
    };
    render() {
        return <div>
                <Select className="murashki" value={this.state.value} onSelect={this.changeValue}>
                    <Option value="Italy">Италия</Option>
                    <Option value="France">Франция</Option>
                    <Option value="Spain">Испания</Option>
                    <Option value="Germany">Германия</Option>
                </Select>
                <Select className="murashki" defaultValue="Италия" >
                    <Option value="Italy">Италия</Option>
                    <Option value="France">Франция</Option>
                    <Option value="Spain">Испания</Option>
                    <Option value="Germany">Германия</Option>
                </Select>
                </div>
    }
}

export default Antd;