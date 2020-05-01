import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Route, BrowserRouter } from 'react-router-dom';

import Navigation from "./Navigation";
import Dice from "./state_tasks/Dice.js";
import Header from './Header';
import Menu from "./event_tasks/Menu";
import UserLogin  from './UserLogin';
import Cards from "./Cards";
import Management from "./Management";
import Brotherhood from './Brotherhood';
import ClassWork from './ClassWork';
import UserNameInput from "./UserNameInput";
import Dropdowns from "./Dropdowns";
import Modals from './Modals';
import Counter from "./Counter";

class App extends Component {
  render() {
    return <div>
      <Header />
      <Navigation />
      <ClassWork />
    </div>
  }
}

ReactDOM.render(
  <BrowserRouter>
    <Route path="/" component={App} />
    <Route path="/state_tasks/task" component={Dice} />
    <Route path="/event_tasks/menu" component={Menu} />
    <Route path="/login" component={UserLogin} />
    <Route path="/cards" component={Cards} />
    <Route path="/management" component={Management} />
    <Route path="/brotherhood" component={Brotherhood} />
    <Route path="/name" component={UserNameInput} />
    <Route path="/drop" component={Dropdowns} />
    <Route path="/modal" component={Modals} />
    <Route path="/counter" component={Counter} />
  </BrowserRouter>,
  document.getElementById('root')
);
