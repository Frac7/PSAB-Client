import React, { useState, useCallback } from 'react';
import { Col, Container, Row, Modal, ModalHeader, ModalBody } from 'reactstrap';

import DiscoverPortion from './DiscoverPortion';
import { StyledLinkButton, StyledTitle } from '../styled';

import { mock } from '../../features/discover/mock';
import { PORTION } from '../values';

const DiscoverActivity = ({ portion, description }) => {
	const Title = StyledTitle('h5');

	const [isOpen, setIsOpen] = useState(false);
	const handleClick = useCallback(() => {
		setIsOpen((isOpen) => !isOpen);
	}, [setIsOpen]);

	return (
		<Container fluid>
			<Row className="align-items-center my-3">
				<Col md={3} sm={12}>
					<Title>Porzione</Title>
				</Col>
				<Col>
					<StyledLinkButton color="link" onClick={handleClick}>
						Porzione #{portion}
					</StyledLinkButton>
					<Modal className="modal-lg" isOpen={isOpen} toggle={handleClick}>
						<ModalHeader toggle={handleClick}>
							Dettagli Porzione #{portion}</ModalHeader>
						<ModalBody>
							<DiscoverPortion {...mock[PORTION][0]}/>
						</ModalBody>
					</Modal>
				</Col>
			</Row>
			<Row className="align-items-center my-3">
				<Col md={3} sm={12}>
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
