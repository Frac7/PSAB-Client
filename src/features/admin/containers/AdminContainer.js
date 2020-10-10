import React, { useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { Formik } from 'formik';
import { Container, Row, Col, Toast, ToastHeader, ToastBody } from 'reactstrap';

import Auth from '@aws-amplify/auth';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons/faCheck';

import RegisterUserForm from '../components';

import { initialValues, validationSchema } from '../values';
import { Selector } from '../../../store/user/reducer';

import { PROFILE } from '../../../config/routes';

/**
 * Admin section that contains the register user form.
 *
 * @param isAdmin
 * @returns {JSX.Element}
 * @constructor
 * @component
 */
const AdminContainer = ({ user: { data: { attributes: { 'custom:is_admin': isAdmin }} } }) => {
	const [registered, setRegistered] = useState(false);
	useEffect(() => {
		if (registered) {
			setTimeout(() => setRegistered(false), 5000);
		}
	}, [registered]);

	const history = useHistory();
	useEffect(() => {
		if(!parseInt(isAdmin)) {
			history.push(PROFILE);
		}
	}, [isAdmin, history]);

	const onSubmit = useCallback(({ name, email, address, password, role }, { setSubmitting, setErrors, resetForm }) => {
		const attributes = {
			name,
			email,
			'custom:role': role.toString(),
			'custom:is_admin': '0'
		};

		Auth.signUp({
			username: address,
			password,
			attributes
		})
			.then((result) => {
				setSubmitting(false);
				setRegistered(true);
				resetForm();
				})
			.catch((error) => {
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
				<Col xl={12} sm={12}>
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
};

AdminContainer.propTypes = {
	/**
	 * Current user
	 */
	user: PropTypes.object
};

const mapStateToProps = (state) => ({
	user: Selector.getUser(state)
});

export default connect(mapStateToProps)(AdminContainer);
