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
        visible: false
    }
    showModal = () => {
        this.setState({ visible: true })
    }
    render(){
        return<Container >
            <Input type="text" />
            <button tyle='button' onClick={this.showModal}>Очистить</button>
            <Styled visible={this.state.visible} />
        </Container>
    }
}

export default Form;