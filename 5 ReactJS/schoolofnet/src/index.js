import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Hello from './Hello';
import Hora from './Hora';
import Props from './Props';
import State from './State';
import Hora2 from './Hora2';
import Events from './Events';
import Events2 from './Events2';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<Hello />, document.getElementById('root'));
ReactDOM.render(<Hora />, document.getElementById('root'));
ReactDOM.render(<Props teste1="Valor1" teste2='Valor2' />, document.getElementById('root'));
ReactDOM.render(<State />, document.getElementById('root'));
ReactDOM.render(<Hora2 />, document.getElementById('root'));
ReactDOM.render(<Events />, document.getElementById('root'));
ReactDOM.render(<Events2 />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
