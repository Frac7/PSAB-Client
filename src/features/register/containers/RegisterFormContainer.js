import React, { useMemo, useState, useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'

import { Container, Row, Col } from 'reactstrap';
import { Formik } from 'formik';
import Storage from '@aws-amplify/storage';

import { ToastFeedback } from '../components';
import { ElementSelector } from '../../../shared/element-dropdown';

import {
	LAND,
	PORTION,
	PRODUCT,
	PROD_ACTIVITIES,
	MAINTENANCE_ACTIVITIES,
	CONTRACT_TERMS,
	TRANSFER_OWNERSHIP, OPERATOR, roles, CERTIFIER
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
	const [hasErrors, setHasErrors] = useState(false);

	const onSubmit = useCallback((values, { setSubmitting, resetForm }) => {
		if (values.documents && values.documents.length && !hasErrors) {
			Storage.put(values.documents[1], values.documents[0])
				.then((result) => {})
				.catch((error) => {
					setHasErrors(true);
				});
		}

		const handleFeedback = (hasErrors) => {
			setHasErrors(hasErrors);
			setIsOpen(true);
			resetForm(initialValues);
			setSubmitting(false);
		}

		if(!hasErrors) {
			handleSubmit({
				...values,
				...values.documents && values.documents.length ? {
					documents: [
						...values.documents,
						`https://psab-documents83040-dev.s3.amazonaws.com/public/${values.documents[1]}`
					]
				} : undefined
			}, handleFeedback, user.data.attributes['custom:eth_address']);
		} else {
			handleFeedback(hasErrors);
		}
	}, [initialValues, handleSubmit, hasErrors, user]);

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
				<Row>
					<Col xl={12} sm={12}>
						<Formik
							initialValues={initialValues}
							validationSchema={validationSchema}
							onSubmit={onSubmit}
						>
							{props => <Form userAddress={user.data.attributes['custom:eth_address']} {...props}/>}
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
