import React from 'react';

import { Container, Row, Col } from 'reactstrap';

import UserList from '../components';

const AdminContainer = () => (
	<Container fluid>
		<Row>
			<Col>
				<h1>Gestione utenti</h1>
			</Col>
		</Row>
		<Row>
			<Col md={12}>
				<UserList />
			</Col>
		</Row>
	</Container>
)

export default AdminContainer;
