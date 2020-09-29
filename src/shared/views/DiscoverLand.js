import React from 'react';
import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap';

import { StyledTitle } from '../styled';

const Title = StyledTitle('h5');

const DiscoverLand = ({ description, documents }) => (
	<Container fluid>
		<Row className="align-items-center my-3">
			<Col xl={3} sm={12}>
				<Title>Descrizione</Title>
			</Col>
			<Col>
				<p align="justify">{description}</p>
			</Col>
		</Row>
		{documents && (
		<Row className="align-items-center my-3">
			<Col xl={3} sm={12}>
				<Title>Documenti</Title>
			</Col>
			<Col>
				<ListGroup flush>
					<ListGroupItem className="text-success" tag="a" href={documents} target="_blank">Documento allegato</ListGroupItem>
				</ListGroup>
			</Col>
		</Row>)}
	</Container>
);

export default DiscoverLand;
