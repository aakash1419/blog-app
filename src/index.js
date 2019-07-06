import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './App';
import * as serviceWorker from './serviceWorker';

import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import combineReducers from './reducers/index';

const md = applyMiddleware(thunk);

const store = createStore(combineReducers, md);


ReactDOM.render(
    <Provider store= {store}>
        <Header />
    </Provider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
