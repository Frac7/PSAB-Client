import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { Row, Col, ListGroup, ListGroupItem, Alert } from 'reactstrap';
import { StyledBadge, StyledSpinner } from '../../../shared/styled';
import { DiscoverLand } from '../../../shared/views';

import { fetchLandsByOwner } from '../../../shared/utils';

/**
 * Details for user's lands.
 *
 * @param userAddress
 * @returns {JSX.Element}
 * @constructor
 * @component
 */
const OwnedLands = ({ userAddress }) => {
	const [elements, setElements] = useState([]);
	const [fetchErrors, setFetchErrors] = useState(false);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		fetchLandsByOwner(userAddress, setElements, setIsLoading, setFetchErrors);
	}, [userAddress, setElements, setIsLoading, setFetchErrors]);

	return (
		<Row className="align-items-center">
			<Col xl="auto">
				<h2>Terreni posseduti</h2>
			</Col>
			<Col>
				<StyledBadge>
					Owner
				</StyledBadge>
			</Col>
			<Col xl={12} sm={12}>
				{isLoading && (
					<StyledSpinner size="large"/>
				)}
				{fetchErrors && (
					<Alert color="danger" className="my-3">Si è verificato un errore nel caricamento dei terreni</Alert>
				)}
				{!elements.length && !isLoading && !fetchErrors && (
					<Alert color="info" className="my-3">Nessun terreno posseduto</Alert>
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
