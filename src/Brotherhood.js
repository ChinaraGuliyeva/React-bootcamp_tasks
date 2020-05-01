import React, { Component } from 'react';

class Brotherhood extends Component {
    state = {
        data: []
    }
    componentDidMount() {
        this.getData();
    }
    getData = () => {
        fetch('https://5ea5ca472d86f00016b4626d.mockapi.io/brotherhood')
            .then(responce => responce.json())
            .then(data => this.setState({ data: data }));
    }
    render() {
        if (this.state.data.length>0){
        return <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Department</th>
                    <th>Role</th>
                </tr>
            </thead>
            <tbody>
                {this.state.data.map(user => {
                    return (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.department}</td>
                            <td>{user.role}</td>
                        </tr>
                    );
                })}
            </tbody>
        </table>}
        else {
            return <div className="load">Падажды</div>
        }

    }

}

export default Brotherhood;