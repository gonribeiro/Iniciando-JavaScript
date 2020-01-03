import React from 'react';

class Events extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            clicado: 0
        };

        this.click2 = this.click2.bind(this);
    }
    
    click(){
        console.log('teste');
    }

    click2(){
        console.log(this.state.clicado);
        this.setState({
            clicado: this.state.clicado + 1
        });
    }

    click3 = () => {
        console.log(this.state.clicado);
        this.setState({
            clicado: this.state.clicado + 1
        });
    }

    render(){
        return (
            <div>
                <button onClick={this.click} type="button">Teste1</button>
                <button onClick={this.click2} type="button">Teste2</button>
                <button onClick={this.click3} type="button">Teste3</button>
            </div>
        );
    }
}

export default Events;