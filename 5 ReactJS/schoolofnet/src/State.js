import React from 'react';

class State extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nome: 'Fulano',
            idade: '30'
        }
        console.log(this.state);
    }
    render(){
        const { nome, idade } = this.state;
        return (<h1>{nome} {idade}</h1>);
    }
}

export default State;