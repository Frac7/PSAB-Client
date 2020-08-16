import React from 'react';
import { HashRouter } from 'react-router-dom';

import App from './App';
import { Header } from './shared/header';

const Root = () => {
	return (
		<HashRouter>
			<Header />
			<App />
		</HashRouter>
	);
}

export default Root;
