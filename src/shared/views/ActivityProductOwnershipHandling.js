import React, { useState, useCallback, useMemo } from 'react';
import { connect } from 'react-redux';

import { Col, Container, Modal, ModalBody, ModalHeader, Row, Alert } from 'reactstrap';

import DiscoverActivityProduct from './DiscoverActivityProduct';
import { StyledFilledButton, StyledSpinner } from '../styled';

import contracts from '../contracts';
import { MAINTENANCE_ACTIVITIES, PORTION, PROD_ACTIVITIES, PRODUCT } from '../values';
import { Selector } from '../../store/user/reducer';

const ActivityProductOwnershipHandling = ({ id, isOpen, setIsOpen, user: { data: { attributes }} }) => {
	const userAddress = attributes['custom:eth_address'];

	// TODO: add ownership field
	const [data, setData] = useState({
		//[PORTION]: [],
		[PRODUCT]: [],
		[PROD_ACTIVITIES]: [],
		[MAINTENANCE_ACTIVITIES]: []
	});
	const [isLoading, setIsLoading] = useState(false);
	const [hasErrors, setHasErrors] = useState(false);

	const handleClick = useCallback(() => {
		setIsOpen((isOpen) => !isOpen);

		// TODO: set ownership data
		Object.keys(data).forEach((element) => {
			setIsLoading(true);
			const contractInstance = new window.web3.eth.Contract(contracts[element].ABI, contracts[element].address);
			contractInstance.methods.getByPortion(id)
				.call({from: userAddress})
				.then((result) => {
					console.log(result);
					if (result.length) {
						const items = [];

						result.forEach((id, index) => {
							contractInstance.methods.getById(id)
								.call({from: userAddress})
								.then((item) => {
									console.log(item);
									items.push(item);

									if (index === result.length - 1) {
										setData((data) => ({
											...data,
											[element]: items
										}));
										setIsLoading(false);
									}
								})
								.catch((error) => {
									console.log(error);
									setHasErrors(true);
									setIsLoading(false);
								});
						})
					} else {
						setIsLoading(false);
					}
				})
				.catch((error) => {
					console.log(error);
					setHasErrors(true);
					setIsLoading(false);
				});

		});

	}, [id, userAddress, setIsOpen, setIsLoading, data, setData]);

	return (
		<>
			<StyledFilledButton onClick={handleClick}>
				Sfoglia cronologia
			</StyledFilledButton>
			<Modal className="modal-lg" isOpen={isOpen} toggle={handleClick}>
				<ModalHeader toggle={handleClick}>
					Dettagli Porzione #{id}</ModalHeader>
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
					{Object.keys(data).forEach((element, upperIndex) => (
						<>
							{data[element].forEach(({ id, description, portion, registeredBy }, lowerIndex) => (
								<DiscoverActivityProduct
									key={`${upperIndex}${lowerIndex}`}
									element={element}
									description={description}
									portion={portion}
									id={id}
									registeredBy={registeredBy}
								/>
							))}
						</>
					))}
				</ModalBody>
			</Modal>
		</>
	)
};

export default connect((state) => ({ user: Selector.getUser(state) }))(ActivityProductOwnershipHandling);
