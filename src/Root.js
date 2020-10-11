import React, { useState, useEffect } from 'react';
import { HashRouter } from 'react-router-dom';
import { Col, Container, Row } from 'reactstrap';

import { useWeb3Network, useEphemeralKey } from '@openzeppelin/network/react';
import { GSNProvider } from '@openzeppelin/gsn-provider';
import Wallet from 'ethereumjs-wallet';
import Web3 from 'web3';

import App from './App';
import { Header } from './shared/header';
import { StyledSpinner } from './shared/styled';

const Root = () => {
	const [isLoading, setIsLoading] = useState(true);
	const { connected } = useWeb3Network('wss://goerli.infura.io/ws/v3/2825ef3aeb9047b7ab6e108500f89b60', {
		gsn: { signKey: useEphemeralKey() }
	});

	window.web3 = new Web3(new GSNProvider('https://goerli.infura.io/v3/2825ef3aeb9047b7ab6e108500f89b60', {
		signKey: Wallet.generate().privKey
	}));
	useEffect(() => {
		if (connected) {
			setIsLoading(false);
		}
	}, [connected]);

	if (isLoading) {
		return (
			<Container fluid>
				<Row className="my-3 justify-content-center align-content-center align-items-center">
					<Col sm="auto" xl="auto">
						<h1>Connessione...</h1>
					</Col>
				</Row>
				<Row className="my-3 justify-content-center align-content-center align-items-center">
					<Col xl="auto" sm="auto">
						<StyledSpinner size="large"/>
					</Col>
				</Row>
			</Container>
		);
	}

	return (
		<HashRouter>
			<Header />
			<App />
		</HashRouter>
	);
}

export default Root;
