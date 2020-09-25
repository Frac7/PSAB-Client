import React, { useMemo, useState, useCallback } from 'react';
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
	CONTRACT_TERMS
} from '../../../shared/values';
import { forms } from '../map';

const RegisterFormContainer = () => {
	// TODO: register product, prod activity and main activity can be performed only by operators
	const [currentForm, setCurrentForm] = useState(LAND);
	const { component: Form, initialValues, validationSchema, handleSubmit } = useMemo(() => forms[currentForm], [currentForm]);

	const [isOpen, setIsOpen] = useState(false);
	const [hasErrors, setHasErrors] = useState(false);

	const onSubmit = useCallback((values, { setSubmitting, resetForm }) => {
		if (values.documents) {
			values.documents.forEach((document) => {
				if (!hasErrors) {
					Storage.put(document.value, document.file)
						.then((result) => {
							console.log(result);
						})
						.catch((error) => {
							console.log(error);
							setHasErrors(true);
						});
				}
			});
		}

		const handleFeedback = (hasErrors) => {
			setHasErrors(hasErrors);
			setIsOpen(true);
			resetForm(initialValues);
			setSubmitting(false);
		}

		if(!hasErrors) {
			handleSubmit(values, handleFeedback);
		} else {
			handleFeedback(hasErrors);
		}
	}, [initialValues, handleSubmit, hasErrors]);

	return (
		<>
			<Container fluid>
				<Row className="justify-content-between align-items-center">
					<Col>
						<h1>Registra {currentForm}</h1>
					</Col>
					<Col md={5} className="justify-content-center">
						<ElementSelector
							elements={[
								LAND,
								PORTION,
								PRODUCT,
								PROD_ACTIVITIES,
								MAINTENANCE_ACTIVITIES,
								CONTRACT_TERMS
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
							{props => <Form {...props}/>}
						</Formik>
					</Col>
				</Row>
			</Container>
		<ToastFeedback isOpen={isOpen} setIsOpen={setIsOpen} hasErrors={hasErrors} />
	</>
	);
}

export default RegisterFormContainer;
