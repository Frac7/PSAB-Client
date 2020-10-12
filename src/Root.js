import React, { useMemo } from 'react';
import { HashRouter } from 'react-router-dom';

import Web3 from 'web3';
import HDWalletProvider from '@truffle/hdwallet-provider';

import App from './App';
import { Header } from './shared/header';

const Root = () => {
	const provider = useMemo(() => new HDWalletProvider({
		mnemonic: {
			phrase: 'fee phone sibling purchase lottery beauty cake cereal reason robust eye ice'
		},
		providerOrUrl: 'https://goerli.infura.io/v3/2825ef3aeb9047b7ab6e108500f89b60',
		addressIndex: 1
	}), []);

	window.web3 = useMemo(() => new Web3(provider), [provider]);

	return (
		<HashRouter>
			<Header />
			<App />
		</HashRouter>
	);
}

export default Root;
