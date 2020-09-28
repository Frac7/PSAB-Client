import React, { useState, useCallback } from 'react';

import { Col, Container, ListGroup, ListGroupItem, Modal, ModalBody, ModalHeader, Row, Alert } from 'reactstrap';
import { StyledFilledButton, StyledSpinner, StyledTitle } from '../styled';

import contracts from '../contracts';

const Title = StyledTitle('h5');

const CertificationHandling = ({ id, isOpen, setIsOpen, element, user: { data: { attributes }} }) => {
	const userAddress = attributes['custom:eth_address'];

	const [data, setData] = useState({});
	const [isLoading, setIsLoading] = useState(false);
	const [hasErrors, setHasErrors] = useState(false);

	const handleClick = useCallback(() => {
		setIsLoading(true);
		setIsOpen((isOpen) => !isOpen);

		const contractInstance = new window.web3.eth.Contract(contracts[element].ABI, contracts[element].address);
		contractInstance.methods.getByItem(id)
			.call({ from: userAddress })
			.then((result) => {
				console.log(result);
				setData(result);
				setIsLoading(false);
			})
			.catch((error) => {
				console.log(error);
				setHasErrors(true);
				setIsLoading(false);
			})

	}, [id, userAddress, element, setIsOpen, setIsLoading, setData]);

	return (
		<>
			<StyledFilledButton onClick={handleClick}>
				Sfoglia cronologia
			</StyledFilledButton>
			<Modal className="modal-lg" isOpen={isOpen} toggle={handleClick}>
				<ModalHeader toggle={handleClick}>
					Dettagli {element} #{id}</ModalHeader>
				<ModalBody>
					{isLoading && (
						<Container fluid>
							<Row className="justify-content-center align-content-center align-items-center">
								<Col md={1} sm={1}>
									<StyledSpinner size="large"/>
								</Col>
							</Row>
						</Container>
					)}
					{hasErrors && (
						<Container fluid>
							<Row className="justify-content-center align-content-center align-items-center">
								<Col md={12} sm={12}>
									<Alert color="danger" className="my-3">Si è verificato un errore nel caricamento degli elementi</Alert>
								</Col>
							</Row>
						</Container>
					)}
					<ListGroup flush>
						{data.map(({ description, certifier }, index) => (
							<ListGroupItem key={index}>
								<Container fluid>
									<Row className="my-3">
										<Col>
											<h6 className="text-black-50">Certificazione</h6>
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
		</>
	)
};

export default CertificationHandling;
