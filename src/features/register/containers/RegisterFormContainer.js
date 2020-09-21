import React, { useMemo, useState, useCallback } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Formik } from 'formik';

import { FormSelector } from '../components';

import { LAND } from '../values';
import { forms } from '../map';

const RegisterFormContainer = () => {
	const [currentForm, setCurrentForm] = useState(LAND);

	const { component: Form, initialValues, validationSchema } = useMemo(() => forms[currentForm], [currentForm]);

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
					<h1>Registra {currentForm}</h1>
				</Col>
				<Col md={5} className="justify-content-center">
					<FormSelector currentForm={currentForm} setCurrentForm={setCurrentForm} />
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

	);
}

export default RegisterFormContainer;
