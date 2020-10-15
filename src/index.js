import React from 'react';
import ReactDOM from 'react-dom';

import Web3 from 'web3';

import { Provider } from 'react-redux';
import store from './store';

import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Root from './Root';
import * as serviceWorker from './serviceWorker';

import configureAwsAmplify from './config/aws-amplify';

configureAwsAmplify();

// window.web3 = new Web3('https://goerli.infura.io/v3/2825ef3aeb9047b7ab6e108500f89b60');
window.web3 = new Web3('http://localhost:7545');

ReactDOM.render(
	<Provider store={store}>
		<Root />
	</Provider>,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
