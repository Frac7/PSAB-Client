import React, { useCallback } from 'react';

import { Formik } from 'formik';
import { Container, Row, Col } from 'reactstrap';

import RegisterUserForm from '../components';
import { initialValues, validationSchema } from '../values';

const AdminContainer = ({ name, email, address, password }) => {
	const onSubmit = useCallback(() => {

	}, []);

	return (
		<Container fluid>
			<Row style={{ padding: '1rem' }}>
				<Col>
					<h1>Aggiungi utente</h1>
				</Col>
			</Row>
			<Row>
				<Col md={12}>
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
	)
}

export default AdminContainer;
