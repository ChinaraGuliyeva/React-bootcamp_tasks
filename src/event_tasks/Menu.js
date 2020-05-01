import React, {Component} from 'react';

class Menu extends Component{
    state = {
        display: "none",
        top: 0,
        left: 0
    }
    handleClick =(event)=>{
        this.setState({display: "block"});
        this.setState({top: event.clientY});
        this.setState({left:  event.clientX})
        console.log(event.clientX);
        console.log(event.clientY);
    }
    componentDidMount(){
    document.addEventListener('click', this.handleClick);
}
    componentWillUnmount(){
        document.removeEventListener('click', this.handleClick);
    }
    render(){
        return <ul className="menu" style={{display: this.state.display, top: this.state.top, left: this.state.left}}>
                <li>Меню</li>
                <li>Пункт 1</li>
                <li>Пункт 2</li>
            </ul>
    }
}

export default Menu;