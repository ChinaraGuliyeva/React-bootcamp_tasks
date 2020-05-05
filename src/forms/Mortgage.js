import React, { Component } from 'react';

class Mortgage extends Component{
    render(){
        return <div>
            <div>
                <label for="sum">Сумма</label>
                <input type='text' id="sum" />$
            </div>
            <div>
                <label for="sum">Ставка</label>
                <input type='text' id="sum" />%
            </div>
            <div>
                <label for="sum">Срок</label>
                <input type='text' id="sum" />лет
            </div>
            <p>Ежемесячный платеж:</p>
        </div>
    }
}

export default Mortgage;