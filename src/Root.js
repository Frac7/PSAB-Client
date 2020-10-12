import React  from 'react';
import { HashRouter } from 'react-router-dom';

import App from './App';
import { Header } from './shared/header';

const Root = () => (
	<HashRouter>
		<Header />
		<App />
	</HashRouter>
);

export default Root;
