import React, { useState } from 'react';
import { Container, Row, Col } from 'reactstrap';

import { FormSelector } from '../components';

import {
	PRODUCT,
	PROD_ACTIVITIES,
	LAND,
	PORTION,
	MAINTENANCE_ACTIVITIES
} from '../values';
import { forms } from '../map';

const RegisterFormContainer = () => {
	const [currentForm, setCurrentForm] = useState(LAND);

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
			{forms[currentForm]}
		</Container>

	);
}

export default RegisterFormContainer;
