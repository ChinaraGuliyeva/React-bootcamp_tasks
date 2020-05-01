import React, {Component} from 'react';

class Dise extends Component{
    state={
        count: 0
    }
    getRandomNumber =() =>{
        //remove 0. from 1 to 6
        function getRandomInt(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min)) + min;
          }
          let num= getRandomInt(1, 7);
          this.setState({count: num})
    }
    render(){
        return <div className='dice-container'>
            <p className='dice-p'>{this.state.count}</p>
            <button className="dice-button" onClick={this.getRandomNumber}>Click me</button>
            </div>
    }
}

export default Dise;