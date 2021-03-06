import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { Row, Col, ListGroup, ListGroupItem, Alert } from 'reactstrap';
import { StyledBadge, StyledSpinner } from '../../../shared/styled';
import { DiscoverPortion } from '../../../shared/views';

import contracts from '../../../contracts';
import { PORTION } from '../../../shared/values';

/**
 * Details for portions purchased by the current user.
 *
 * @param userAddress
 * @returns {JSX.Element}
 * @constructor
 * @component
 */
const PurchasedPortions = ({ userAddress }) => {
	const [elements, setElements] = useState([]);
	const [fetchErrors, setFetchErrors] = useState(false);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		setElements([]);

		const portionInstance = new window.web3.eth.Contract(contracts[PORTION].ABI, contracts[PORTION].address);
		portionInstance.methods.getByBuyer(userAddress)
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
					<h2>Porzioni di terreno acquistate</h2>
				</Col>
				<Col>
					<StyledBadge>
						Buyer
					</StyledBadge>
				</Col>
			</Row>
			<Row className="my-3 align-items-center">
				<Col xl={12} sm={12}>
					{isLoading && (
						<StyledSpinner size="large"/>
					)}
					{fetchErrors && (
						<Alert color="danger" className="my-3">Si è verificato un errore nel caricamento delle porzioni di terreno</Alert>
					)}
					{!elements.length && !isLoading && !fetchErrors && (
						<Alert color="info" className="my-3">Nessuna porzione di terreno acquistata</Alert>
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

PurchasedPortions.propTypes = {
	/**
	 * Current user address
	 */
	userAddress: PropTypes.string
};

export default PurchasedPortions;
