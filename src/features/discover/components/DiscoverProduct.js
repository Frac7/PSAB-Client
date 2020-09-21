import React, { useState, useCallback } from 'react';
import { Col, Container, Row, Modal, ModalHeader, ModalBody, ListGroup, ListGroupItem } from 'reactstrap';

import DiscoverPortion from './DiscoverPortion';
import { StyledFilledButton, StyledOutlinedButton, StyledTitle } from '../../../shared/styled';

import { mock } from '../mock';
import { PORTION } from '../../../shared/values';

const DiscoverProduct = ({ id, portion, description }) => {
	const Title = StyledTitle('h5');

	const [isPortionOpen, setIsPortionOpen] = useState(false);
	const handlePortionClick = useCallback(() => {
		setIsPortionOpen((isOpen) => !isOpen);
	}, [setIsPortionOpen]);

	const [isHistoryOpen, setIsHistoryOpen] = useState(false);
	const handleHistoryClick = useCallback(() => {
		setIsHistoryOpen((isOpen) => !isOpen);
	}, [setIsHistoryOpen]);

	return (
		<Container fluid>
			<Row className="align-items-center my-3">
				<Col md={3}>
					<Title>Porzione</Title>
				</Col>
				<Col>
					<StyledOutlinedButton outline onClick={handlePortionClick}>
						Porzione #{portion}
					</StyledOutlinedButton>
					<Modal isOpen={isPortionOpen} toggle={handlePortionClick}>
						<ModalHeader toggle={handlePortionClick}>
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
			<Row className="align-items-center justify-content-end my-3">
				<Col md={9} align="end">
					<StyledFilledButton onClick={handleHistoryClick}>
						Sfoglia cronologia
					</StyledFilledButton>
					<Modal isOpen={isHistoryOpen} toggle={handleHistoryClick}>
						<ModalHeader toggle={handleHistoryClick}>
							Dettagli Prodotto #{id}</ModalHeader>
						<ModalBody>
							<ListGroup flush>
								{[].map((item, index) => (
									<ListGroupItem key={index}>{item}</ListGroupItem>
								))}
							</ListGroup>
						</ModalBody>
					</Modal>
				</Col>
			</Row>
		</Container>
	);
};

export default DiscoverProduct;
