import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { Row, Col, ListGroup, ListGroupItem, Alert } from 'reactstrap';
import { StyledBadge, StyledSpinner } from '../../../shared/styled';
import { DiscoverLand } from '../../../shared/view';

import contracts from '../../../shared/contracts';
import { LAND } from '../../../shared/values';

/**
 * Details for user's lands.
 *
 * @param userAddress
 * @returns {JSX.Element}
 * @constructor
 */
const OwnedLands = ({ userAddress }) => {
	const [elements, setElements] = useState([]);
	const [fetchErrors, setFetchErrors] = useState(false);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const elements = [];

		const landInstance = new window.web3.eth.Contract(contracts[LAND].ABI, contracts[LAND].address);
		landInstance.methods.getByOwner(userAddress)
			.call({ from : userAddress })
			.then((lands) => {
				console.log(lands);
				if (!lands.landsOwned.length) {
					setElements(elements);
					setIsLoading(false);
					return;
				}

				lands.landsOwned.forEach((id, index) => {
					landInstance.methods.getById(id)
						.call({ from: userAddress })
						.then((result) => {
							console.log(result);
							elements.push(result);

							if (index === lands.landsOwned.length - 1) {
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
				<h2>Terreni posseduti</h2>
			</Col>
			<Col>
				<StyledBadge>
					Owner
				</StyledBadge>
			</Col>
			<Col md={12} sm={12}>
				{isLoading && (
					<StyledSpinner size="large"/>
				)}
				{fetchErrors && (
					<Alert color="danger" className="my-3">Si è verificato un errore nel caricamento dei terreni</Alert>
				)}
				{!elements.length && (
					<Alert color="danger" className="my-3">Nessun terreno posseduto</Alert>
				)}
				<ListGroup flush>
				{elements.map((element, index) => (
					<ListGroupItem key={index}>
						<DiscoverLand {...element} />
					</ListGroupItem>
				))}
				</ListGroup>
			</Col>
		</Row>
	)
};

OwnedLands.propTypes = {
	/**
	 * Ethereum address
	 */
	userAddress: PropTypes.string
}

export default OwnedLands;
