import React, { useCallback, useEffect, useState } from 'react';

import { Formik } from 'formik';
import { Container, Row, Col, Toast, ToastHeader, ToastBody } from 'reactstrap';

import Auth from '@aws-amplify/auth';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons/faCheck';

import RegisterUserForm from '../components';

import { initialValues, validationSchema } from '../values';
import { roles, USER } from '../../../shared/values';

const AdminContainer = () => {
	const [registered, setRegistered] = useState(false);

	useEffect(() => {
		if (registered) {
			setTimeout(() => setRegistered(false), 5000);
		}
	}, [registered]);

	const onSubmit = useCallback(({ name, email, address, password, role }, { setSubmitting, setErrors, resetForm }) => {
		const attributes = {
			name,
			'custom:eth_address': address,
			'custom:role': role.toString(),
			'custom:is_admin': '0'
		};

		Auth.signUp({
			username: email,
			password,
			attributes
		})
			.then((result) => {
				console.log(result);
				setSubmitting(false);
				setRegistered(true);
				resetForm();
			}).catch((error) => {
			console.log(error);
			setSubmitting(false);
			setErrors({ role: error.message });

		})
	}, []);

	return (
		<>
		<Container fluid>
			<Row>
				<Col>
					<h1>Aggiungi utente</h1>
				</Col>
			</Row>
			<Row>
				<Col md={12}>
					<Formik
						initialValues={initialValues}
						validationSchema={validationSchema}
						onSubmit={onSubmit}
					>
						{props => <RegisterUserForm {...props}/>}
					</Formik>
				</Col>
			</Row>
		</Container>
		<Toast style={{ position: 'fixed', bottom: '10%', right: '10%' }} color="primary" isOpen={registered}>
			<ToastHeader><FontAwesomeIcon icon={faCheck} color="#006D77"/> Utente registrato</ToastHeader>
			<ToastBody>L'utente è stato registrato correttamente</ToastBody>
		</Toast>
		</>
	)
}

export default AdminContainer;
