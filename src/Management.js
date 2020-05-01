import React, {Component} from 'react';

class Management extends Component{
    state = {
        data: {}
    }
    componentDidMount(){
        this.getData();
    }
    getData = () => {
        fetch('https://5ea5ca472d86f00016b4626d.mockapi.io/management')
        .then(responce => responce.json())
        .then(data => this.setState({data: data}))
    }
    render(){
        const { department, employees, manager } = this.state.data;
        return <div className="cards">
            <p>Название отдела: {department}</p>
            <p>Число сотрудники: {employees}</p>
            <p>Управляющий: {manager}</p>
        </div>
    }
}

export default Management;