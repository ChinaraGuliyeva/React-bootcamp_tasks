import React, { Component } from 'react';

import LoginForm from "./LoginForm"; 

class UserLogin extends Component {

    render() {
        return (
            <div className="userLoginContainer">
                <form className="userLogin">
                    <LoginForm name="e-mail" text="Доступны только .az домены" />
                    <LoginForm name="password" text="От 8 символов" />
                </form>
            </div>)
    }
}

export default UserLogin;