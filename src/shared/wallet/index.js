import React, { useCallback, useState } from 'react';
import { Formik } from 'formik';
import { string, object } from 'yup';

import { Col, Container, Row } from 'reactstrap';

import SeedPhraseForm from './SeedPhraseForm';
import HDWalletProvider from '@truffle/hdwallet-provider';

const withWallet = (Component) =>
	() => {
		const [isHDWalletProvider, setIsHDWalletProvider] = useState(window.web3.currentProvider.constructor.name === 'HDWalletProvider');

		const onSubmit = useCallback(({ phrase }, { setSubmitting, setErrors }) => {
			setSubmitting(false);

			try {
				const provider = new HDWalletProvider(phrase, 'https://goerli.infura.io/v3/2825ef3aeb9047b7ab6e108500f89b60', 0, 10);

				window.web3.setProvider(provider);
				setIsHDWalletProvider(true);
			} catch(error) {
				setErrors({ phrase: error.message });
			}
		}, [setIsHDWalletProvider]);

		if (!isHDWalletProvider) {
			return (
				<Container fluid>
					<Row className="justify-content-center align-content-center align-items-center">
						<Col xl={8} sm={8}>
							<h3>Seed Phrase</h3>
							<p>Inserire la Seed Phrase del proprio wallet per continuare</p>
						</Col>
					</Row>
					<Row className="justify-content-center align-content-center align-items-center">
						<Col xl={8} sm={8}>
							<Formik
								initialValues={{ phrase: '' }}
								validationSchema={object().shape(({
									phrase: string()
										.required('Inserire la seed phrase.')
										.matches(/([a-z]*){12}/, 'La frase deve contenere esattamente 12 parole')
								}))}
								onSubmit={onSubmit}
							>
								{props => <SeedPhraseForm {...props}/>}
							</Formik>
						</Col>
					</Row>
				</Container>
			);
		} else {
			return <Component />;
		}
	};

export default withWallet;
