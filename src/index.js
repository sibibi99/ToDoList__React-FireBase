import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
//Setup redux
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose  } from 'redux';

import rootReducer from './redux/index';
import thunk from 'redux-thunk';

const store = createStore(rootReducer,compose( applyMiddleware(thunk)));
ReactDOM.render(

    <Provider store={store}>
        <App />
    </Provider>
    ,
    document.getElementById('root'));



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
