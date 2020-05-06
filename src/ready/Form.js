import React, { Component } from 'react';
import styled from "styled-components";

import Styled from './Styled';

const Container =styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px;
    width: 200px;
`;

const Input=styled.input`
    width: 200px;
    margin: 10px 0;
`;

class Form extends Component{
    state = {
        visible: false,
        value: ""
    }
    showModal = () => {
        this.setState({ visible: true });

    }
    handleChange = event => this.setState({ value: event.target.value });

    clearData = (param) => {
        this.setState({ value: param });
        this.setState({ visible: false });
    };
    cancel = () =>{
        this.setState({ visible: false });
    }

    render(){
        console.log(this.state.value);
        return<Container >
            <Input type="text" value={this.state.value} onChange={this.handleChange} />
            <button tyle='button' onClick={this.showModal}>Очистить</button>
            <Styled clearData={this.clearData} cancel={this.cancel} visible={this.state.visible} />
        </Container>
    }
}

export default Form;