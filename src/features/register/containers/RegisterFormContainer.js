import React, { useMemo, useState, useCallback } from 'react';
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
	TRANSFER_OWNERSHIP, OPERATOR, roles
} from '../../../shared/values';
import { forms } from '../map';
import { Selector } from '../../../store/user/reducer';

/**
 * Container for elements registration.
 *
 * @param user
 * @returns {JSX.Element}
 * @constructor
 * @component
 */
const RegisterFormContainer = ({ user }) => {
	const [currentForm, setCurrentForm] = useState(LAND);
	const { component: Form, initialValues, validationSchema, handleSubmit } = useMemo(() => forms[currentForm], [currentForm]);

	const [isOpen, setIsOpen] = useState(false);
	const [hasErrors, setHasErrors] = useState(false);

	const onSubmit = useCallback((values, { setSubmitting, resetForm }) => {
		if (values.documents && !hasErrors) {
			Storage.put(values.documents.value, values.documents.file)
				.then((result) => {
					console.log(result);
				})
				.catch((error) => {
					console.log(error);
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
				documents: {
					...values.documents,
					value: values.documents ?
						`https://psab-documents83040-dev.s3.amazonaws.com/public/${document.value}` :
						undefined
				}
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
					<Col md={5} sm={12} className="justify-content-center">
						<ElementSelector
							elements={[
								{
									type: LAND
								},
								{
									type: PORTION
								},
								{
									type: CONTRACT_TERMS
								},
								{
									type: TRANSFER_OWNERSHIP
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
					<Col md={12} sm={12}>
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
