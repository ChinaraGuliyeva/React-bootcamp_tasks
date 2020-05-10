import React, { Component } from 'react';

class Brotherhood extends Component {
    state = {
        data: [],
        value: ""
    }
    valueHandler = (event) => {
        this.setState({ value: event.target.value })
        //console.log(event.target.value);
        setTimeout(this.findName, 10000);
    }
    getData = () => {
        fetch('https://5ea5ca472d86f00016b4626d.mockapi.io/brotherhood')
            .then(responce => responce.json())
            .then(data => this.setState({ data: data }));
    }
    findName = ()=>{
        let result = this.state.data.find(element => element.name==this.state.value);
        console.log(result);
    }
    componentDidMount() {
        this.getData();
    }
    render(){
        return (
        <div className="searchName">
            <label for="search">Поиск</label><input value={this.state.value} id="search" onChange={this.valueHandler} />
        </div>)
    }

}

export default Brotherhood;