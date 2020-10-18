import React, { useState } from 'react';
import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap';

import { StyledTitle } from '../styled';
import PortionLandHandling from './PortionLandHandling';

const Title = StyledTitle('h5');

const DiscoverLand = ({ id, description, documents }) => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<Container fluid>
			<Row className="align-items-center my-3 justify-content-end">
				<Col xl={9} sm={12} align="end">
					<PortionLandHandling
						id={id}
						isOpen={isOpen}
						setIsOpen={setIsOpen}
					/>
				</Col>
			</Row>
			<Row className="align-items-center my-3">
				<Col xl={3} sm={12}>
					<Title>Descrizione</Title>
				</Col>
				<Col>
					<p align="justify">{description}</p>
				</Col>
			</Row>
			{documents.length && (
				<Row className="align-items-center my-3">
					<Col xl={3} sm={12}>
						<Title>Documenti</Title>
					</Col>
					<Col>
						<ListGroup flush>
							{documents.map((document, index) => <ListGroupItem key={index} className="text-success" tag="a" href={`https://psab-documents225914-dev.s3.amazonaws.com/public/${window.web3.utils.toAscii(document)}`} target="_blank">Documento allegato #{index}</ListGroupItem>
							)}
						</ListGroup>
					</Col>
				</Row>)}
		</Container>
	);
}

export default DiscoverLand;
