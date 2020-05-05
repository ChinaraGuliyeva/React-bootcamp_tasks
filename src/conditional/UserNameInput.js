import React, { Component } from 'react';

class UserNameInput extends Component{
    blurHandler = (event) => {
        const spaceCheck =()=>{
            let result=event.target.value;
            let spaces=0;
            for (let i=0; i<result.length; i++){
                if ((result[i])==" "){
                    spaces++;
                }
            }
            if (spaces === 1) {
            return true }
            else {
                return false
            }
        }
        const numberCheck =()=>{
            let result=event.target.value;
            for (let i=0; i<result.length; i++){
                if (Number.isInteger(+result[i]) && result[i]!=" "){
                   return true;
                }
            }
        }
        console.log(event.target.value);
        if (event.target.value.length < 3) {
            event.target.classList.add("userNameInput");
        }
        if (numberCheck()){
            event.target.classList.add("userNameInputOpacity");
        }
        if (spaceCheck()){
            event.target.classList.add("userNameInputBold");
        }
    }
    render(){
        return <div className="UserNameInputContainer">
            <label className="label1" htmlFor="login">Введите логин</label>
            <input onBlur={this.blurHandler} type="text" id="login"></input>
        </div>
    }
}

export default UserNameInput;