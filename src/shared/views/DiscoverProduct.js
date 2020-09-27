import React, { useState, useCallback } from 'react';
import { Col, Container, Row, Modal, ModalHeader, ModalBody, ListGroup, ListGroupItem } from 'reactstrap';

import { StyledFilledButton, StyledTitle } from '../styled';

import LandPortionHandling from './LandPortionHandling';

import { PORTION } from '../values';

const DiscoverProduct = ({ id, portion, description, certifications, registeredBy }) => {
	const Title = StyledTitle('h5');

	const [isPortionOpen, setIsPortionOpen] = useState(false);

	const [isHistoryOpen, setIsHistoryOpen] = useState(false);
	const handleHistoryClick = useCallback(() => {
		setIsHistoryOpen((isOpen) => !isOpen);
	}, [setIsHistoryOpen]);

	return (
		<Container fluid>
			<Row className="align-items-center justify-content-end my-3">
				<Col md={9} sm={12} align="end">
					<StyledFilledButton onClick={handleHistoryClick}>
						Sfoglia cronologia
					</StyledFilledButton>
					<Modal className="modal-lg" isOpen={isHistoryOpen} toggle={handleHistoryClick}>
						<ModalHeader toggle={handleHistoryClick}>
							Dettagli Prodotto #{id}</ModalHeader>
						<ModalBody>
							<ListGroup flush>
								{certifications && certifications.map(({ description, certifier }, index) => (
									<ListGroupItem key={index}>
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
													<Title>Certificato da</Title>
												</Col>
												<Col>
													<p align="justify">{certifier}</p>
												</Col>
											</Row>
										</Container>
									</ListGroupItem>
								))}
							</ListGroup>
						</ModalBody>
					</Modal>
				</Col>
			</Row>
			<Row className="align-items-center my-3">
				<Col md={3} sm={12}>
					<Title>Porzione</Title>
				</Col>
				<Col>
					<LandPortionHandling
						id={portion}
						isOpen={isPortionOpen}
						setIsOpen={setIsPortionOpen}
						element={PORTION}
					/>
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
			<Row className="align-items-center my-3">
				<Col md={3} sm={12}>
					<Title>Registrato da</Title>
				</Col>
				<Col>
					<p align="justify">{registeredBy}</p>
				</Col>
			</Row>
		</Container>
	);
};

export default DiscoverProduct;
