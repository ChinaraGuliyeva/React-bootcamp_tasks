import React, { Component } from 'react';
import styled from "styled-components";

import Form from './Form';

const Modal = styled.div`
    background-color: #E7E7E7;
    width: 270px;
    height: 130px;
    padding: 30px;
    font-famile: sans-serif;
    text-align: center;
    position: absolute;
`;

const ButtonsContainer = styled.div`
    display: flex;
    justify-content: space-around;
    padding: 20px 0;
`;

const Button = styled.button`
    width: 100px;
    border-radius: 0px;
`;

class Styled extends Component {
    state={
        value: ""
    }
    render() {
        return <Modal className={this.props.visible === false ? "hide" : "show"}>
            <p>Вы уверены, что хотите стереть текст?</p>
            <ButtonsContainer>
                <Button onClick={() =>{this.props.clearData(this.state.value)}}>ОК</Button>
                <Button onClick={() =>{this.props.cancel()}} >Отмена</Button>
        </ButtonsContainer>
        </Modal>
    }
}

export default Styled;