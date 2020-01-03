import React from 'react';

class Events2 extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            idade: '',
            data: []
        };
    }
    
    muda = (event) => {
        this.setState({
            // name: event.target.value,
            [event.target.name]: event.target.value
        });
        console.log('nome', this.state);
    }

    inserir = () => {
        const arr = this.state.data;
        arr.push(this.state.name);
        this.setState({
            name: '',
            arr: arr
        })
        // this.state.data.push(this.state.name);
        console.log(this.state);
    }

    render(){
        const {data} = this.state;
        return (
            <div>
                <input type="text" onChange={this.muda} name="name" id="name"></input>
                <input type="text" onChange={this.muda} name="idade" id="idade"></input> 
                <button type="button" onClick={this.inserir}>Enviar</button> <br />
                {this.state.name} - {this.state.idade} 
                <ul>
                    { data.map(item => (
                        <li key={item}>{item}</li>
                    )) }
                </ul>
            </div>
        );
    }
}

export default Events2;