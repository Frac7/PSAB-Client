import React, { useState, useCallback } from 'react';
import { connect } from 'react-redux';
import { Alert, Col, Container, ListGroup, ListGroupItem, Modal, ModalBody, ModalHeader, Row } from 'reactstrap';

import { StyledFilledButton, StyledSpinner } from '../styled';

import contracts from '../../contracts';
import { PORTION } from '../values';

import { Selector } from '../../store/user/reducer';
import LandPortionHandling from './LandPortionHandling';

const PortionLandHandling = ({ id, isOpen, setIsOpen, user: { data: { username }} }) => {
	const userAddress = username;

	const [data, setData] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [hasErrors, setHasErrors] = useState(false);

	const [isPortionOpen, setIsPortionOpen] = useState(false);
	const [openedPortion, setOpenedPortion] = useState(null);

	const handleClick = useCallback(() => {
		setIsOpen((isOpen) => !isOpen);
		if (!isOpen) {
			setData([]);
			setIsLoading(true);

			const contractInstance = new window.web3.eth.Contract(contracts[PORTION].ABI, contracts[PORTION].address);
			contractInstance.methods.getByLand(id)
				.call({ from: userAddress })
				.then((result) => {
					setData(result);
					setIsLoading(false);
				})
				.catch((error) => {
					setHasErrors(true);
					setIsLoading(false);
				});
		}

	}, [id, userAddress, isOpen, setIsOpen, setIsLoading, setData]);

	return (
		<>
			<StyledFilledButton onClick={handleClick}>
				Sfoglia porzioni
			</StyledFilledButton>
			<Modal className="modal-lg" isOpen={isOpen} toggle={handleClick}>
				<ModalHeader toggle={handleClick}>
					Dettagli Terreno #{id}</ModalHeader>
				<ModalBody>
					{isLoading && (
						<Container fluid>
							<Row className="my-3 justify-content-center align-content-center align-items-start">
								<Col xl="auto" sm="auto">
									<StyledSpinner size="large"/>
								</Col>
							</Row>
						</Container>
					)}
					{hasErrors && (
						<Container fluid>
							<Row className="justify-content-center align-content-center align-items-start">
								<Col xl={12} sm={12}>
									<Alert color="danger" className="my-3">Si è verificato un errore nel caricamento degli elementi</Alert>
								</Col>
							</Row>
						</Container>
					)}
					{!data.length && (
						<Alert color="info" className="my-3">Nessuna porzione registrata</Alert>
					)}
					<ListGroup flush>
					{data.map((item, index) => (
						<ListGroupItem key={index}>
							<LandPortionHandling
								id={item}
								isOpen={isPortionOpen && item === openedPortion}
								setIsOpen={setIsPortionOpen}
								setOpenedPortion={setOpenedPortion}
								element={PORTION}
							/>
						</ListGroupItem>
					))}
					</ListGroup>
				</ModalBody>
			</Modal>
		</>
	);
};

export default connect((state) => ({ user: Selector.getUser(state) }))(PortionLandHandling);
