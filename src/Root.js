import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import { Header } from './shared/header';

const Root = () => {
	return (
		<BrowserRouter>
			<Header />
			<App />
		</BrowserRouter>
	);
}

export default Root;
