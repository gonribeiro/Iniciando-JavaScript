import React from 'react';

class Hora2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            time: new Date().toLocaleString('es-US', {
                hour: 'numeric',
                minute: 'numeric',
                second: 'numeric',
                hour12: true
            })
        }
    }
    componentDidMount(){
        this.timer = setInterval(() => {
            this.atualizarHora()
        }, 1000);
    }
    componentWillUnmount(){
        clearInterval(this.timer);
    }
    atualizarHora(){
        this.setState({
            time: new Date().toLocaleString('es-US', {
                hour: 'numeric',
                minute: 'numeric',
                second: 'numeric',
                hour12: true
            })
        });
    }
    render(){
        const { time } = this.state;
        return (
            <h1>{time}</h1>
        );
    }
}

export default Hora2;