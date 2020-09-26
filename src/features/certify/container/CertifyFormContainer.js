import React, { useState, useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { Container, Row, Col } from 'reactstrap';
import { Formik } from 'formik';

import { CertifyForm } from '../components';
import { ToastFeedback } from '../../register/components';
import { ElementSelector } from '../../../shared/element-dropdown';

import { initialValues, validationSchema, handleSubmit } from '../map';
import { CERTIFIER, PROD_ACTIVITIES, PRODUCT, roles } from '../../../shared/values';
import { Selector } from '../../../store/user/reducer';

import { PROFILE } from '../../../config/routes';

/**
 * Certify section for certifying elements.
 *
 * @param user
 * @returns {JSX.Element}
 * @constructor
 * @component
 */
const CertifyFormContainer = ({ user }) => {
	const history = useHistory();

	useEffect(() => {
		if(user.data) {
			const { attributes } = user.data;
			if (attributes['custom:role'] !== roles.indexOf(CERTIFIER).toString()) {
				history.push(PROFILE);
			}
		}
	}, [user, history]);

	const [currentForm, setCurrentForm] = useState(PRODUCT);

	const [isOpen, setIsOpen] = useState(false);
	const [hasErrors, setHasErrors] = useState(false);
	const onSubmit = useCallback((values, { setSubmitting, resetForm }) => {
		const handleFeedback = (hasErrors) => {
			resetForm(initialValues);
			setSubmitting(false);

			setHasErrors(hasErrors);
			setIsOpen(true);
		}
		handleSubmit(values, handleFeedback, currentForm, user.data.attributes['custom:eth_address']);
	}, [setHasErrors, setIsOpen, currentForm, user]);

	return (
		<>
			<Container fluid>
				<Row className="justify-content-between align-items-center">
					<Col>
						<h1>Certifica {currentForm}</h1>
					</Col>
					<Col md={5} sm={12} className="justify-content-center">
						<ElementSelector
							elements={[
								{
									type: PRODUCT
								},
								{
									type: PROD_ACTIVITIES
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
							{props => <CertifyForm
								currentForm={currentForm}
								userAddress={user.data.attributes['custom:eth_address']}
								{...props}/>}
						</Formik>
					</Col>
				</Row>
			</Container>
			<ToastFeedback isOpen={isOpen} setIsOpen={setIsOpen} hasErrors={hasErrors} />
		</>
	);
};

CertifyFormContainer.propTypes = {
	/**
	 * Logged in user
	 */
	user: PropTypes.object
}

const mapStateToProps = (state) => ({
	user: Selector.getUser(state)
});

export default connect(mapStateToProps)(CertifyFormContainer);
