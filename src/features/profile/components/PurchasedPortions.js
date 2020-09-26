import React, { useEffect, useState } from 'react';

import { Row, Col, ListGroup, ListGroupItem, Alert } from 'reactstrap';
import { StyledBadge, StyledSpinner } from '../../../shared/styled';
import { DiscoverPortion } from '../../../shared/view';

import contracts from '../../../shared/contracts';
import { PORTION } from '../../../shared/values';

const PurchasedPortions = ({ userAddress }) => {
	const [elements, setElements] = useState([]);
	const [fetchErrors, setFetchErrors] = useState(false);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const elements = [];

		const portionInstance = new window.web3.eth.Contract(contracts[PORTION].ABI, contracts[PORTION].address);
		portionInstance.methods.getByBuyer(userAddress)
			.call({ from : userAddress })
			.then((portions) => {
				console.log(portions);
				if (!portions.portionsBought.length) {
					setElements(elements);
					setIsLoading(false);
					return;
				}

				portions.portionsBought.forEach((id, index) => {
					portionInstance.methods.getById(id)
						.call({ from: userAddress })
						.then((result) => {
							console.log(result);
							elements.push(result);

							if (index === portions.portionsBought.length - 1) {
								setElements(elements);
								setIsLoading(false);
							}
						})
						.catch((error) => {
							console.log(error);
							setFetchErrors(true);
							setIsLoading(false);
						});
				});
			})
			.catch((error) => {
				console.log(error);
				setFetchErrors(true);
				setIsLoading(false);
			});
	}, [userAddress]);

	return (
		<Row className="align-items-center">
			<Col md="auto">
				<h2>Porzioni di terreno acquistate</h2>
			</Col>
			<Col>
				<StyledBadge>
					Buyer
				</StyledBadge>
			</Col>
			<Col md={12} sm={12}>
				{isLoading && (
					<StyledSpinner size="large"/>
				)}
				{fetchErrors && (
					<Alert color="danger" className="my-3">Si è verificato un errore nel caricamento delle porzioni di terreno</Alert>
				)}
				{!elements.length && (
					<Alert color="danger" className="my-3">Nessuna porzione di terreno acquistata</Alert>
				)}
				<ListGroup flush>
					{elements.map((element, index) => (
						<ListGroupItem key={index}>
							<DiscoverPortion {...element} />
						</ListGroupItem>
					))}
				</ListGroup>
			</Col>
		</Row>
	)
}

export default PurchasedPortions;
