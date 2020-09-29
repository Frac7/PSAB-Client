import React, { useState, useCallback } from 'react';
import { connect } from 'react-redux';

import { Col, Container, Modal, ModalBody, ModalHeader, Row, Alert } from 'reactstrap';

import DiscoverActivityProduct from './DiscoverActivityProduct';
import { StyledFilledButton, StyledSpinner, StyledTitle } from '../styled';

import contracts from '../contracts';
import { MAINTENANCE_ACTIVITIES, PORTION, PROD_ACTIVITIES, PRODUCT } from '../values';
import { Selector } from '../../store/user/reducer';

const Title = StyledTitle('h5');

const ActivityProductOwnershipHandling = ({ id, isOpen, setIsOpen, user: { data: { attributes }} }) => {
	const userAddress = attributes['custom:eth_address'];

	const [data, setData] = useState({
		[PORTION]: [],
		[PRODUCT]: [],
		[PROD_ACTIVITIES]: [],
		[MAINTENANCE_ACTIVITIES]: []
	});
	const [isLoading, setIsLoading] = useState(false);
	const [hasErrors, setHasErrors] = useState(false);

	const handleClick = useCallback(() => {
		setIsOpen((isOpen) => !isOpen);
		if (!isOpen) {

			Object.keys(data).forEach((element) => {
				const method = element === PORTION ? 'getBuyersByPortion' : 'getByPortion';
				setIsLoading(true);
				const contractInstance = new window.web3.eth.Contract(contracts[element].ABI, contracts[element].address);
				contractInstance.methods[method](id)
					// .call({ from: userAddress })
					.call({ from: process.env.REACT_APP_USER_ADDRESS })
					.then((result) => {
						if (element === PORTION) {
							setData((data) => ({
								...data,
								[element]: result
							}));
						} else {
							if (result.length) {
								const items = [];

								result.forEach((id, index) => {
									contractInstance.methods.getById(id)
										// .call({ from: userAddress })
										.call({ from: process.env.REACT_APP_USER_ADDRESS })
										.then((item) => {
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
											setHasErrors(true);
											setIsLoading(false);
										});
								})
							} else {
								setIsLoading(false);
							}
					}})
					.catch((error) => {
						setHasErrors(true);
						setIsLoading(false);
					});

			});
		}

	}, [id, userAddress, isOpen, setIsOpen, setIsLoading, data, setData]);

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
					{Object.keys(data).map((element, upperIndex) => {
						if (element === PORTION) {
							return (
								<Container fluid>
									<Row className="align-items-center my-3">
										<Col md={3} sm={12}>
											<Title>Possessori</Title>
										</Col>
									</Row>
									<Row className="align-items-center my-3">
										<Col md={9} sm={12}>
											{data[PORTION].map((address, index) => (
												<p align="justify" key={index}>{address}</p>
											))}
										</Col>
									</Row>
								</Container>
							);
						}

						return data[element].map(({id, description, portion, registeredBy}, lowerIndex) => {
							return (
								<DiscoverActivityProduct
									key={`${upperIndex}${lowerIndex}`}
									element={element}
									description={description}
									portion={portion}
									id={id}
									registeredBy={registeredBy}
								/>
							);
						});
					})}
				</ModalBody>
			</Modal>
		</>
	)
};

export default connect((state) => ({ user: Selector.getUser(state) }))(ActivityProductOwnershipHandling);
