import React from 'react';
import ReactDOM from 'react-dom';

// eslint-disable-next-line
import Web3 from 'web3';

import { Provider } from 'react-redux';
import store from './store';

import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Root from './Root';
import * as serviceWorker from './serviceWorker';

import configureAwsAmplify from './config/aws-amplify';

window.addEventListener('load', () => {
	configureAwsAmplify();

	if (typeof window.web3 !== 'undefined') {
		window.web3 = new Web3(window.web3.currentProvider);
	} else {
		window.web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:7545"));
	}

    window.ethereum.enable(
		ReactDOM.render(
			<Provider store={store}>
				<Root />
			</Provider>,
			document.getElementById('root')
		)
	);
});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
