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

import Auth from '@aws-amplify/auth';
import Storage from '@aws-amplify/storage';

Auth.configure({
	identityPoolId: process.env.REACT_APP_COGNITO_USER_POOL_ID,
	region: process.env.REACT_APP_REGION
});
Storage.configure({
	bucket: process.env.REACT_APP_BUCKET_NAME,
	region: process.env.REACT_APP_REGION
});

window.addEventListener('load', () => {
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
