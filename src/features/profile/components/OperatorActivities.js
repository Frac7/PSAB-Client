import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { Row, Col, ListGroup, ListGroupItem, Alert } from 'reactstrap';
import { StyledBadge, StyledSpinner } from '../../../shared/styled';
import { DiscoverActivityProduct } from '../../../shared/views';

import { MAINTENANCE_ACTIVITIES, PROD_ACTIVITIES, PRODUCT } from '../../../shared/values';
import { handleFetch } from '../utils';

/**
 * Activities related to operator user.
 *
 * @param userAddress
 * @returns {JSX.Element}
 * @constructor
 * @component
 */
const OperatorActivities = ({ userAddress }) => {
	const [activities, setActivities] = useState([]);
	const [maintenance, setMaintenance] = useState([]);
	const [products, setProducts] = useState([]);
	const [fetchErrors, setFetchErrors] = useState(false);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		setProducts([]);
		handleFetch(userAddress, setProducts, setFetchErrors, setIsLoading, PRODUCT, 'Operator');
		setActivities([]);
		handleFetch(userAddress, setActivities, setFetchErrors, setIsLoading, MAINTENANCE_ACTIVITIES, 'Operator');
		setMaintenance([]);
		handleFetch(userAddress, setMaintenance, setFetchErrors, setIsLoading, PROD_ACTIVITIES, 'Operator');
	}, [userAddress, setProducts, setFetchErrors, setIsLoading]);

	return (
		<Row className="align-items-center">
			<Col xl="auto">
				<h2>Attività di produzione, manutenzione e prodotti registrati</h2>
			</Col>
			<Col>
				<StyledBadge>
					Operator
				</StyledBadge>
			</Col>
			<Col xl={12} sm={12}>
				{isLoading && (
					<StyledSpinner size="large"/>
				)}
				{fetchErrors && (
					<Alert color="danger" className="my-3">Si è verificato un errore nel caricamento degli elementi</Alert>
				)}
				{!activities.length && (
					<Alert color="info" className="my-3">Nessuna attività di produzione registrata</Alert>
				)}
				{!maintenance.length && (
					<Alert color="info" className="my-3">Nessuna attività di produzione registrata</Alert>
				)}
				{!products.length && (
					<Alert color="info" className="my-3">Nessun prodotto registrato</Alert>
				)}
				<ListGroup flush>
					{activities.map((element, index) => (
						<ListGroupItem key={index}>
							<DiscoverActivityProduct {...element} element={PROD_ACTIVITIES} />
						</ListGroupItem>
					))}
					{maintenance.map((element, index) => (
						<ListGroupItem key={index}>
							<DiscoverActivityProduct {...element} element={MAINTENANCE_ACTIVITIES} />
						</ListGroupItem>
					))}
					{products.map((element, index) => (
						<ListGroupItem key={index}>
							<DiscoverActivityProduct {...element} element={PRODUCT} />
						</ListGroupItem>
					))}
				</ListGroup>
			</Col>
		</Row>
	)
};

OperatorActivities.propTypes = {
	/**
	 * Ethereum address for the current user
	 */
	userAddress: PropTypes.string
};

export default OperatorActivities;
