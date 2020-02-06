import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import cfgStore from './store';
import './index.css';
import App from './containers/App';
import * as serviceWorker from './serviceWorker';

const store = cfgStore();

ReactDOM.render(
    <Provider store={store}>
        <div className="container">
            <div className="row">
                <App />
            </div>
        </div>
    </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
