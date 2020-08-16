import React from 'react';
import ReactDOM from 'react-dom';

// eslint-disable-next-line
import Web3 from 'web3';

import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Root from './Root';
import * as serviceWorker from './serviceWorker';

window.addEventListener('load', () => {
    window.ethereum.enable(
		ReactDOM.render(
			<React.StrictMode>
				<Root />
			</React.StrictMode>,
			document.getElementById('root')
		)
	);
});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
