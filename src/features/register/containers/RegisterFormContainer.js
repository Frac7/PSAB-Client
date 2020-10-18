import React, { useMemo, useState, useCallback, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'

import { Container, Row, Col } from 'reactstrap';
import { Formik } from 'formik';

import { ToastFeedback } from '../components';
import { ElementSelector } from '../../../shared/element-dropdown';
import TransactionLoader from '../../../shared/transaction-loader';

import {
	LAND,
	PORTION,
	PRODUCT,
	PROD_ACTIVITIES,
	MAINTENANCE_ACTIVITIES,
	CONTRACT_TERMS,
	TRANSFER_OWNERSHIP,
	DOCUMENTS,
	OPERATOR,
	CERTIFIER,
	roles,
} from '../../../shared/values';
import { forms } from '../map';
import { Selector } from '../../../store/user/reducer';
import { useHistory } from 'react-router-dom';
import { PROFILE } from '../../../config/routes';

/**
 * Container for elements registration.
 *
 * @param user
 * @returns {JSX.Element}
 * @constructor
 * @component
 */
const RegisterFormContainer = ({ user }) => {
	const history = useHistory();

	useEffect(() => {
		if(user.data) {
			const { attributes } = user.data;
			if (attributes['custom:role'] === roles.indexOf(CERTIFIER).toString()) {
				history.push(PROFILE);
			}
		}
	}, [user, history]);

	const [currentForm, setCurrentForm] = useState(
		user.data.attributes['custom:role'] === roles.indexOf(OPERATOR).toString() ? PRODUCT : LAND
	);
	const { component: Form, initialValues, validationSchema, handleSubmit } = useMemo(() => forms[currentForm], [currentForm]);

	const [isOpen, setIsOpen] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const [hasErrors, setHasErrors] = useState(false);

	const form = useRef(null);

	useEffect(() => {
		if (hasErrors && isOpen) {
			setTimeout(() => setHasErrors(false), 5000);
		}
	}, [hasErrors, setHasErrors, isOpen])

	const onSubmit = useCallback((values, { setSubmitting, resetForm }) => {
		setIsLoading(true);

		const handleFeedback = (hasErrors) => {
			if ((currentForm === LAND || currentForm === PORTION) && form.current) {
				form.current.reset();
			}
			resetForm(initialValues);
			setSubmitting(false);

			setHasErrors(hasErrors);
			setIsOpen(true);
			setIsLoading(false);
		}

		handleSubmit(values, handleFeedback, user.data.username);
	}, [currentForm, initialValues, handleSubmit, user]);

	return (
		<>
			<Container fluid>
				<Row className="justify-content-between align-items-center">
					<Col>
						<h1>Registra {currentForm}</h1>
					</Col>
					<Col xl={5} sm={12} className="justify-content-center">
						<ElementSelector
							elements={[
								{
									type: LAND,
									disabled: user.data.attributes['custom:role'] === roles.indexOf(OPERATOR).toString()
								},
								{
									type: PORTION,
									disabled: user.data.attributes['custom:role'] === roles.indexOf(OPERATOR).toString()
								},
								{
									type: DOCUMENTS,
									disabled: user.data.attributes['custom:role'] === roles.indexOf(OPERATOR).toString()
								},
								{
									type: CONTRACT_TERMS,
									disabled: user.data.attributes['custom:role'] === roles.indexOf(OPERATOR).toString()
								},
								{
									type: TRANSFER_OWNERSHIP,
									disabled: user.data.attributes['custom:role'] === roles.indexOf(OPERATOR).toString()
								},
								{
									type: PRODUCT,
									disabled: user.data.attributes['custom:role'] !== roles.indexOf(OPERATOR).toString()
								},
								{
									type: PROD_ACTIVITIES,
									disabled: user.data.attributes['custom:role'] !== roles.indexOf(OPERATOR).toString()
								},
								{
									type: MAINTENANCE_ACTIVITIES,
									disabled: user.data.attributes['custom:role'] !== roles.indexOf(OPERATOR).toString()
								}
							]}
							currentElement={currentForm}
							setCurrentElement={setCurrentForm}
						/>
					</Col>
				</Row>
				{isLoading && <TransactionLoader />}
				<Row>
					<Col xl={12} sm={12}>
						<Formik
							initialValues={initialValues}
							validationSchema={validationSchema}
							onSubmit={onSubmit}
						>
							{props => <Form reference={form} userAddress={user.data.username} {...props}/>}
						</Formik>
					</Col>
				</Row>
			</Container>
		<ToastFeedback isOpen={isOpen} setIsOpen={setIsOpen} hasErrors={hasErrors} />
	</>
	);
}

const mapStateToProps = (state) => ({
	user: Selector.getUser(state)
});

RegisterFormContainer.propTypes = {
	/**
	 * Current user details
	 */
	user: PropTypes.object
}

export default connect(mapStateToProps)(RegisterFormContainer);
