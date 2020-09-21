import React, { useState } from 'react';
import { Col, Container, Row } from 'reactstrap';

import { StyledOutlinedButton, StyledTitle } from '../../../shared/styled';

const DiscoverActivity = ({ portion, description }) => {
	const Title = StyledTitle('h5');

	const [isOpen, setIsOpen] = useState(false);

	return (
		<Container fluid>
			<Row className="align-items-center my-3">
				<Col md={3}>
					<Title>Porzione</Title>
				</Col>
				<Col>
					<StyledOutlinedButton outline>Porzione #{portion}</StyledOutlinedButton>
				</Col>
			</Row>
			<Row className="align-items-center my-3">
				<Col md={3}>
					<Title>Descrizione</Title>
				</Col>
				<Col>
					<p align="justify">{description}</p>
				</Col>
			</Row>
		</Container>
	);
};

export default DiscoverActivity;
