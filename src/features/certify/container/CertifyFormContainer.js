import React, { useState, useCallback } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Formik } from 'formik';

import { CertifyForm } from '../components';
import { FormSelector } from '../../../shared/form-dropdown';

import { initialValues, validationSchema } from '../map';
import { PROD_ACTIVITIES, PRODUCT } from '../../../shared/values';

const CertifyFormContainer = () => {
	const [currentForm, setCurrentForm] = useState(PRODUCT);

	const onSubmit = useCallback((values, { setSubmitting, resetForm }) => {
		// TODO: handle upload using s3 and redux-saga
		setTimeout(() => {
			setSubmitting(false);
			resetForm();
		}, 2500);
	}, []);

	return (
		<Container fluid>
			<Row className="justify-content-between align-items-center">
				<Col>
					<h1>Certifica {currentForm}</h1>
				</Col>
				<Col md={5} className="justify-content-center">
					<FormSelector
						forms={[
							PRODUCT,
							PROD_ACTIVITIES
						]}
						currentForm={currentForm}
						setCurrentForm={setCurrentForm}
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

	);
}

export default CertifyFormContainer;
