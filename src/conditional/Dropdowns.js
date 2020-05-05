import React, { Component } from 'react';

import Dropdown from "./DropDown";

class Dropdowns  extends Component {
    render(){
        return <div>
            <Dropdown title="Frontend deweloper" additionalInfo="Front-end web development, also known as client-side development is the practice of producing HTML, CSS and JavaScript for a website or Web Application so that a user can see and interact with them directly."/>
            <Dropdown title="Backend deweloper" additionalInfo="A back-end developer is a type of programmer who creates the logical back-end and core computational logic of a website, software or information system."/>
            <Dropdown title="Full stack deweloper" additionalInfo="A full stack web developer is a person who can develop both client and server software."/>
        </div>
    }
}

export default Dropdowns;