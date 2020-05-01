import React, { Component } from 'react';

class Header extends Component{
    render(){
        return <header>
             <div className="left-container">
                 <div className="header-nav">Курс</div>
                 <div className="header-nav">Лаборатория</div>
             </div>
             <div className="right-container">
                 <div>Гулиева Чинара</div>
                 <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="comment-alt" className="message-svg" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M448 0H64C28.7 0 0 28.7 0 64v288c0 35.3 28.7 64 64 64h96v84c0 9.8 11.2 15.5 19.1 9.7L304 416h144c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64z"></path></svg>
                 <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="sign-out-alt" className="sign-out" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M497 273L329 441c-15 15-41 4.5-41-17v-96H152c-13.3 0-24-10.7-24-24v-96c0-13.3 10.7-24 24-24h136V88c0-21.4 25.9-32 41-17l168 168c9.3 9.4 9.3 24.6 0 34zM192 436v-40c0-6.6-5.4-12-12-12H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h84c6.6 0 12-5.4 12-12V76c0-6.6-5.4-12-12-12H96c-53 0-96 43-96 96v192c0 53 43 96 96 96h84c6.6 0 12-5.4 12-12z"></path></svg>
             </div>
               </header>
    }
}

export default Header;