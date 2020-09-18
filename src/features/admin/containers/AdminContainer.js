import React from 'react';

import { Container, Row, Col } from 'reactstrap';

import UserList from '../components';
import { StyledFilledButton } from '../../../shared/styled';

const AdminContainer = () => (
	<Container fluid>
		<Row>
			<Col>
				<h1>Gestione utenti</h1>
			</Col>
		</Row>
		<Row className="justify-content-end" style={{ padding: '1rem' }}>
			<Col md="auto">
				<StyledFilledButton>
					Aggiungi utente
				</StyledFilledButton>
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
