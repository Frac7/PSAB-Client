import React, { useCallback, useState } from 'react';
import { connect } from 'react-redux';
import { Formik } from 'formik';
import { string, object, number } from 'yup';

import { Col, Container, Row } from 'reactstrap';

import SeedPhraseForm from './SeedPhraseForm';
import HDWalletProvider from '@truffle/hdwallet-provider';

import { Selector } from '../../store/user/reducer';

const withWallet = (Component) =>
	connect((state) => ({ user: Selector.getUser(state) }))(
		({ user: { data: { username } }}) => {
		const [isHDWalletProvider, setIsHDWalletProvider] = useState(window.web3.currentProvider.constructor.name === 'HDWalletProvider');

		const onSubmit = useCallback(({ phrase, index }, { setSubmitting, setErrors }) => {
			setSubmitting(false);

			try {
				const provider = new HDWalletProvider(phrase, 'https://goerli.infura.io/v3/2825ef3aeb9047b7ab6e108500f89b60', index);

				if (provider.getAddress() !== username.toLowerCase()) {
					setErrors({ index: 'L\'indice inserito non corrisponde all\'address dell\'account' });
				} else {
					window.web3.setProvider(provider);
					setIsHDWalletProvider(true);
				}
			} catch(error) {
				setErrors({ phrase: error.message });
			}
		}, [setIsHDWalletProvider, username]);

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
								initialValues={{ phrase: '', index: 0 }}
								validationSchema={object().shape(({
									index: number()
										.min(0, 'L\'indice deve essere maggiore o uguale a 0')
										.integer('L\'indice deve essere un numero intero')
										.required('Inserire l\'indice dell\'address'),
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
	});

export default withWallet;
