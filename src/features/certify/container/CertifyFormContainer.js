import React, { useState, useCallback } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Formik } from 'formik';

import { CertifyForm } from '../components';
import { ElementSelector } from '../../../shared/element-dropdown';

import { initialValues, validationSchema, handleSubmit } from '../map';
import { PROD_ACTIVITIES, PRODUCT } from '../../../shared/values';
import { ToastFeedback } from '../../register/components';

const CertifyFormContainer = () => {
	const [currentForm, setCurrentForm] = useState(PRODUCT);

	const [isOpen, setIsOpen] = useState(false);
	const [hasErrors, setHasErrors] = useState(false);
	const onSubmit = useCallback((values, { setSubmitting, resetForm }) => {
		const handleFeedback = (hasErrors) => {
			setHasErrors(hasErrors);
			setIsOpen(true);
			resetForm(initialValues);
			setSubmitting(false);
		}
		handleSubmit(values, handleFeedback, currentForm);
	}, [setHasErrors, setIsOpen, currentForm]);

	return (
		<>
			<Container fluid>
				<Row className="justify-content-between align-items-center">
					<Col>
						<h1>Certifica {currentForm}</h1>
					</Col>
					<Col md={5} className="justify-content-center">
						<ElementSelector
							elements={[
								PRODUCT,
								PROD_ACTIVITIES
							]}
							currentElement={currentForm}
							setCurrentElement={setCurrentForm}
						/>
					</Col>
				</Row>
				<Row>
					<Col md={12}>
						<Formik
							initialValues={initialValues}
							validationSchema={validationSchema}
							onSubmit={onSubmit}
						>
							{props => <CertifyForm {...props}/>}
						</Formik>
					</Col>
				</Row>
			</Container>
			<ToastFeedback isOpen={isOpen} setIsOpen={setIsOpen} hasErrors={hasErrors} />
		</>
	);
}

export default CertifyFormContainer;
