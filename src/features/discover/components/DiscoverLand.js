import React from 'react';
import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap';

import { StyledTitle } from '../../../shared/styled';

const DiscoverLand = ({ description, documents }) => {
	const Title = StyledTitle('h5');

	return (
		<Container fluid>
			<Row className="align-items-center my-3">
				<Col md={3} sm={12}>
					<Title>Descrizione</Title>
				</Col>
				<Col>
					<p align="justify">{description}</p>
				</Col>
			</Row>
			<Row className="align-items-center my-3">
				<Col md={3} sm={12}>
					<Title>Documenti</Title>
				</Col>
				<Col>
					<ListGroup flush>
						{/* TODO: change with name s3 */}
						{documents.map((document, index) => (
							<ListGroupItem className="text-success" key={index} tag="a" href={document} target="_blank">Documento #{index}</ListGroupItem>
						))}
					</ListGroup>
				</Col>
			</Row>
		</Container>
	);
};

export default DiscoverLand;
