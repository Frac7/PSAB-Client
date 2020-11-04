import React, { useState, useCallback, useMemo } from 'react';
import { connect } from 'react-redux';

import { Col, Container, Modal, ModalBody, ModalHeader, Row, Alert } from 'reactstrap';

import DiscoverActivityProduct from './DiscoverActivityProduct';
import { StyledFilledButton, StyledSpinner, StyledTitle } from '../styled';

import contracts from '../../contracts';
import { MAINTENANCE_ACTIVITIES, PORTION, PROD_ACTIVITIES, PRODUCT } from '../values';
import { Selector } from '../../store/user/reducer';

const Title = StyledTitle('h5');

const ActivityProductOwnershipHandling = ({ id, isOpen, setIsOpen, user: { data: { username }} }) => {
	const userAddress = useMemo(() => username, [username]);

	const initialData = useMemo(() => ({
		[PORTION]: [],
		[PRODUCT]: [],
		[PROD_ACTIVITIES]: [],
		[MAINTENANCE_ACTIVITIES]: []
	}), []);
	const [data, setData] = useState(initialData);
	const [isLoading, setIsLoading] = useState(false);
	const [hasErrors, setHasErrors] = useState(false);

	const handleClick = useCallback(() => {
		setIsOpen((isOpen) => !isOpen);
		if (!isOpen) {
			setData(initialData);

			Object.keys(data).forEach((element) => {
				setIsLoading(true);
				const method = element === PORTION ? 'getBuyersByPortion' : 'getByPortion';
				const contractInstance = new window.web3.eth.Contract(contracts[element].ABI, contracts[element].address);
				contractInstance.methods[method](id)
					.call({ from: userAddress })
					.then((result) => {
						if (element === PORTION) {
							setData((data) => ({
								...data,
								[element]: result
							}));
						} else {
							if (result.length) {
								result.forEach((id, index) => {
									contractInstance.methods.getById(id)
										.call({ from: userAddress })
										.then((item) => {
											setData((data) => ({
												...data,
												[element]: [
													...data[element],{
														...item,
														id
													}]
											}));

											if (index === result.length - 1) {
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

	}, [id, userAddress, isOpen, setIsOpen, setIsLoading, initialData, data, setData]);

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
					{Object.keys(data).map((element, upperIndex) => {
						if (element === PORTION) {
							return (
								<Container fluid key={upperIndex}>
									<Row className="align-items-start my-3">
										<Col xl={3} sm={12}>
											<Title>Possessori</Title>
										</Col>
									</Row>
									<Row className="align-items-start my-3">
										<Col xl={9} sm={12}>
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
