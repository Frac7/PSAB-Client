import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { Row, Col, ListGroup, ListGroupItem, Alert } from 'reactstrap';
import { StyledBadge, StyledSpinner } from '../../../shared/styled';
import { DiscoverPortion } from '../../../shared/views';

import contracts from '../../../contracts';
import { PORTION } from '../../../shared/values';

/**
 * Details for user's portions.
 *
 * @param userAddress
 * @returns {JSX.Element}
 * @constructor
 * @component
 */
const OwnedPortions = ({ userAddress }) => {
	const [elements, setElements] = useState([]);
	const [fetchErrors, setFetchErrors] = useState(false);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		setElements([]);

		const portionInstance = new window.web3.eth.Contract(contracts[PORTION].ABI, contracts[PORTION].address);
		portionInstance.methods.getByOwner(userAddress)
			.call({ from: userAddress })
			.then((portions) => {
				if (!portions.length) {
					setElements([]);
					setIsLoading(false);
					return;
				}

				portions.forEach((id, index) => {
					portionInstance.methods.getById(id)
						.call({ from: userAddress })
						.then((result) => {
							setElements((elements) => ([
								...elements, {
									...result,
									id
								}]));

							if (index === portions.length - 1) {
								setIsLoading(false);
							}
						})
						.catch((error) => {
							setFetchErrors(true);
							setIsLoading(false);
						});
				});
			})
			.catch((error) => {
				setFetchErrors(true);
				setIsLoading(false);
			});
	}, [userAddress]);

	return (
		<>
			<Row className="my-3 align-items-center">
				<Col xl="auto">
					<h2>Porzioni possedute</h2>
				</Col>
				<Col>
					<StyledBadge>
						Owner
					</StyledBadge>
				</Col>
			</Row>
			<Row className="my-3 align-items-center">
				<Col xl={12} sm={12}>
					{isLoading && (
						<StyledSpinner size="large"/>
					)}
					{fetchErrors && (
						<Alert color="danger" className="my-3">Si è verificato un errore nel caricamento delle porzioni</Alert>
					)}
					{!elements.length && !isLoading && !fetchErrors && (
						<Alert color="info" className="my-3">Nessuna porzione posseduta</Alert>
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
		</>
	)
};

OwnedPortions.propTypes = {
	/**
	 * Ethereum address
	 */
	userAddress: PropTypes.string
}

export default OwnedPortions;
