import React, { useState, useCallback } from 'react';
import { Col, Container, Row, Modal, ModalHeader, ModalBody } from 'reactstrap';

import DiscoverPortion from './DiscoverPortion';
import { StyledOutlinedButton, StyledTitle } from '../../../shared/styled';

import { mock } from '../mock';
import { PORTION } from '../../../shared/values';

const DiscoverActivity = ({ portion, description }) => {
	const Title = StyledTitle('h5');

	const [isOpen, setIsOpen] = useState(false);
	const handleClick = useCallback(() => {
		setIsOpen((isOpen) => !isOpen);
	}, [setIsOpen])

	return (
		<Container fluid>
			<Row className="align-items-center my-3">
				<Col md={3}>
					<Title>Porzione</Title>
				</Col>
				<Col>
					<StyledOutlinedButton outline onClick={handleClick}>
						Porzione #{portion}
					</StyledOutlinedButton>
					<Modal isOpen={isOpen} toggle={handleClick}>
						<ModalHeader toggle={handleClick}>
							Dettagli Porzione #{portion}</ModalHeader>
						<ModalBody>
							<DiscoverPortion {...mock[PORTION]}/>
						</ModalBody>
					</Modal>
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
