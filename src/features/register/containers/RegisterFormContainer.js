import React, { useMemo, useState, useCallback } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Formik } from 'formik';

import S3 from 'react-aws-s3';

import { ToastFeedback } from '../components';
import { ElementSelector } from '../../../shared/element-dropdown';

import {
	LAND,
	PORTION,
	PRODUCT,
	PROD_ACTIVITIES,
	MAINTENANCE_ACTIVITIES
} from '../../../shared/values';
import { forms } from '../map';

import config from '../../../config/storage';

const RegisterFormContainer = () => {
	const [currentForm, setCurrentForm] = useState(LAND);
	const { component: Form, initialValues, validationSchema } = useMemo(() => forms[currentForm], [currentForm]);

	const [isOpen, setIsOpen] = useState(false);
	const [hasErrors, setHasErrors] = useState(false);
	const onSubmit = useCallback((values, { setSubmitting, resetForm }) => {
		if (values.documents) {
			const ReactS3Client = new S3(config);
			values.documents.forEach((document) =>{
				ReactS3Client
					.uploadFile(document.file, document.value)
					.then((data) => {
						if (data.status !== 204) {
							setHasErrors(true);
						} else {
							setHasErrors(false);
						}
					}).catch((error) => {
						console.log(error);
						setHasErrors(true);
					});
			});
		}

		setTimeout(() => {
			setSubmitting(false);
			resetForm();
		}, 2500);
	}, []);

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
								MAINTENANCE_ACTIVITIES
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
