import React, { Component } from 'react';

import Modal from "./Modal";
import ModalContent from "./ModalContent";

class Modals extends Component{
    state = {
        isModalOpen1: false,
        isModalOpen2: false
    }
    modal1Handler = () => {
        this.setState({ isModalOpen1: true })
    }
    modal2Handler = () => {
        this.setState({ isModalOpen2: true })
    }
    hide1Handler = () => {
        this.setState({ isModalOpen1: false })
    }
    hide2Handler = () => {
        this.setState({ isModalOpen2: false })
    }
    render(){
        return <div className="modals-container">
            <button onClick={this.modal1Handler} className="modalButton">Show Modal</button>
            <Modal visible={this.state.isModalOpen1} content={<ModalContent  text="I am first modal"/>} btn={<button onClick={this.hide1Handler} className="modalbtn">x</button>} />
            <button onClick={this.modal2Handler}  className="modalButton">Show Modal</button>
            <Modal visible={this.state.isModalOpen2} content={<ModalContent  text="I am second modal"/>} btn={<button onClick={this.hide2Handler} className="modalbtn">x</button>} />
            </div>
    }
}

export default Modals;